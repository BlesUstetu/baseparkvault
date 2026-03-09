import {useState} from "react"
import {ethers} from "ethers"

export default function WalletConnect(){

const [address,setAddress] = useState("")

async function connect(){

if(!window.ethereum){
alert("Install MetaMask")
return
}

const provider = new ethers.BrowserProvider(window.ethereum)
const accounts = await provider.send("eth_requestAccounts",[])

setAddress(accounts[0])

}

return(

<div>

<button className="btn" onClick={connect}>
Connect Wallet
</button>

{address && (
<div className="walletBadge">
Wallet : {address.slice(0,6)}...{address.slice(-4)}
</div>
)}

</div>

)

}
