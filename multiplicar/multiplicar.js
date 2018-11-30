const fs = require('fs'); // ya existe en node
var colors = require('colors');

let listarTabla = (base, limite) => {
    console.log("==================".red);
    console.log(`Tabla de ${ base }`.green);
    console.log("==================".red);
    for (let index = 1; index <= limite; index++) {
        console.log(`${ base } * ${ index } = ${ base * index }`);
    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) =>  {
        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es un numero`);
            return;
        }
        let data = '';
        for (let index = 1; index <= limite; index++) {
            data += `${ base } * ${ index } = ${ base * index }\n`;

        }

        fs.writeFile(`tablas/tabla-${ base }-al-${ limite }.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${ base }-al-${ limite }.txt`.red)

        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}