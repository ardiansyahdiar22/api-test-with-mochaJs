const assert = require('chai').expect;
const page = require('../page/page-airport');

describe.skip('Test create favorite airports', () => {

    const airport_id = 'AEY';
    const note = "Test add favorite airports";

    it('First test add favorite airport', async() => {

        const response = await page.createFavorite(airport_id, note);
        assert(response.status).to.equal(201);

        const Body = response.body.data.attributes.airport.name;
        assert(Body).to.equal('Akureyri Airport');
        console.log(Body)

    });
});