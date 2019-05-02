// Rotas
const ROUTES = [
    'common',
    'pacientes',
    'contato',
    'endereco'
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