import React from "react";
import Link from "next/link";
import TradeNavbar from "../market/TradeNavbar";
import Input from "./inpbox"; 

export default function Trade() {
    return (
        <>
            <TradeNavbar />
            <div className="flex flex-col md:flex-row mt-20">
                <div className="text-xl text-white font-serif p-10 md:w-1/2 lg:w-1/3">
                    <h1 className="mb-5">Click on the Coin to see detail:</h1>
                    <div className="flex flex-col text-black">
                        {[
                            { src: "/btc.png", alt: "BTC Logo", href: "trade/btc", label: "BTC" },
                            { src: "/eth.png", alt: "ETH Logo", href: "trade/eth", label: "ETH" },
                            { src: "/sol.png", alt: "SOL Logo", href: "trade/sol", label: "SOL" },
                            { src: "/usdt.png", alt: "USDT Logo", href: "trade/usdt", label: "USDT" },
                            { src: "/bnb.png", alt: "BNB Logo", href: "trade/bnb", label: "BNB" }
                        ].map((coin) => (
                            <button
                                key={coin.label}
                                className="m-4 p-3 w-40 bg-[#FCD434] hover:bg-[#C0EA3E] rounded-lg flex items-center justify-center"
                            >
                                <img src={coin.src} alt={coin.alt} className="w-9 h-9 mr-2" />
                                <Link href={coin.href}>{coin.label}</Link>
                            </button>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center w-full p-10 md:w-1/2 lg:w-2/3">
                    <Input />
                </div>
            </div>
        </>
    );
}
