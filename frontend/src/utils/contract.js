export const CONTRACT_ADDRESS = "PASTE_CONTRACT_ADDRESS"

export const ABI = [
"function deposit() payable",
"function withdraw(uint256 amount)",
"function emergencyWithdraw()",
"function claimReward()",
"function pendingReward(address) view returns(uint256)",
"function totalAssets() view returns(uint256)"
]
