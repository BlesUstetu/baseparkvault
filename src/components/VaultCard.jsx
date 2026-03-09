import {useState} from "react"
import {ethers} from "ethers"
import {CONTRACT_ADDRESS,ABI} from "../utils/contract"

export default function VaultCard(){

const [amount,setAmount] = useState("")
const [status,setStatus] = useState("")

async function deposit(){

setStatus("Transaction pending...")

const provider = new ethers.BrowserProvider(window.ethereum)

const signer = await provider.getSigner()

const contract = new ethers.Contract(
CONTRACT_ADDRESS,
ABI,
signer
)

const tx = await contract.deposit({
value: ethers.parseEther(amount)
})

await tx.wait()

setStatus("Deposit success")

}

async function withdraw(){

setStatus("Transaction pending...")

const provider = new ethers.BrowserProvider(window.ethereum)

const signer = await provider.getSigner()

const contract = new ethers.Contract(
CONTRACT_ADDRESS,
ABI,
signer
)

const tx = await contract.withdraw(
ethers.parseEther(amount)
)

await tx.wait()

setStatus("Withdraw success")

}

return(

<div className="vaultCard">

<input
className="input"
placeholder="ETH amount"
value={amount}
onChange={(e)=>setAmount(e.target.value)}
/>

<button className="btn" onClick={deposit}>
Deposit
</button>

<button className="btn" onClick={withdraw}>
Withdraw
</button>

<div className="status">
{status}
</div>

</div>

)

}
