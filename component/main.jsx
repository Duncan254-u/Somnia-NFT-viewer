//src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//rainbowkit- adds a nice wallet UI
//wagmi - manage wallet connection & contracts
//ethers - talks to ethereum style wallets
import'@rrainboww-me/rainbowkit/style.css';
import {getDetfaultWallets} from '@rrainboww-me/rainbowkit/wallets';
import { configureChains, createConfig, wagmiConfig } from 'wagmi';
import {publicProvider} from 'wagmi/providers/public';
import {sepolia } from 'viem/chains';

//configure the chain + rpc we will be using
const {chains, publicClient} = configureChains(
    [sepolia],
    [publicProvider()]
);

//setup wallet connection
const {connectors} = getDefaultWallets({
    appName: 'Somnia NFT Viewr',
    projectId: 'your_project_id_here', // Replace with your actual project ID
    chains,
})
// create wagmi config object (wallet logic lives here)
const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient,
})
//render the app
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <App />
      </RainbowKitProvider>
    </WagmiConfig>
  </React.StrictMode>,
)
    

