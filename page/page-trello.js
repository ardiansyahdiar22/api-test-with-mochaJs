const supertest = require('supertest');
const env = require('dotenv').config();
const id_board = '619f07cddf0cb7483859bafe';

const api = supertest(process.env.trello);

const getBoard = (key, token) => api.get('/1/boards/' + id_board)
    .set('Accept', 'application/json')
    .query({Key : key, Token : token})

const getBoardCard = (key, token) => api.get('/1/boards/' + id_board + '/cards')
    .set('Accept', 'application/json')
    .query({Key : key, Token : token})

const createCard = (name, idList, key, token) => api.post('/1/cards/')
    .set('Accept', 'application/json')
    .query({Name : name, ID_list : idList ,Key : key, Token : token})

module.exports = {
    getBoard,
    getBoardCard,
    createCard
}
