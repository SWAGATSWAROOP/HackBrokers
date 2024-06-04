'use client'
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function SOLCard() {
    const [days, setDays] = useState(7);
    const [imageUrl, setImageUrl] = useState('https://res.cloudinary.com/djtudleky/image/upload/v1717474460/wt1gtzmvctpw7ehtilpk.png');

    useEffect(() => {
        const fetchImage = async () => {
            console.log("Change occured");
            try {
                const res = await axios.get(`http://127.0.0.1:5000/upload?days=${days}&type=sol`);
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
                        <div className="font-bold text-xl mb-2"> Solana (SOL)</div>
                        <p className="text-gray-700 text-base">
                        Solana is a blockchain built for mass adoption. It's a high performance network that is utilized for a range of use cases, including finance, payments, and gaming. Solana operates as a single global state machine, and is open, interoperable, and decentralized. 

                        </p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}