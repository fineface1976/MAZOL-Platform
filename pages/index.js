import { useAddress, useMetamask } from "@thirdweb-dev/react";  
       import { ethers } from "ethers";  

       export default function Home() {  
         const connect = useMetamask();  
         const address = useAddress();  

         return (  
           <div>  
             <h1>MAZOL Platform</h1>  
             {!address ? (  
               <button onClick={connect}>Connect Wallet</button>  
             ) : (  
               <p>Connected: {address}</p>  
             )}  
           </div>  
         );  
       }  
