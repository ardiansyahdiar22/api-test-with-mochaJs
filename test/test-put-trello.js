const assert = require('chai').expect;
const page = require('../page/page-trello.js');
const callData = require('../id/id_file.js');

describe('Test suite edit proses on board trello', () => {

    it('Verified user able to change name and desc card', async() => {

        const response = await page.changeCard()
        .send({
            key: callData.getKey(),
            token: callData.getToken(),
            name: 'Edit name card 2',
            desc: 'Testing edit card name'
        })

        assert(response.status).to.equal(200)
        assert(response.body.name).to.equal('Edit name card 2')
    });

    it('Verified user able to change name and desc board', async() => {

        const response = await page.changeBoard()
        .send({
            key: callData.getKey(),
            token: callData.getToken(),
            name: 'Add board with mocha JS',
            desc: 'Testing edit board process with mocha JS'
        })

        assert(response.status).to.equal(200)
        assert(response.body.name).to.equal('Add board with mocha JS')
    });
});