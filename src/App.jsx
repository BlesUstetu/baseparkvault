import Navbar from "./components/Navbar"
import WalletConnect from "./components/WalletConnect"
import Vault from "./components/Vault"
import Stats from "./components/Stats"

export default function App(){

return(

<div>

<Navbar/>

<div className="container">

<WalletConnect/>

<Stats/>

<Vault/>

</div>

</div>

)

}
