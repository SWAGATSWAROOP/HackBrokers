"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { ethers } from "ethers";
import Account from "../../contracts/account.sol/Account.json";

export default function BitcoinCard() {
  const [days, setDays] = useState(7);
  const [imageUrl, setImageUrl] = useState(
    "https://res.cloudinary.com/djtudleky/image/upload/v1717478844/nortj8odc3e4blwsoxie.png"
  );

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const res = await axios.get(
          `http://127.0.0.1:5000/upload?days=${days}&type=usdt`
        );
        setImageUrl(res.data.secure_url);
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    fetchImage();
  }, [days]);

  async function buy() {
    let provider = new ethers.JsonRpcProvider();
    let signer = await provider.getSigner();
    let contract = new ethers.Contract(
      "0x5FbDB2315678afecb367f032d93F642f64180aa3",
      Account.abi,
      signer
    );
    const email = sessionStorage.getItem("email");
    const createUser = await contract.buy(email, 0, "USDT", 0);
    await createUser.wait();
  }

  async function sell() {
    let provider = new ethers.JsonRpcProvider();
    let signer = await provider.getSigner();
    let contract = new ethers.Contract(
      "0x5FbDB2315678afecb367f032d93F642f64180aa3",
      Account.abi,
      signer
    );
    const email = sessionStorage.getItem("email");
    const createUser = await contract.sell(email, "USDT", 0, 0);
    await createUser.wait();
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-pink-700 via-purple-900 to-indigo-900 from-30%">
      <div className="w-full bg-gradient-to-r from-pink-700 via-purple-900 to-indigo-900 py-4 text-3xl text-white font-serif font-bold text-center">
        Crypto Analyzer
      </div>
      <div className="m-4 overflow-hidden rounded bg-gray-300 p-8 shadow-lg">
        <div className="flex flex-col md:flex-row items-center p-4">
          <select
            className="mb-4 md:mb-0 rounded border p-2"
            value={days}
            onChange={(e) => setDays(Number(e.target.value))}
          >
            <option value={7}>7 Days</option>
            <option value={30}>30 Days</option>
            <option value={365}>365 Days</option>
          </select>
          <div className="flex justify-center w-full md:w-2/3 lg:w-1/2 p-3">
            <img
              src={imageUrl}
              alt="USDT Image"
              width={2000}
              height={1000}
              className="rounded"
            />
          </div>
          <div className="px-6 py-4 w-full md:w-1/3 lg:w-1/2">
            <div className="mb-2 text-center text-xl font-bold">USDT</div>
            <p className="text-center text-base text-gray-700">
              Tether is a cryptocurrency stablecoin, launched by the company
              Tether Limited Inc. in 2014. As of January 2024, Tether's website
              lists fourteen protocols and blockchains on which Tether has been
              minted. Tether has been criticized for a lack of transparency and
              verifiability of its claimed fiat reserves.
            </p>
            <div className="flex flex-col items-center mt-4">
              <input
                placeholder="Enter the number of crypto"
                className="p-5 w-80 rounded-lg"
                type="number"
              />
              <div className="flex space-x-4 mt-4">
                <button
                  className="flex items-center self-start rounded-lg bg-green-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-green-500 md:text-base"
                  onClick={buy}
                >
                  BUY
                </button>
                <button
                  className="flex items-center self-start rounded-lg bg-red-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-red-500 md:text-base"
                  onClick={sell}
                >
                  SELL
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-between ml-12 mr-12 mt-4">
          <div className="flex w-1/2 flex-row justify-around">
            <div className="flex items-center self-start rounded-lg bg-green-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-green-500 md:text-base">
              <FontAwesomeIcon icon={faArrowUp} size="2x" color="white" />
              <h1 className="pl-5 text-white">
                <strong>0.56%</strong>
              </h1>
            </div>
            <div className="flex items-center self-start rounded-lg bg-red-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-red-500 md:text-base">
              <FontAwesomeIcon icon={faArrowDown} size="2x" color="white" />
              <h1 className="pl-4 text-white">
                <strong>0.44%</strong>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
