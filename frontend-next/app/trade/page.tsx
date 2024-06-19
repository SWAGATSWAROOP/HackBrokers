import React from "react";
import Image from "next/image";
import Link from "next/link";
import TradeNavbar from "../market/TradeNavbar";
import Input from "./inpbox";

export default function Trade() {
    return (
        <>
        <TradeNavbar />
        <div className="flex flex-col md:flex-row mt-20">
            <div className="text-xl text-white font-serif p-10 md:w-1/2 lg:w-1/3">
                <h1 className="mb-16 font-semibold text-4xl font-serif">Coins Available </h1>
                <Link href={'trade/btc'} className="mb-16 p-3 w-40 bg-[#FCD434] hover:bg-[#C0EA3E] rounded-lg flex items-center justify-center">
                    <Image src="/btc.png" alt="BTC Logo" width={20} height={20} className="w-9 h-9 mr-2" />
                    <h1 className="font-semibold font-serif text-black">BTC</h1>
                </Link>
    
                <Link href={'trade/eth'} className="mb-16  p-3 w-40 bg-[#FCD434] hover:bg-[#C0EA3E] rounded-lg flex items-center justify-center">
                    <Image src="/eth.png" alt="ETH Logo" width={20} height={20} className="w-9 h-9 mr-2" />
                    <h1 className="font-semibold font-serif text-black">ETH</h1>
                </Link>
    
                <Link href={'trade/sol'} className="mb-16  p-3 w-40 bg-[#FCD434] hover:bg-[#C0EA3E] rounded-lg flex items-center justify-center">
                    <Image src="/sol.png" alt="SOL Logo" width={20} height={20} className="w-9 h-9 mr-2" />
                    <h1 className="font-semibold font-serif text-black">SOL</h1>
                </Link>
    
                <Link href={'trade/usdt'} className="mb-16  p-3 w-40 bg-[#FCD434] hover:bg-[#C0EA3E] rounded-lg flex items-center justify-center">
                    <Image src="/usdt.png" alt="USDT Logo" width={20} height={20} className="w-9 h-9 mr-2" />
                    <h1 className="font-semibold font-serif text-black">USDT</h1>
                </Link>
    
                <Link href={'trade/bnb'} className="mb-16  p-3 w-40 bg-[#FCD434] hover:bg-[#C0EA3E] rounded-lg flex items-center justify-center">
                    <Image src="/bnb.png" alt="BNB Logo" width={20} height={20} className="w-9 h-9 mr-2" />
                    <h1 className="font-semibold font-serif text-black">BNB</h1>
                </Link>
            </div>
            <div className="flex flex-col items-center justify-center w-full p-10 md:w-1/2 lg:w-2/3">
                <Input />
            </div>
        </div>
    </>
    
    );
}
