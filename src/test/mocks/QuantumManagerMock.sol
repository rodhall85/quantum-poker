pragma solidity ^0.4.18;

import "../../contracts/QuantumManager.sol";

contract QuantumManagerMock is QuantumManager () {

  uint256 public _now;

  function QuantumManagerMock (
    uint256 _currentTime
  ) public QuantumManager () {
    _now = _currentTime;
  }

  function currentTime() internal view returns (uint256 _currentTime) {
    return _now;
  }
}
