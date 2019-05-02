// Rotas comuns
const response = require('../lib/response');

exports.init = (server) => {

    server.get('/api/', (req, res, next) => {
        res.send(404, response.format('Recurso indisponível'));
        next();
    });
}