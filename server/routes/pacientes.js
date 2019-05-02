const pacientesCtrl = require('../modules/pacientes/pacientes.controller');

exports.init = (server) => {
    server.get('/api/pacientes', pacientesCtrl.get);
    server.put('/api/pacientes', pacientesCtrl.put);
}