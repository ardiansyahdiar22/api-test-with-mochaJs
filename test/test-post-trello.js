const assert = require('chai').expect;
const page = require('../page/page-trello.js');
const fs = require('fs');
const callData = require('../id/id_file.js');

describe.skip('Test case for action post automation API trello', () => {

    it('Verified can add card on board trello', async() => {

        const response = await page.createCard()
            .send({
                name: 'Add card automation 2',
                idList: '6214f20157b71080f8a6d663',
                key: callData.getKey(),
                token: callData.getToken()
            })
        
        assert(response.status).to.equal(200)
        assert(response.body.name).to.equal('Add card automation 2')
    });

    it('Verified can add attachment on card board', async() => {

        const response = await page.createAttachment()
            .field({ // Note : kenapa menggunakan .field ?, karena jika menggunakan .send tidak bisa di mix dengan .attach, maka dari itu disini menggunakan .field
                key: callData.getKey(),
                token: callData.getToken(),
                name: 'Test attachment 1'
            })

            .attach('file', fs.readFileSync('./assets/test_foto1.png'), 'test_foto1.png')

        assert(response.status).to.equal(200)
        assert(response.body.name).to.equal('Test attachment 1')
        assert(response.body.isUpload).to.equal(true)
    });
});