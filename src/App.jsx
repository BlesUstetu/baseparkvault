import WalletConnect from "./components/WalletConnect"
import Vault from "./components/Vault"

export default function App(){

return(

<div className="container">

<div className="title">BaseParkVault</div>

<WalletConnect/>

<Vault/>

<div className="tvl">
Vault TVL : loading...
</div>

</div>

)

}
