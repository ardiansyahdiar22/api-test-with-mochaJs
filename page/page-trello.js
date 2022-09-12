const supertest = require('supertest');
const env = require('dotenv').config();
const test = require('../id/id_file.js');
const api = supertest(process.env.trello);

const getBoard = (key, token) => api.get('/1/boards/' + test.getIdBoard())
    .set('Accept', 'application/json')
    .query({
        Key : key, 
        Token : token
    })

const getBoardCard = (key, token) => api.get('/1/boards/' + test.getIdBoard() + '/cards')
    .set('Accept', 'application/json')
    .query({
        Key : key, 
        Token : token
    })

const createCard = (name, idList, key, token) => api.post('/1/cards/')
    .set('Accept', 'application/json')
    .query({
        Name : name, 
        ID_list : idList, 
        Key : key, 
        Token : token
    })

const createAttachment = (key, token, name, file) => api.post('/1/cards/' + test.getIdCard() + '/attachments')
    .set('Accept', 'application/json')
    .set('Content-Type', 'multipart/form-data')
    .query({
        Key : key, 
        Token : token, 
        Name : name, 
        Files : file
    })

const getAttachment = (key, token, field, filter) => api.get('/1/cards/' + test.getIdCard() + '/attachments' )
    .set('Accept', 'application/json')
    .query({
        Key : key,
        Token : token,
        Field : field,
        Filter : filter
    })

const changeCard = (key, token, name, desc) => api.put('/1/cards/' + test.getIdCard())
    .set('Accept', 'application/json')
    .query({
        Key : key,
        Token : token,
        Name : name,
        Desc : desc
    })

const changeBoard = (key, token, name, desc) => api.put('/1/boards/' + test.getIdBoard())
    .set('Accept', 'application/json')
    .query({
        Key : key,
        Token : token,
        Name : name,
        Desc : desc
    })

module.exports = {
    getBoard,
    getBoardCard,
    createCard,
    createAttachment,
    getAttachment,
    changeCard,
    changeBoard
}
