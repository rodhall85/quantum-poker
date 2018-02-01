pragma solidity ^0.4.18;

contract QuantumStructs {
  struct Tournament {
    uint id;
    string name;
    uint createdTime;
    /*uint startTime;
    uint entryFee;
    uint depositGas;
    uint startingStack;
    Hand currentHand;
    Player[] players;
    Level[] blindStructure;
    bool tournamentStarted;
    bool tournamentEnded;*/
  }

  struct Player {
    address _address;
    string alias;
    uint chipstack;
    uint timeoutGas;
    uint timeouts;
  }

  struct Hand {
    Player[] players;
    string[] board;
    Pot[] pots;
    Action[] actions;
  }

  struct Action {
    // TODO: Change to ENUM
    string name;
    Player player;
    string value;
  }

  struct Pot {
    uint value;
    Player[] playersEligible;
  }

  struct Level {
    uint number;
    uint smallBlind;
    uint bigBlind;
    uint startTime;
  }
}
