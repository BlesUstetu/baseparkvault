// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract BaseParkVault is ReentrancyGuard, Pausable, Ownable {

mapping(address => uint256) public balances;
mapping(address => uint256) public depositTime;

uint256 public rewardRate = 8;

event Deposit(address indexed user,uint256 amount);
event Withdraw(address indexed user,uint256 amount);
event EmergencyWithdraw(address indexed user,uint256 amount);

function deposit() external payable whenNotPaused {

require(msg.value > 0,"Zero deposit");

balances[msg.sender] += msg.value;
depositTime[msg.sender] = block.timestamp;

emit Deposit(msg.sender,msg.value);

}

function withdraw(uint256 amount) external nonReentrant whenNotPaused {

require(balances[msg.sender] >= amount,"Insufficient");

balances[msg.sender] -= amount;

payable(msg.sender).transfer(amount);

emit Withdraw(msg.sender,amount);

}

function pendingReward(address user) public view returns(uint256){

uint256 timeStaked = block.timestamp - depositTime[user];

uint256 reward =
balances[user] *
rewardRate *
timeStaked / (365 days * 100);

return reward;

}

function claimReward() external {

uint256 reward = pendingReward(msg.sender);

require(reward > 0,"No reward");

depositTime[msg.sender] = block.timestamp;

payable(msg.sender).transfer(reward);

}

function emergencyWithdraw() external nonReentrant {

uint256 amount = balances[msg.sender];

require(amount > 0,"No funds");

balances[msg.sender] = 0;

payable(msg.sender).transfer(amount);

emit EmergencyWithdraw(msg.sender,amount);

}

function pause() external onlyOwner {
_pause();
}

function unpause() external onlyOwner {
_unpause();
}

function totalAssets() public view returns(uint256){
return address(this).balance;
}

}
