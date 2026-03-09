import {useState} from "react"
import {ethers} from "ethers"

export default function WalletConnect(){

const [address,setAddress] = useState("")
const [balance,setBalance] = useState("")

async function connect(){

if(!window.ethereum){
alert("Install MetaMask")
return
}

const provider = new ethers.BrowserProvider(window.ethereum)

const accounts = await provider.send("eth_requestAccounts",[])

const signer = await provider.getSigner()

const bal = await provider.getBalance(accounts[0])

setAddress(accounts[0])

setBalance(
ethers.formatEther(bal)
)

}

function disconnect(){

setAddress("")
setBalance("")

}

return(

<div className="walletBox">

{!address && (

<button className="btn" onClick={connect}>
Connect Wallet
</button>

)}

{address && (

<div>

<div className="walletBadge">
Wallet: {address.slice(0,6)}...{address.slice(-4)}
</div>

<div className="walletBalance">
Balance: {Number(balance).toFixed(4)} ETH
</div>

<button className="btnDisconnect" onClick={disconnect}>
Disconnect
</button>

</div>

)}

</div>

)

}
