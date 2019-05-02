const response = require('../../lib/response');
const contatoModel = require('./contato.model');

exports.get = async (req, res, next) => {
    try {
        const contatoLs = await contatoModel.get(req.body);
        
        res.send(response.format(contatoLs));
    } catch (err) {
        console.error(err);
        next(false);
    }
}
