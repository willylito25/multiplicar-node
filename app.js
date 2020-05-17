const argv = require('./config/yargs').argv;
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = String(argv._[0]).toLowerCase();

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(archivo))
            .catch(err => console.log(err));
        break;

    default:
        console.log('Comando no reconocido');
}