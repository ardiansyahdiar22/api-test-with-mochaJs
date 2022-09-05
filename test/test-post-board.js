const assert = require('chai').expect;
const page = require('../page/page-trello.js');

describe('Create board on trello via automation API', () => {

    it('Verified can add card on board trello', async() => {

        const response = await page.createCard()
            .send({
                name: 'Add card automation 2',
                idList: '6214f20157b71080f8a6d663',
                key: '32f6e6037baed62c5b41befa51dcd4d6',
                token: 'd7402af4d4605d60c425b50ba0347c46b7ed5a7f1f0e94f39d66bc839d60c044'
            })
        
        assert(response.status).to.equal(200)
        assert(response.body.name).to.equal('Add card automation 2')
        
        const objek = response.body
        console.log(objek)
    });
});