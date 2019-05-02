const response = require('../../lib/response');
const pacienteModel = require('./pacientes.model');

exports.get = async (req, res, next) => {
    try {
        const pacientesLs = await pacienteModel.get(req.params);

        console.log('\n\n === pacientesLs: ', pacientesLs);

        res.send(response.format(pacientesLs));
    } catch (err) {
        console.error(err);
        next(false);
    }
}

exports.put = async (req, res, next) => {
    try  {
        const pacientesLs = await pacienteModel.put(req.body);

        res.send(response.format(pacientesLs));
    } catch (err) {
        console.error(err);
        next(false);
    }
}