import React, {use, useEffect, useState} from 'react';

import {useAccount } from 'wagmi';

export default function NFTViewer() {
    const {address, isConnected} = useAccount();
    const [nfts, setNfts] = useState([]);

useEffect(() => {
    if (!address) return;

    const fetchNFTs = async () => {
        try {
            const response = await fetch(`https://api.opensea.io/api/v1/assets?owner=${address}`);
            const data = await response.json();
            setNfts(data.assets || []);
        } catch (err) {
            console.error("Error fetching NFTs:", err);
        }
    };

    fetchNFTs();
}, [address]);

    if (!isConnected) return <p> Please connect wallet to view NFTs.</p>;
    return(
        <div style={{ marginTop: '2rem' }}>
          <h2>Your NFTs</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            {nfts.length > 0 ? nfts.map((nft, index) => (
              <div key={index} style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '10px' }}>
                <img src={nft.image_url || '/fallback.png'} alt={nft.name} style={{ width: '150px', height: '150px' }} />
                <p>{nft.name}</p>
              </div>
            )) : <p>No NFTs found.</p>}
          </div>
        {/* XP Claim Button – Simulated */}
        <button
          onClick={() => alert("🎉 XP Claimed!")}
          style={{
            marginTop: '1rem',
            padding: '10px 20px',
            backgroundColor: '#00b894',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Claim XP
        </button>
      </div>
    );
}