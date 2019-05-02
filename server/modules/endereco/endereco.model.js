const db = require('../../lib/db');

exports.get = async (params) => {
    try {

        const conn = await db.conn();
        
        const result = await conn.query('SELECT cod_tipo_endereco, no_tipo_endereco ' +
            'FROM webclinica.tb002_tipo_endereco ' +
            'ORDER BY cod_tipo_endereco ASC ');
        
        await conn.end();

        return result.rows;
    } catch (err) {
        console.error(err);
    }
}

exports.inserirSql = 'INSERT INTO webclinica.tb003_endereco ' +
    '(cod_pessoa, cod_tipo_endereco, uf, cidade, bairro, endereco, numero) ' + 
    'VALUES ($1, $2, $3, $4, $5, $6, $7);'