const optsDesc = {
    descripcion: {
        demand: true,
        alias: 'd'
    }
};

const optsActualizar = {
    optsDesc,
    completado: {
        alias: 'c',
        default: true
    }
};

const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', optsDesc)
    .command('actualizar', 'Actualiza el estado completado de una tarea', optsActualizar)
    .command('borrar', 'Borra una tarea', optsDesc)
    .help()
    .argv;

module.exports = {
    argv
}