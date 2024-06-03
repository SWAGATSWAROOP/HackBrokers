
import { useRouter } from "next/navigation";
import Link from "next/link";
import AuthButtons from "./forms/authbutton";
import Nav from "../Components/Nav";
import { useState } from "react";
export default function Trade() {
    return (
        <>
            <div className="text-xl text-white font-serif mt-12 pl-10">
                <h1>Click on the Coin to see detail:</h1>
                <ul className="text-black m-5 ">
                    <li className="m-10 p-3 w-40 bg-blue-300 rounded-lg"><Link href="trade/btc">BTC</Link></li>
                    <li className="m-10 p-3 w-40 bg-blue-300 rounded-lg"><Link href="trade/eth">ETH</Link></li>
                    <li className="m-10 p-3 w-40 bg-blue-300 rounded-lg"><Link href="trade/sol">SOL</Link></li>
                    <li className="m-10 p-3 w-40 bg-blue-300 rounded-lg"><Link href="trade/usdt">USDT</Link></li>
                    <li className="m-10 p-3 w-40 bg-blue-300 rounded-lg"><Link href="trade/bnb">BNB</Link></li>
                </ul>
            </div>
        </>
    );
}
