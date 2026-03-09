import Navbar from "./components/Navbar"
import WalletConnect from "./components/WalletConnect"
import Vault from "./components/Vault"
import TVLChart from "./components/TVLChart"

export default function App(){

return(

<div>

<Navbar/>

<div className="container">

<WalletConnect/>

<TVLChart/>

<Vault/>

</div>

</div>

)

}
