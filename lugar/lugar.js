const axios = require('axios');
const argv = require('../yargs/yargs').argv;

const getLugarLatLng = async(dir) => {

    const encodedUlr = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUlr}`,
        headers: { 'x-rapidapi-key': '827aa48728msh8ed9ca80122ca75p1937d5jsn19a4c0aa8c6f' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    };

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lon = data.lon;

    return {
        direccion,
        lat,
        lon
    };
};

module.exports = {
    getLugarLatLng
};