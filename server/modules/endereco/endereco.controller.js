const response = require('../../lib/response');
const enderecoModel = require('./endereco.model');

exports.get = async (req, res, next) => {
    try {
        const enderecoLs = await enderecoModel.get(req.body);
        
        res.send(response.format(enderecoLs));
    } catch (err) {
        console.error(err);
        next(false);
    }
}
