const assert = require('assert');

describe.skip( 'Testing coba mocha js untuk perthitungan', function(){
    
        var a = 4;
        var b = 2;

    it ( 'coba test pertama', function(){
        var c = a + b;

        assert.equal(c,6);
    });

    it ( 'coba test kedua perkalian', function(){

        var c = a * b;

        assert.equal(c,8);
    });
}); 