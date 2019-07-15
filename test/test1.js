const assert = require('chai').assert;
const script = require('../script.js');
const Clue = require('../Clue')

describe('Clue Object', function() {
    var result = script.new.Clue(10);

    it('This should make a Clue object with lb: 10', function() {
        assert.equal(result.lb, 10);
    });
});