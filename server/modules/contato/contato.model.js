const db = require('../../lib/db');

exports.get = async (params) => {
    try {

        const conn = await db.conn();
        
        const result = await conn.query('SELECT cod_tipo_contato, no_tipo_contato ' +
            'FROM webclinica.tb004_tipo_contato ' +
            'ORDER BY cod_tipo_contato ASC ');
        
        await conn.end();

        return result.rows;
    } catch (err) {
        console.error(err);
    }
}


exports.inserirSql = 'INSERT INTO webclinica.tb005_contato ' +
    '(cod_pessoa, cod_tipo_contato, de_contato) VALUES ($1, $2, $3)';

exports.inserir = async (params) => {
    try {

        if (!params.cod_pessoa) {
            return 'Informe o código da pessoa';
        }

        if (!params.de_contato) {
            return 'Informe uma descrição para o contato';
        }

        params.cod_tp_contato = !params.cod_tp_contato ? null : params.cod_tp_contato
        
        const conn = await db.conn();

        const result = await conn.query(this.inserirSql, [
                params.cod_pessoa, params.cod_tp_contato, params.de_contato
            ]);

        await conn.end();

        return result.rows[0].cod_pessoa;
    } catch (err) {
        console.error(err);
    }
}