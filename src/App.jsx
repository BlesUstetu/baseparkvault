import Navbar from "./components/Navbar"
import WalletPanel from "./components/WalletPanel"
import Stats from "./components/Stats"
import VaultCard from "./components/VaultCard"

export default function App(){

return(

<div>

<Navbar/>

<div className="container">

<WalletPanel/>

<Stats/>

<VaultCard/>

</div>

</div>

)

}
