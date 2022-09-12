const assert = require('chai').expect;
const page = require('../page/page-airport');

describe.only('Test get data airport', () => {

    it('Get data airport', async() => {

        const response = await page.getAirport()

        assert(response.status).to.equal(200)
    });

    it('Get data airport by id', async() => {

        const response = await page.getAirportById()

        assert(response.status).to.equal(200)
    });

    it('Get airport favorite By id', async() => {

        const response = await page.getFavoriteById()

        assert(response.status).to.equal(200)
        assert(response.body.data.attributes.airport.name).to.equal('Madang Airport')
    });
});