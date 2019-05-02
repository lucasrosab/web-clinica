const pg = require('pg');

exports.conn = async () => {

    return await new pg.Pool({
        user: 'postgres',
        host: 'localhost',
        database: 'postgres',
        password: '090897',
        port: 5432,
    });
}

