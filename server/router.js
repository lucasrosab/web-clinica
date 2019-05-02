// Rotas
const ROUTES = [
    'common',
    'pacientes',
    'user'
];

// Carrega os recursos de rotas
exports.routerFactory = (server) => {
    try {
        
        for(let i = 0; i < ROUTES.length; i++) {
            console.log('Carregando recurso: ' + ROUTES[i]);
            require('./routes/' + ROUTES[i]).init(server);
        }
    } catch (err) {
        
        console.error(err);
    }
}