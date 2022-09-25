const assert = require('chai').expect;
const page = require('../page/page-airport');

describe('Test create favorite airports', () => {

    it('First test add favorite airport', async() => {

        const response = await page.createFavorite()
        .send({
            airport_id: 'GKA',
            note: 'Test add favorite'
        })

        assert(response.status).to.equal(201)
        assert(response.body.data.attributes.note).to.equal('Test add favorite')
    });
});