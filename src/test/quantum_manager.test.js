var quantumManager = artifacts.require('./mocks/QuantumManagerMock');
const expect = require('chai').expect;

contract('QuantumManager', accounts => {
  let instance;
  const owner = accounts[0];
  const now = Date.parse('2018-01-01T00:00:00.000');

  beforeEach(async () => {
    instance = await quantumManager.new(now, { from: owner });
  });

  describe('when creating a simple tournament', async () => {
    let tournament;
    let startTime;

    beforeEach(async () => {
      startTime = new Date();
      startTime.setDate(startTime.getDate() + 1);

      await instance.createTournament.sendTransaction('foo', startTime.getTime(), 1000000, 100, 10000, {from: owner });
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

    it('should create the tournament with the correct start time', async () => {
      expect(tournament[3].toNumber()).to.be.a('number');
      expect(tournament[3].toNumber()).to.equal(startTime.getTime());
    });

    it('should create the tournament with the correct entry fee', async () => {
      expect(tournament[4].toNumber()).to.be.a('number');
      expect(tournament[4].toNumber()).to.equal(1000000);
    });

    it('should create the tournament with the correct deposit gas', async () => {
      expect(tournament[5].toNumber()).to.be.a('number');
      expect(tournament[5].toNumber()).to.equal(100);
    });

    it('should create the tournament with the correct starting stack', async () => {
      expect(tournament[6].toNumber()).to.be.a('number');
      expect(tournament[6].toNumber()).to.equal(10000);
    });

    // it('should create the tournament with an empty current hand', async () => {
    //   expect(tournament[7].to.be.null);
    // });
  });

  //TODO: Set other properties and create 2 tournaments with different created times
});
