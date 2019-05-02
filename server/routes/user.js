const userCtrl = require('../modules/user/user.controller');

exports.init = (server) => {

    server.put('/api/user', userCtrl.put);
}