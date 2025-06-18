//src/App.jsx
import {connectButton} from '@rainbow-me/rainbowkit';
import NFTViewer from './components/NFTViewer';

//layout with wallet button and NFT viewer
export default function App() {
    return (
        <div style={{padding: '2rem', fontFamily: 'Arial, sans-serif'}}>
            <h1>Somnia Testnet NFT Viewer</h1>
            <ConnectButton/>
            <NFTViewer />
        </div>
    )}