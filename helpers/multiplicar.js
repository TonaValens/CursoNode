const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5, listar, hasta) => {
    try {
        
        let salida = '';

        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
        }

        if(listar)
        {
            console.log('============================='.bgBlue);
            console.log('       Tabla del ', base);
            console.log('============================='.bgCyan);
            console.log(salida.random);
        }
            
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return (`Archivo tabla-${base}.txt creado`);
    } catch (error) {
        throw error;
    }

}

module.exports = {
    crearArchivo
}