"use client";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { ethers } from "ethers";
import Account from "@/artifacts/contracts/account.sol/Account.json";

export default function BitcoinCard() {
  const ref = useRef<HTMLInputElement>(null);
  const [days, setDays] = useState(7);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const res = await axios.get(
          `http://127.0.0.1:5000/upload?days=${days}&type=usdt`,
        );
        setImageUrl(res.data.secure_url);
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    fetchImage();
  }, [days]);
  useEffect(() => {
    const fetchImage = async () => {
      console.log("Change occured");
      try {
        const res = await axios.get(
          `http://127.0.0.1:5000/upload?days=7&type=usdt`,
        );
        console.log(res);
        setImageUrl(res.data.secure_url);
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    fetchImage();
  }, []);
  // async function buy() {
  //   const email = sessionStorage.getItem("email");
  //   const createUser = await contract.buy(email, 0, "USDT", 0);
  //   await createUser.wait();
  // }

  // async function sell() {
  //   const email = sessionStorage.getItem("email");
  //   const createUser = await contract.sell(email, "USDT", 0, 0);
  //   await createUser.wait();
  // }
  async function buy() {
    try {
      const sepoliaUrl = String(process.env.SEPOLIA_RPC_URL);
      const address = String(process.env.CONTRACT_ADDRESS);
      const provider = new ethers.JsonRpcProvider(sepoliaUrl);
      const privateKey = String(process.env.PRIVATE_KEY);
      const wallet = new ethers.Wallet(privateKey);
      const walletConnected = wallet.connect(provider);

      const contract = new ethers.Contract(
        address,
        Account.abi,
        walletConnected,
      );
      const email = sessionStorage.getItem("email");
      const createUser = await contract.buy(email, 0, "USDT", 0);
      await createUser.wait();
    } catch (error) {
      console.log("Error");
    }
  }

  async function sell() {
    try {
      const sepoliaUrl = String(process.env.SEPOLIA_RPC_URL);
      const address = String(process.env.CONTRACT_ADDRESS);
      const provider = new ethers.JsonRpcProvider(sepoliaUrl);
      const privateKey = String(process.env.PRIVATE_KEY);
      const wallet = new ethers.Wallet(privateKey);
      const walletConnected = wallet.connect(provider);

      const contract = new ethers.Contract(
        address,
        Account.abi,
        walletConnected,
      );
      const email = sessionStorage.getItem("email");
      const createUser = await contract.sell(email, "USDT", 0, 0);
      await createUser.wait();
    } catch (error) {
      console.log("Error");
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-pink-700 from-30% via-purple-900 to-indigo-900">
      <div className="w-full bg-gradient-to-r from-pink-700 via-purple-900 to-indigo-900 py-4 text-center font-serif text-3xl font-bold text-white">
        Crypto Analyzer
      </div>
      <div className="m-4 overflow-hidden rounded bg-gray-300 p-8 shadow-lg">
        <div className="flex flex-col items-center p-4 md:flex-row">
          <select
            className="mb-4 rounded border p-2 md:mb-0"
            value={days}
            onChange={(e) => setDays(Number(e.target.value))}
          >
            <option value={7}>7 Days</option>
            <option value={30}>30 Days</option>
            <option value={365}>365 Days</option>
          </select>
          <div className="flex w-full justify-center p-3 md:w-2/3 lg:w-1/2">
            <img
              src={imageUrl}
              alt="USDT Image"
              width={2000}
              height={1000}
              className="rounded"
            /> 
          </div>
          <div className="w-full px-6 py-4 md:w-1/3 lg:w-1/2">
            <div className="mb-2 text-center text-xl font-bold">USDT</div>
            <p className="text-center text-base text-gray-700">
              Tether is a cryptocurrency stablecoin, launched by the company
              Tether Limited Inc. in 2014. As of January 2024,the website lists
              fourteen protocols and blockchains on which Tether has been
              minted. Tether has been criticized for a lack of transparency and
              verifiability of its claimed fiat reserves.
            </p>
            <div className="mt-4 flex flex-col items-center">
              <input
                placeholder="Enter the number of crypto"
                className="w-80 rounded-lg p-5"
                type="number"
                ref={ref}
              />
              <div className="mt-4 flex space-x-4">
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

        <div className="ml-12 mr-12 mt-4 flex flex-row justify-between">
          <div className="flex w-1/2 flex-row justify-around">
            <div className="flex items-center self-start rounded-lg bg-green-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-green-500 md:text-base">
              <FontAwesomeIcon icon={faArrowUp} size="2x" color="white" />
              <h1 className="pl-5 text-white">
                <strong>0.4644%</strong>
              </h1>
            </div>
            <div className="flex items-center self-start rounded-lg bg-red-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-red-500 md:text-base">
              <FontAwesomeIcon icon={faArrowDown} size="2x" color="white" />
              <h1 className="pl-4 text-white">
                <strong>0.5356%</strong>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
