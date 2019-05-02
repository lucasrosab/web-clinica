const db = require('../../lib/db');

exports.get = async (params) => {
    try {

        const conn = await db.conn();
        
        const result = await conn.query('SELECT * FROM webclinica.tb001_pessoa');

        console.log('\n\n ---result: ', result.rows);

        await conn.end();

        return result.rows;
        
        /* , (error, results) => {
            if (error) {
                throw error;
            }

            console.log('\n\n === query pg: ', results.rows);

            return results.rows;
        }); */

    } catch (err) {
        console.error(err);
    }
}

exports.put = async (params) => {
    try {
        if (!params.paciente) {
            return "Informe os dados do paciente";
        }

        const paciente = params.paciente;

        if (!paciente.nome) {
            return 'Informe o nome do paciente';
        }

        db.query('INSERT INTO webclinica.tb001_pessoa', (error, result) => {
            if (error) {
                throw error;
            }

            console.log('\n\n ---result.insertId: ', result.insertId);

            return result.insertId;
        });

        return pacientes;
    } catch (err) {
        console.error(err);
    }
}
