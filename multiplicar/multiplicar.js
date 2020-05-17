const colors = require('colors');
const fs = require('fs');

let data = '';

let listarTabla = (b, l = 10) => {
    console.log('=============='.green);
    console.log(`Tabla del ${b}`.red);
    console.log('=============='.green);
    for (let i = 1; i <= l; i++) { console.log(`${b} X ${i} = ${b*i}`); }
}

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }

        for (let i = 1; i <= limite; i++) {
            data += `${base} x ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {

            if (err)
                reject(err);
            else
                resolve('Archivo creado:' + colors.red(` tabla-${base}.txt`));
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}