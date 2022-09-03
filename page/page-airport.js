const supertest = require('supertest');
const env = require('dotenv').config();
const id = 'KIX';
const token = 'zZaPCZFsF3w3qwxiLFDkXGtf';
const id_favorite = "6789";

const api = supertest(process.env.airport) // <- process untuk menload file env dan endpoint nya

// Get Process Data Airports And Favorite
const getAirport = () => api.get('/api/airports')
const getAirportById = () => api.get('/api/airports/' + id)
const getFavoriteById = () => api.get('/api/favorites/' + id_favorite)
    .auth(token, {type: 'bearer'})

// Post Process Create Favorite
const createFavorite = (airport_id, note) => api.post('/api/favorites')
    .set('Content-Type', 'application/json')
    .auth(token, {type: 'bearer'})
    .query({airport_id : airport_id, note : note})

module.exports = {
    getAirport,
    getAirportById,
    createFavorite,
    getFavoriteById
}