const db = require('../../lib/db');
const pessoaModel = require('../pessoa/pessoa.model');
const contatoModel = require('../contato/contato.model');
const enderecoModel = require('../endereco/endereco.model');

exports.get = async (params) => {
    try {

        const conn = await db.conn();

        const sql_paciente = 'SELECT ' +
                    'pes.cod_pessoa, ' +
                    'pes.no_pessoa, ' +
                    'pes.rg_pessoa, ' +
                    'pes.cpf_pessoa, ' +
                    'pes.dt_nasc_pessoa, ' +
                    'pes.tp_sangui_pessoa, ' +
                    'pes.dt_cadastro, ' +
                    'ende.uf, ' +
                    'ende.cidade, ' +
                    'ende.bairro, ' +
                    'ende.endereco, ' +
                    'ende.numero, ' +
                    'conta.de_contato, ' +
                    'paci.de_paciente ' +
            'FROM webclinica.tb001_pessoa as pes ' +
            'LEFT JOIN webclinica.tb003_endereco as ende ON(ende.cod_pessoa=pes.cod_pessoa) ' +
            'LEFT JOIN webclinica.tb005_contato as conta ON(conta.cod_pessoa=pes.cod_pessoa) ' +
            'LEFT JOIN webclinica.tb007_paciente as paci ON(paci.cod_pessoa=pes.cod_pessoa) ' +
            'ORDER BY pes.cod_pessoa DESC ';
        
        const result = await conn.query(sql_paciente);
        
        await conn.end();

        return result.rows;
    } catch (err) {
        console.error(err);
    }
}

exports.inserir = async (params) => {

    let conn = null;

    try {
        if (!params.paciente) {
            return "Informe os dados do paciente";
        }

        const paciente = params.paciente;

        if (!paciente.nome) {
            return 'Informe o nome do paciente';
        }
        
        if (!paciente.cpf) {
            return 'Informe o CPF do paciente';
        }

        if (!paciente.dt_nasc) {
            return 'Informe a Data de Nascimento';
        }

        if (!paciente.no_usuario) {
            return 'Informe um Nome de usuário';
        }

        if (!paciente.sh_usuario) {
            return 'Informe uma senha para o usuário';
        }

        paciente.dt_cadastro = new Date();
        paciente.tp_sangui = !paciente.tp_sangui ? null : paciente.tp_sangui
        
        conn = await db.conn();

        // pessoa
        const sql_pessoa = pessoaModel.insertSql;
        const sql_pessoa_params = [
            paciente.nome, 
            paciente.rg, 
            paciente.cpf, 
            paciente.dt_nasc,
            paciente.tp_sangui,
            paciente.dt_cadastro,
            paciente.no_usuario,
            paciente.sh_usuario];

        await conn.query('BEGIN'); // Inicia uma transação

        const res_pessoa = await conn.query(sql_pessoa, sql_pessoa_params);

        // Contato
        const sql_contato = contatoModel.inserirSql;
        await conn.query(sql_contato, [
                res_pessoa.rows[0].cod_pessoa, 
                null, 
                paciente.de_contato]);

        // Endereço
        const sql_endereco = enderecoModel.inserirSql;
        await conn.query(sql_endereco, [
            res_pessoa.rows[0].cod_pessoa,
            null,
            paciente.uf, 
            paciente.cidade, 
            paciente.bairro, 
            paciente.endereco, 
            paciente.numero
        ]);
        
        // Paciente
        const sql_paciente = "INSERT INTO webclinica.tb007_paciente " +
            "(cod_pessoa, cod_plano_saude, de_paciente) " +
            "VALUES ($1, $2, $3) RETURNING cod_paciente ";

        const sql_paciente_params = [
            res_pessoa.rows[0].cod_pessoa,
            null, 
            paciente.de_paciente];
        
        const res_paciente = await conn.query(sql_paciente, sql_paciente_params);
        
        await conn.query('COMMIT'); // Encerra a transação

        return { cod_paciente: res_paciente.rows[0].cod_paciente };
    } catch (err) {
        await conn.query('ROLLBACK');
        console.error(err);
    }
}

exports.delete = async (params) => {
    try {
        if (!params.cod_pessoa) {
            return 'Informe o código da pessoa';
        }

        const conn = await db.conn();

        await conn.query('BEGIN');

        await conn.query('DELETE FROM webclinica.tb007_paciente WHERE cod_pessoa = $1', [params.cod_pessoa]);
        await conn.query('DELETE FROM webclinica.tb005_contato WHERE cod_pessoa = $1', [params.cod_pessoa]);
        await conn.query('DELETE FROM webclinica.tb003_endereco WHERE cod_pessoa = $1', [params.cod_pessoa]);
        await conn.query('DELETE FROM webclinica.tb001_pessoa WHERE cod_pessoa = $1', [params.cod_pessoa]);

        await conn.query('COMMIT'); 

        return params.cod_pessoa;

    } catch (err) {
        await conn.query('ROLLBACK');
        console.error(err);
    }
}