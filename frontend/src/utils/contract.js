export const CONTRACT_ADDRESS = "0x8D086F895D0F52ad4Ed1083711339d967c9b85Ca"

export const ABI = [
"function deposit() payable",
"function withdraw(uint256 amount)",
"function emergencyWithdraw()",
"function claimReward()",
"function pendingReward(address) view returns(uint256)",
"function totalAssets() view returns(uint256)"
]
