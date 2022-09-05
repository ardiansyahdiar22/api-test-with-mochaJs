const assert = require('chai').expect;
const page = require('../page/page-trello.js')

describe.skip('API automation testing trello', () => {

    it('First test get data board trello', async() => {

        const response = await page.getBoard()
        .send({
            key: '32f6e6037baed62c5b41befa51dcd4d6',
            token: 'd7402af4d4605d60c425b50ba0347c46b7ed5a7f1f0e94f39d66bc839d60c044'
        })

        assert(response.status).to.equal(200)
        assert(response.body.name).to.equal('add test via postman')

        const objek = response.body
        console.log(objek)
    });

    it('Test get data card on board trello', async() => {

        const response = await page.getBoardCard()
        .send({
            key: '32f6e6037baed62c5b41befa51dcd4d6',
            token: 'd7402af4d4605d60c425b50ba0347c46b7ed5a7f1f0e94f39d66bc839d60c044'
        })

        assert(response.status).to.equal(200)
        const isian = response.body
        console.log(isian)
    });
});