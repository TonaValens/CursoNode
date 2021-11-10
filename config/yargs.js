const argv = require('yargs')
    .options({
        'b': {
            alias: 'base',
            type: 'number',
            demandOption: true,
            describe: 'Es la base de la tabla de multiplicar'
        },
        'l': {
            alias: 'listar',
            type: 'boolean',
            default: false,
            describe: 'Muestra los resultados en la consola'
        },
        'h': {
            alias: 'hasta',
            type: 'number',            
            default: 10,
            describe: 'Número hasta el cual se va a multiplicar'
        }
    })
    .check((argv, options) => {
        if (isNaN(argv.b) || isNaN(argv.h)) {
            throw 'La Base o el Hasta debe de ser un número';
        }
        return true;
    }).argv;

module.exports = argv;