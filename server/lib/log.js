//Função de Logs
exports.logInit = (req, res, next) => {

    const dateTime = new Date();
    console.log('Route[' + req.method + '][' + dateTime + ']: ' + req.url);
    next();
}