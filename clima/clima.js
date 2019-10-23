const axios = require('axios');

const getClima = async(lat, lon) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=db8f358f0c45eb54bca15374d3903620&units=metric`);
    return resp.data.main.temp;
};

module.exports = {
    getClima
};