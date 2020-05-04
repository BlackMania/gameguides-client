const axios = require('axios');

module.exports = (body, customHeader) => {
    return axios.create({
        baseURL: 'http://localhost:3000',
        headers: customHeader || {},
        body: body
    });
};