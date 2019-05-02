const response = require('../../lib/response');
const pacienteModel = require('./pacientes.model');

exports.get = async (req, res, next) => {
    try {
        const pacientesLs = await pacienteModel.get(req.body);
        
        res.send(response.format(pacientesLs));
    } catch (err) {
        console.error(err);
        next(false);
    }
}

exports.put = async (req, res, next) => {
    try  {
        const pacientesLs = await pacienteModel.inserir(req.body);

        res.send(response.format(pacientesLs));
    } catch (err) {
        console.error(err);
        next(false);
    }
}

exports.delete = async (req, res, next) => {
    try {
        const deleted = await pacienteModel.delete(req.params);

        res.send(response.format(deleted));
    } catch (err) {
        console.error(err);
    }
}