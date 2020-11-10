const argv = require('yargs')
    .command('listar', 'imprime en pantalla la tabla en binario', {
        base:{
            demand: true,
            alias: 'b'
        },
       

    })
    .command('crear', 'Crea un archivo con la tabla en binario', {
        base:{
            demand: true,
            alias: 'b'
        },
       

    })
    .help()
    .argv;
const yargs = require('yargs');
const multiplicar = require('./multiplicacion/multiplicacion');

let comando = argv._[0];
let base = argv.base;


switch(comando) {
    case `listar`:
    
    multiplicar.listarTabla(base)
    .then ()
    .catch(error => console.log(`Ocurrio un error ${error}`));
    break;
    
    case `crear`:
    
    multiplicar
        .crearArchivo(base)
    .then(archivo => console.log(`El archivo ${archivo} ha sido generado con exito`))
    .catch(error => console.log(`Ocurrio un error ${error}`));
   
    break;
    default:
    console.log(`Comando no reconocido`);
} 
