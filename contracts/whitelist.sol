//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Whitelist{

    uint256 public maxNoOfWLAddress;
    uint256 public NoOfWLAddress;

    address owner;

    mapping(address=>bool)WLAddress;

    constructor(uint256 _maxNoOfWLAddress){
        owner=msg.sender;
        maxNoOfWLAddress=_maxNoOfWLAddress;
    }

    modifier onlyOwner(){
        require(msg.sender==owner);
        _;
    }

    function addUser(address user) public onlyOwner{
        require(NoOfWLAddress<maxNoOfWLAddress);

        WLAddress[user]=true;
        NoOfWLAddress++;
    }

    function verifyUser(address user) public view returns(bool){
        return WLAddress[user];
    }

    function removeUser(address user) public{

        WLAddress[user]=false;
        NoOfWLAddress--;
    }

    function CountOfWLAddress() public view returns(uint256){
        return NoOfWLAddress;
    }
}