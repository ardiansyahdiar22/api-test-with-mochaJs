const supertest = require('supertest');
const env = require('dotenv').config();
const id = 'KIX';

const api = supertest(process.env.airport); // <- process untuk menload file env dan endpoint nya
const getAirport = () => api.get('/api/airports')
const getAirportById = () => api.get('/api/airports/' + id);

module.exports = {
    getAirport,
    getAirportById
}