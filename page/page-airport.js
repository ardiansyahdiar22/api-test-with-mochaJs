const supertest = require('supertest');
const env = require('dotenv').config();
const tokenAndId = require('../id/token_file.js');

const api = supertest(process.env.airport) // <- process untuk menload file env dan endpoint nya


// Post Process Create Favorite
const createFavorite = (airport_id, note) => api.post('/api/favorites')
    .set('Content-Type', 'application/json')
    .auth(tokenAndId.getToken(), {type: 'bearer'})
    .query({
        airport_id : airport_id, 
        note : note
    })

// Get Process Data Airports And Favorite
const getAirport = () => api.get('/api/airports')
const getAirportById = () => api.get('/api/airports/' + tokenAndId.getId())
const getFavoriteById = () => api.get('/api/favorites/' + tokenAndId.getIdFav())
    .auth(tokenAndId.getToken(), {type: 'bearer'})


// Patch process airport
const editNote = (id, note) => api.patch('/api/favorites/' + tokenAndId.getIdFav())
    .set('Content-Type', 'application/json')
    .auth(tokenAndId.getToken(), {type: 'bearer'})
    .query({
        id: id,
        note: note
    })

module.exports = {
    getAirport,
    getAirportById,
    createFavorite,
    getFavoriteById,
    editNote
}