const axios = require('axios');

module.exports = (customHeader) => {
    return axios.create({
        baseURL: 'http://localhost:3000',
        headers: customHeader || {},
    });
};