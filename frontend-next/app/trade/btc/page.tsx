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
        <div className="flex justify-center items-center  bg-gray-900">
            <div className="max-w-sm rounded  shadow-lg bg-white m-4 ">
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
                    <Image
                        src={imageUrl}
                        alt="Bitcoin Image"
                        width={700}
                        height={300}
                        className="rounded"
                    />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Bitcoin (BTC)</div>
                        <p className="text-black text-base ">
                            Bitcoin is a decentralized digital currency, without a central bank or single administrator, that can be sent from user to user on the peer-to-peer bitcoin network without the need for intermediaries.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
