const lugar = require('./lugar/lugar');
const argv = require('./yargs/yargs').argv;
const clima = require('./clima/clima');



const getInfo = async(dir) => {

    try {
        const obtenerLugar = await lugar.getLugarLatLng(dir);
        const obtenerClima = await clima.getClima(obtenerLugar.lat, obtenerLugar.lon);
        return `EL clima de ${obtenerLugar.direccion} es de ${obtenerClima}°`;
    } catch (error) {
        return `No se pudo determinar el clima de ${dir}`;
    }

};

getInfo(argv.direccion).then(console.log).catch(console.log);


// lugar.getLugarLatLng(argv.direccion).then(console.log);

// clima.getClima(51.509998, -0.130000).then(console.log).catch(console.log);