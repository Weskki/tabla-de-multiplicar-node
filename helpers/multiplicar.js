const fileSystem = require('fs')
const colors = require('colors')


const crearArchivo = async(base = 5,listar,final) => {
        try {
            let salida = '';
            let consola = '';
            for (let index = 1; index <= final; index++) {
                salida += `${base} x ${index} = ${base * index}\n`;
                consola += `${base} ${'x'.green} ${index} ${'='.green} ${base * index}\n`;
            }
            if (listar) {
                console.log('===================='.green);
                console.log(`    Tabla del: ${colors.blue(base)}`);
                console.log('===================='.green);
                console.log(consola);
            }
            nombre = `tabla-${base}.txt`;
            fileSystem.writeFileSync(`./salida/${nombre}`,salida);
            return (`tabla-${base}.txt`);
        } catch (error) {
            throw error;
        }
}

module.exports = {
    crearArchivo
}