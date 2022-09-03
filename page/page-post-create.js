const supertest = require('supertest');
const env = require('dotenv').config();

const api = supertest(process.env.endpoint);
const postCreate = () => api.post('/api/users') 

module.exports = {
    postCreate
}