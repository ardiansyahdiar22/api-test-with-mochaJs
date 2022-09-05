const assert = require('chai').expect;
const page = require('../page/page-post-create.js');

describe.skip("First test create post", () => {

    it("Test create post", async() => {

        const response = await page.postCreate()
        .send({ 
            "name": "morpheus",
            "job": "leader"
        })

        assert(response.status).to.equal(201);
        var Create = response.body;
        console.log(Create);
    });
}); 