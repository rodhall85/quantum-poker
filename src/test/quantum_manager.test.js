var quantumManager = artifacts.require('./mocks/QuantumManagerMock');
const expect = require('chai').expect;

contract('QuantumManager', accounts => {
  let instance;
  const owner = accounts[0];
  const now = Date.parse('2018-01-01T00:00:00.000');

  beforeEach(async () => {
    instance = await quantumManager.new(now, { from: owner });
  });

  describe('when creating a tournament', async () => {
    let tournament;

    beforeEach(async () => {
      await instance.createTournament.sendTransaction('foo', {from: owner });
      tournament = await instance.tournaments.call(0);
    });

    it('should create the tournament with the correct id', async () => {
      expect(tournament[0]).to.not.be.null;
      expect(tournament[0].toNumber()).to.equal(0);
    });

    it('should create the tournament with the correct name', async () => {
      expect(tournament[1]).to.be.a('string');
      expect(tournament[1]).to.equal('foo');
    });

    it('should create the tournament with the correct created time', async () => {
      expect(tournament[2].toNumber()).to.be.a('number');
      expect(tournament[2].toNumber()).to.equal(now);
    });
  });

  //TODO: Set other properties and create 2 tournaments with different created times
});
