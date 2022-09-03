const assert = require('chai').expect;
const page = require('../page/page-get-airport');

describe('Test get data airport', () => {

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
});