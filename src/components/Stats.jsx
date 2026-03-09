import {useEffect,useState} from "react"
import {ethers} from "ethers"
import {CONTRACT_ADDRESS,ABI} from "../utils/contract"

export default function Stats(){

const [tvl,setTVL] = useState("0")

async function loadTVL(){

if(!window.ethereum) return

const provider = new ethers.BrowserProvider(window.ethereum)

const contract = new ethers.Contract(
CONTRACT_ADDRESS,
ABI,
provider
)

const assets = await contract.totalAssets()

setTVL(
ethers.formatEther(assets)
)

}

useEffect(()=>{
loadTVL()
},[])

return(

<div className="statsCard">

<div className="statItem">
<div className="statTitle">Vault TVL</div>
<div className="statValue">{tvl} ETH</div>
</div>

<div className="statItem">
<div className="statTitle">Network</div>
<div className="statValue">Base</div>
</div>

</div>

)

}
