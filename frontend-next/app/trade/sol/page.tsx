'use client'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';

export default function BitcoinCard() {
    const [days, setDays] = useState(7);
    const [imageUrl, setImageUrl] = useState('https://res.cloudinary.com/djtudleky/image/upload/v1717468043/ogib3zfczrxpyfeo6mod.png');

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const res = await axios.get(`/upload?days=${days}&type=btc`);
                setImageUrl(res.secure_url.imageUrl);
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
                        <div className="font-bold text-xl mb-2"> Solana (SOL)</div>
                        <p className="text-gray-700 text-base">
                        Solana is a blockchain built for mass adoption. It's a high performance network that is utilized for a range of use cases, including finance, payments, and gaming. Solana operates as a single global state machine, and is open, interoperable, and decentralized. 

                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
