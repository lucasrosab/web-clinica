const pacientesCtrl = require('../modules/pacientes/pacientes.controller');

exports.init = (server) => {
    server.get('/api/pacientes', pacientesCtrl.get);
    server.post('/api/pacientes', pacientesCtrl.put);
    server.delete('/api/pacientes/:cod_pessoa', pacientesCtrl.delete);
}