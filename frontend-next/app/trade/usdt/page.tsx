'use client'
import { useState, useEffect } from 'react';
import axios from 'axios'; 
export default function BitcoinCard() {
    const [days, setDays] = useState(7);
    const [imageUrl, setImageUrl] = useState('https://res.cloudinary.com/djtudleky/image/upload/v1717478844/nortj8odc3e4blwsoxie.png');

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const res = await axios.get(`/upload?days=${days}&type=btc`);
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
                        <div className="font-bold text-xl mb-2"> (USDT)</div>
                        <p className="text-gray-700 text-base">
                        Tether is a cryptocurrency stablecoin, launched by the company Tether Limited Inc. in 2014. As of January 2024, Tether's website lists fourteen protocols and blockchains on which Tether has been minted. Tether has been criticized for a lack of transparency and verifiability of its claimed fiat reserves. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
