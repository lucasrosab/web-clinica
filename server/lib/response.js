// Formata response padrão
exports.format = (dados) => {
    try {

        return {
            result: dados
        };

    } catch (err) {
        console.error(err);
    }
}