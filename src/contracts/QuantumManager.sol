pragma solidity ^0.4.18;

import './QuantumStructs.sol';

contract QuantumManager is QuantumStructs {
  Tournament[] public tournaments;

  function createTournament(string _name, uint _startTime, uint _entryFee, uint _depositGas, uint _startingStack) public {
    tournaments.push(Tournament(0, _name, currentTime(), _startTime, _entryFee, _depositGas, _startingStack));
  }

  function currentTime() internal view returns (uint256 _currentTime) {
    return now;
  }

}
