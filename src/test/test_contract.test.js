var testContract = artifacts.require('../contracts/TestContract');
const assert = require('chai').assert;

contract('TestContract', function(accounts) {
  let instance;
  const owner = accounts[0];

  beforeEach(async function() {
    instance = await testContract.new({ from: owner });
  });

  describe('test', async function() {
    it('should set the owner', async function() {
        assert.equal(await instance.owner.call(), owner, 'owner not set');
    });
  });
});
