const assert = require('chai').expect;
const page = require('../page/page-airport.js');

describe.only('Test case for edit note airport data', () => {

    it('Test edit note data airport favorite', async() => {

        const response = await page.editNote()
         .send({
            note: 'Edit note favorite 2'
         })

         assert(response.status).to.equal(200)
         assert(response.body.data.attributes.note).to.equal('Edit note favorite 2')
    })
});