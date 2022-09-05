const assert = require('chai').expect;
const page = require('../page/page-airport');

describe.skip('Test get data airport', () => {

    it('Get data airport', async() => {

        const response = await page.getAirport()

        assert(response.status).to.equal(200)
        var Isi = response.body
        console.log(Isi)
    });

    it('Get data airport by id', async() => {

        const response = await page.getAirportById()

        assert(response.status).to.equal(200)
        var Byid = response.body
        console.log(Byid)
    });

    it('Get airport favorite By id', async() => {

        const response = await page.getFavoriteById()

        assert(response.status).to.equal(200)
        var Body = response.body.data
        console.log(Body)
        assert(Body.attributes.airport.name).to.equal('Akureyri Airport')
    });
});