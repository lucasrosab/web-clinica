const enderecoCtrl = require('../modules/endereco/endereco.controller');

exports.init = (server) => {
    server.get('/api/enderecos', enderecoCtrl.get);
}