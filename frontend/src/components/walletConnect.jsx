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

<button onClick={connect}>Connect Wallet</button>

<p>{address}</p>

</div>

)

}
