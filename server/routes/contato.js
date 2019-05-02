const contatoCtrl = require('../modules/contato/contato.controller');

exports.init = (server) => {
    server.get('/api/contatos', contatoCtrl.get);
}