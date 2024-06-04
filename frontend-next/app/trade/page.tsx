import React from "react";
import Link from "next/link";
import TradeNavbar from "../market/TradeNavbar";
import Input from "./inpbox"; 

export default function Trade() {
    return (
        <>
            <TradeNavbar />
            <div className="flex mt-20">
                <div className="text-xl text-white font-serif pl-10">
                    <h1>Click on the Coin to see detail:</h1>
                    <div className="flex flex-col text-black m-5">
                        <button className="m-8 p-3 w-40 bg-[#FCD434] hover:bg-[#C0EA3E] rounded-lg flex items-center justify-center">
                            <img src="/btc.png" alt="BTC Logo" className="w-9 h-9 mr-2" />
                            <Link href="trade/btc">BTC</Link>
                        </button>
                        <button className="m-8 p-3 w-40 bg-[#FCD434] hover:bg-[#C0EA3E] rounded-lg flex items-center justify-center">
                            <img src="/eth.png" alt="ETH Logo" className="w-9 h-9 mr-2" />
                            <Link href="trade/eth">ETH</Link>
                        </button>
                        <button className="m-8 p-3 w-40 bg-[#FCD434] hover:bg-[#C0EA3E] rounded-lg flex items-center justify-center">
                            <img src="sol.png" alt="SOL Logo" className="w-9 h-9 mr-2" />
                            <Link href="trade/sol">SOL</Link>
                        </button>
                        <button className="m-8 p-3 w-40 bg-[#FCD434] hover:bg-[#C0EA3E] rounded-lg flex items-center justify-center">
                            <img src="/usdt.png" alt="USDT Logo" className="w-9 h-9 mr-2" />
                            <Link href="trade/usdt">USDT</Link>
                        </button>
                        <button className="m-8 p-3 w-40 bg-[#FCD434] hover:bg-[#C0EA3E] rounded-lg flex items-center justify-center">
                            <img src="/bnb.png" alt="BNB Logo" className="w-9 h-9 mr-2" />
                            <Link href="trade/bnb">BNB</Link>
                        </button>
                    </div>
                </div>
                <div className="flex items-center justify-center pr-10">
                    <Input />
                </div>

            </div>
        </>
    );
}
