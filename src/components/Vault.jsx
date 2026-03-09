import {useState} from "react"
import {ethers} from "ethers"
import {CONTRACT_ADDRESS,ABI} from "../utils/contract"

export default function Vault(){

const [amount,setAmount] = useState("")
const [status,setStatus] = useState("")

async function deposit(){

const provider = new ethers.BrowserProvider(window.ethereum)
const signer = await provider.getSigner()
const contract = new ethers.Contract(CONTRACT_ADDRESS,ABI,signer)

const tx = await contract.deposit({
value: ethers.parseEther(amount)
})

setStatus("Deposit pending...")

await tx.wait()

setStatus("Deposit success")

}

async function withdraw(){

const provider = new ethers.BrowserProvider(window.ethereum)
const signer = await provider.getSigner()
const contract = new ethers.Contract(CONTRACT_ADDRESS,ABI,signer)

const tx = await contract.withdraw(
ethers.parseEther(amount)
)

setStatus("Withdraw pending...")

await tx.wait()

setStatus("Withdraw success")

}

async function emergency(){

const provider = new ethers.BrowserProvider(window.ethereum)
const signer = await provider.getSigner()
const contract = new ethers.Contract(CONTRACT_ADDRESS,ABI,signer)

const tx = await contract.emergencyWithdraw()

await tx.wait()

setStatus("Emergency withdraw executed")

}

return(

<div>

<input
className="input"
placeholder="ETH amount"
value={amount}
onChange={(e)=>setAmount(e.target.value)}
/>

<div>

<button className="btn" onClick={deposit}>
Deposit
</button>

<button className="btn" onClick={withdraw}>
Withdraw
</button>

<button className="btn btnDanger" onClick={emergency}>
Emergency Withdraw
</button>

</div>

<div className="status">
{status}
</div>

</div>

)

}
