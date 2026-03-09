
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

setStatus("deposit pending")

await tx.wait()

setStatus("deposit success")

}

async function withdraw(){

const provider = new ethers.BrowserProvider(window.ethereum)
const signer = await provider.getSigner()
const contract = new ethers.Contract(CONTRACT_ADDRESS,ABI,signer)

const tx = await contract.withdraw(
ethers.parseEther(amount)
)

setStatus("withdraw pending")

await tx.wait()

setStatus("withdraw success")

}

async function emergency(){

const provider = new ethers.BrowserProvider(window.ethereum)
const signer = await provider.getSigner()
const contract = new ethers.Contract(CONTRACT_ADDRESS,ABI,signer)

const tx = await contract.emergencyWithdraw()

await tx.wait()

setStatus("emergency withdraw executed")

}

return(

<div style={{marginTop:20}}>

<input
placeholder="ETH amount"
value={amount}
onChange={(e)=>setAmount(e.target.value)}
/>

<div style={{marginTop:10}}>

<button onClick={deposit}>Deposit</button>
<button onClick={withdraw}>Withdraw</button>
<button onClick={emergency}>Emergency Withdraw</button>

</div>

<p>{status}</p>

</div>

)

}
