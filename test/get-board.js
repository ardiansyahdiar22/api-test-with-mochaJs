const assert = require('chai').expect;
const page = require('../page/page-trello.js');
const callData = require('../id/id_file.js');

describe('API automation get data board trello', () => {

    it('First test get data board trello', async() => {

        const response = await page.getBoard()
        .send({
            key: callData.getKey(),
            token: callData.getToken()
        })

        assert(response.status).to.equal(200)
        assert(response.body.name).to.equal('Add board with mocha JS')

    });

    it('Test get data card on board trello', async() => {

        const response = await page.getBoardCard()
        .send({
            key: callData.getKey(),
            token: callData.getToken()
        })

        assert(response.status).to.equal(200)
    });

    it('Negatif case api testing get data board with input invalid key and token', async() => {

        const response = await page.getBoard()
        .send({
            key: '91821982912891',
            token: '192891821982198'
        })

        assert(response.status).to.equal(401)
    });

    it('Verified user can get data attachment card', async() => {

        const response = await page.getAttachment()
        .send({
            key: callData.getKey(),
            token: callData.getToken(),
            field: 'all',
            filter: false
        })

        assert(response.status).to.equal(200)

    }); 
});