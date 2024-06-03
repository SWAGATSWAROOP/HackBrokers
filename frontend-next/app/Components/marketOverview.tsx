"use client";
import { useState } from "react";

import CryptoDetail from './CryptoDetail';
export default function MarketOverview() {
    const [cryptos] = useState([
        { name: "Bitcoin", symbol: "BTC", price: "$1,27,000", change: "+500.00", volume: "$58.00", marketCap: "$1,27,000" },
        { name: "Ethereum", symbol: "ETH", price: "$55,000", change: "-200.00", volume: "$27.00", marketCap: "$55,000" },
        { name: "Bignuebit", symbol: "BNB", price: "$24,000", change: "+150.00", volume: "$10.43", marketCap: "$24,000" },
        { name: "ethorim", symbol: "ERT", price: "$20,000", change: "+230.00", volume: "$29.00", marketCap: "$20,000" },
        { name: "totalkv", symbol: "TKV", price: "$23,000", change: "-120.00", volume: "$31.32", marketCap: "$23,000" },
        { name: "masterkop", symbol: "MKP", price: "$15,000", change: "+233.00", volume: "$43.00", marketCap: "$15,000" },
    ]);
    const [selectedCrypto, setSelectedCrypto] = useState(null);
    const [timeRange, setTimeRange] = useState("7");
    return (
        <div className="container mx-auto px-4 py-6">
            <header className="text-center mb-6">
                <h1 className="text-3xl font-bold">Market Overview</h1>
            </header>
            <section>
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-gray-300">
                        <thead>
                            <tr className="border-b">
                                <button>

                                    <th className="px-2 py-2 md:px-4">Name</th>
                                    <th className="px-2 py-2 md:px-4">Price</th>
                                    <th className="px-2 py-2 md:px-4">Change</th>
                                    <th className="px-2 py-2 md:px-4">24h Volume</th>
                                    <th className="px-2 py-2 md:px-4">Market Cap</th>
                                    <th className="px-2 py-2 md:px-4">Action</th>
                                </button>
                            </tr>
                        </thead>
                        <tbody>
                            {cryptos.map((crypto) => (
                                <tr key={crypto.symbol}
                                    className="border-b">
                                    <button className="text-blue-500 hover:underline"
                                        onClick={() => setSelectedCrypto(crypto.symbol.toLowerCase())}>
                                        <td className="px-2 py-2 md:px-4">{crypto.symbol}</td>
                                        <td className="px-2 py-2 md:px-4">{crypto.name}</td>
                                        <td className="px-2 py-2 md:px-4">{crypto.price}</td>
                                        <td className={`px-2 py-2 md:px-4 ${crypto.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>{crypto.change}</td>
                                        <td className="px-2 py-2 md:px-4">{crypto.volume}</td>
                                        <td className="px-2 py-2 md:px-4">{crypto.marketCap}</td>
                                    </button>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
            {selectedCrypto && (
                <div className="mt-6">
                    <h3 className="text-xl font-semibold mb-2">Select Time Range</h3>
                    <select
                        className="bg-gray-700 text-white p-2 rounded"
                        value={timeRange}
                        onChange={(e) => setTimeRange(e.target.value)}
                    >
                        <option value="1">24 Hours</option>
                        <option value="7">7 Days</option>
                        <option value="30">30 Days</option>
                        <option value="90">90 Days</option>
                        <option value="365">1 Year</option>
                    </select>
                    <CryptoDetail crypto={selectedCrypto} timeRange={timeRange} />
                </div>
            )}
        </div>
    );
}
