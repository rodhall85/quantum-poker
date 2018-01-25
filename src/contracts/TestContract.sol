pragma solidity ^0.4.17;

contract TestContract {
  address public owner;

  function TestContract() public {
    owner = msg.sender;
  }
}
