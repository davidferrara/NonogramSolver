const assert = require('chai').assert;
const script = require('../script');

describe('Clue Object', function() {
    var result = script.Clue(10);

    it('This should make a Clue object with lb: 10', function() {
        assert.equal(result.rs, 10);
    });
});