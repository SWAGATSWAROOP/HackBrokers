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
    "https://res.cloudinary.com/djtudleky/image/upload/v1717478844/nortj8odc3e4blwsoxie.png",
  );

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const res = await axios.get(`/upload?days=${days}&type=btc`);
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
      signer,
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
      signer,
    );
    const email = sessionStorage.getItem("email");
    const createUser = await contract.sell(email, "USDT", 0, 0);
    await createUser.wait();
  }

  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-900 ">
        <div className="mb-10 mt-5 flex items-center justify-center text-3xl text-white">
          {" "}
          Prediction Graph
        </div>
        <div className=" m-4 overflow-hidden rounded bg-gray-300 p-8 shadow-lg">
          <div className="flex flex-row items-center p-4">
            <select
              className="mb-4 rounded border p-2"
              value={days}
              onChange={(e) => setDays(Number(e.target.value))}
            >
              <option value={7}>7 Days</option>
              <option value={30}>30 Days</option>
              <option value={365}>365 Days</option>
            </select>
            <div className=" m-5 flex justify-center">
              <img
                src={imageUrl}
                alt="Bitcoin Image"
                width={2000}
                height={1000}
                className="rounded "
              />
            </div>
            <div className="px-6 py-4">
              <div className="mb-2 text-xl font-bold"> (USDT)</div>
              <p className="text-base text-gray-700">
                Tether is a cryptocurrency stablecoin, launched by the company
                Tether Limited Inc. in 2014. As of January 2024, Tether's
                website lists fourteen protocols and blockchains on which Tether
                has been minted. Tether has been criticized for a lack of
                transparency and verifiability of its claimed fiat reserves.
              </p>
            </div>
          </div>
          <div className="mb-4 flex justify-center">
            <input
              placeholder="Enter the Number of crypto"
              className="p-4"
              type="number"
            />
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex w-1/2 flex-row justify-around">
              <div className="flex items-center justify-center rounded-sm bg-green-500 pb-2 pl-6 pr-6 pt-2">
                <FontAwesomeIcon icon={faArrowUp} size="2x" color="white" />
                <h1 className="pl-4 text-white "><strong> 0.5665 %</strong></h1>
              </div>
              <div className="flex items-center justify-center rounded-sm bg-red-500 pb-2 pl-6 pr-6 pt-2">
                <FontAwesomeIcon icon={faArrowDown} size="2x" color="white" />
                <h1 className="pl-4 text-white "><strong> 0.4335 %</strong></h1>
              </div>
            </div>
            <div className="flex w-1/2 flex-row justify-around">
              <button
                className="rounded-sm bg-green-500 pb-4 pl-10 pr-10 pt-4 text-white"
                onClick={buy}
              >
                Buy
              </button>
              <button
                className="rounded-sm bg-red-500 pb-4 pl-10 pr-10 pt-4 text-white"
                onClick={sell}
              >
                Sell
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
