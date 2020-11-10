const fs = require('fs'); // aqui importamos el paquete de manipulacion de archivos

let crearArchivo = (base) => {
        return new Promise((resolve, reject) => {
            let tabla = "";
            let decimal = base;
            if(!Number(base)){
                reject('Favor de insertar un valor numerico');
                return;
            }

           

            

let binario = decimal.toString(2);
console.log(tabla+=binario);


            fs.writeFile(`tablas/Binario-${base}.txt`, tabla, (err) => {
                if (err) reject (err);
                else
                resolve (`tabla-${base}.txt`)
            });
        });
};
let listarTabla = (base) => {
    return new Promise((resolve, reject) => {
       
        if(!Number(base)){
            reject('Favor de insertar un valor numerico');
            return;
        }
        
        console.log(tabla+=binario);
            

    }); 
};  
module.exports = {
    crearArchivo,
    listarTabla
};