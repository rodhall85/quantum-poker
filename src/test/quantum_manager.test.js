var quantumManager = artifacts.require('../contracts/QuantumManager');
const assert = require('chai').assert;

contract('QuantumManager', function(accounts) {
  let instance;
  const owner = accounts[0];

  beforeEach(async function() {
    instance = await quantumManager.new({ from: owner });
  });

  describe('structs', async function() {
    it('should contain a struct for "tournament"', async function() {
      console.log(instance.tournament);
      assert.equal(1, 1);
    });
  });

});
