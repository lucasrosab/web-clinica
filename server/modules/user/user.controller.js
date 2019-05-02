const response = require('../../lib/response');
const userModel = require('./user.model');

exports.put = async (req, res, next) => {
    try {

        const user = await userModel.put(req.body);

        res.send(response.format(user));
        next();
    } catch (err) {
        console.log(err);
        next(false);
    }
}