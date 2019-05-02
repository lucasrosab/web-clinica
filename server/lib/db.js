const pg = require('pg');

exports.conn = async () => {

    return await new pg.Pool({
        user: 'postgres',
        host: 'localhost',
        database: 'clinica',
        password: '1234',
        port: 5432,
    });
}

