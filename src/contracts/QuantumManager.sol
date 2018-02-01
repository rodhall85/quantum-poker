pragma solidity ^0.4.18;

import './QuantumStructs.sol';

contract QuantumManager is QuantumStructs {
  Tournament[] public tournaments;

  function createTournament(string _name) public {
    tournaments.push(Tournament(0, _name, currentTime()));
  }

  function currentTime() internal view returns (uint256 _currentTime) {
    return now;
  }

}
