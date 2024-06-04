'use client'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';

export default function BNBCard() {
    const [days, setDays] = useState(7);
    const [imageUrl, setImageUrl] = useState('https://res.cloudinary.com/djtudleky/image/upload/v1717474425/bzpmv6wreqw1zd5lrced.png');

    useEffect(() => {
        const fetchImage = async () => {
            console.log("Change occured");
            try {
                const res = await axios.get(`http://127.0.0.1:5000/upload?days=${days}&type=bnb`);
                console.log(res);
                setImageUrl(res.data.secure_url);
            } catch (error) {
                console.error('Error fetching image:', error);
            }
        };
        
        fetchImage();
    }, [days]);

    return (
        <>
        
        <div className="flex flex-col justify-center items-center min-h-screen bg-gray-900 ">
        <div className='flex items-center justify-center text-white text-3xl mb-10'> Prediction Graph</div>
            <div className=" rounded overflow-hidden shadow-lg bg-gray-300 m-4">
                <div className="flex flex-row items-center p-4">
                    <select
                        className="mb-4 p-2 border rounded"
                        value={days}
                        onChange={(e) => setDays(Number(e.target.value))}
                    >
                        <option value={7}>7 Days</option>
                        <option value={30}>30 Days</option>
                        <option value={365}>365 Days</option>
                    </select>
                    <div className=" flex justify-center m-5">
                        <img
                            src={imageUrl}
                            alt="Bitcoin Image"
                            width={2000}
                            height={1000}
                            className="rounded "
                        />
                    </div>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">(BNB)</div>
                        <p className="text-gray-700 text-base">
                        Binance Coin is a cryptocurrency and the native token of the BNB Chain ecosystem, which includes BNB Smart Chain (BSC) and BNB Beacon Chain. BNB was created in July 2017 and launched through an initial coin offering (ICO). It was originally built on the Ethereum blockchain but later moved to the Binance Smart Chain, now called BNB Chain. 

                        </p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}