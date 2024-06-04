'use client'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';

<<<<<<< HEAD
export default function ETHCARD() {
=======
export default function BitcoinCard() {
>>>>>>> 579d62cc456506953d77ae8e06316ded92a22f4e
    const [days, setDays] = useState(7);
    const [imageUrl, setImageUrl] = useState('https://res.cloudinary.com/djtudleky/image/upload/v1717468043/ogib3zfczrxpyfeo6mod.png');

    useEffect(() => {
        const fetchImage = async () => {
<<<<<<< HEAD
            console.log("Change occured");
            try {
                const res = await axios.get(`http://127.0.0.1:5000/upload?days=${days}&type=eth`);
                console.log(res);
                setImageUrl(res.data.secure_url);
=======
            try {
                const res = await axios.get(`/upload?days=${days}&type=btc`);
                setImageUrl(res.secure_url.imageUrl);
>>>>>>> 579d62cc456506953d77ae8e06316ded92a22f4e
            } catch (error) {
                console.error('Error fetching image:', error);
            }
        };
        
        fetchImage();
    }, [days]);

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-900">
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
                <div className="flex flex-row items-center p-4">
                    <select
                        className="mb-4 p-2 border rounded"
                        value={days}
                        onChange={(e:any) => setDays(e.target.value)}
                    >
                        <option value={7}>7 Days</option>
                        <option value={30}>30 Days</option>
                        <option value={365}>365 Days</option>
                    </select>
                    <img
                        src={imageUrl}
                        alt="Bitcoin Image"
                        width={300}
                        height={300}
                        className="rounded"
                    />
                    <div className="px-6 py-4">
<<<<<<< HEAD
                        <div className="font-bold text-xl mb-2">Bitcoin (BTC)</div>
                        <p className="text-gray-700 text-base">
                            Bitcoin is a decentralized digital currency, without a central bank or single administrator, that can be sent from user to user on the peer-to-peer bitcoin network without the need for intermediaries.
=======
                        <div className="font-bold text-xl mb-2"> Etherium (ETH)</div>
                        <p className="text-gray-700 text-base">
                        Ethereum is a decentralized blockchain with smart contract functionality. Ether is the native cryptocurrency of the platform. Among cryptocurrencies, ether is second only to bitcoin in market capitalization. It is open-source software. Ethereum was conceived in 2013 by programmer Vitalik Buterin. 

>>>>>>> 579d62cc456506953d77ae8e06316ded92a22f4e
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}