"use client";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { useSession } from "next-auth/react";
import { contract } from "@/lib/constant";

export default function BNBCard() {
  const [days, setDays] = useState(7);
  const [imageUrl, setImageUrl] = useState(
    "https://res.cloudinary.com/djtudleky/image/upload/v1717474425/bzpmv6wreqw1zd5lrced.png",
  );

  // useEffect(() => {
  //   const fetchImage = async () => {
  //     console.log("Change occured");
  //     try {
  //       const res = await axios.get(
  //         `http://127.0.0.1:5000/upload?days=${days}&type=bnb`,
  //       );
  //       console.log(res);
  //       setImageUrl(res.data.secure_url);
  //     } catch (error) {
  //       console.error("Error fetching image:", error);
  //     }
  //   };

  //   fetchImage();
  // }, [days]);

  async function buy() {
    try {
      const email = sessionStorage.getItem("email");
      const createUser = await contract.buy(email, 0, "ETH", 0);
      await createUser.wait();
    } catch (error) {
      console.log("Error");
    }
  }

  async function sell() {
    try {
      const email = sessionStorage.getItem("email");
      const createUser = await contract.sell(email, "ETH", 0, 0);
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
            {/* <img
              src={imageUrl}
              alt="BNB Image"
              width={2000}
              height={1000}
              className="rounded"
            /> */}
          </div>
          <div className="w-full px-6 py-4 md:w-1/3 lg:w-1/2">
            <div className="mb-2 text-center text-xl font-bold">BNB:</div>
            <p className="text-center text-base text-gray-700">
              Binance Coin is a cryptocurrency and the native token of the BNB
              Chain ecosystem, which includes BNB Smart Chain (BSC) and BNB
              Beacon Chain. BNB was created in July 2017 and launched through an
              initial coin offering (ICO). It was originally built on the
              Ethereum blockchain but later moved to the Binance Smart Chain,
              now called BNB Chain.
            </p>
            <div className="m-4 flex justify-center">
              <input
                placeholder="Enter the number of crypto"
                className="w-80 rounded-lg p-5"
                type="number"
              />
            </div>
          </div>
        </div>

        <div className="ml-12 mr-12 flex flex-row justify-between">
          <div className="flex w-1/2 flex-row justify-around">
            <div className="flex items-center self-start rounded-lg bg-green-600 pb-2 pl-6 pr-6 pt-2 hover:bg-green-500">
              <FontAwesomeIcon icon={faArrowUp} size="2x" color="white" />
              <h1 className="pl-4 text-white">
                <strong>0.4288%</strong>
              </h1>
            </div>
            <div className="flex items-center self-start rounded-lg bg-red-600 pb-2 pl-6 pr-6 pt-2 hover:bg-red-500">
              <FontAwesomeIcon icon={faArrowDown} size="2x" color="white" />
              <h1 className="pl-4 text-white">
                <strong>0.5712%</strong>
              </h1>
            </div>
          </div>
          <div className="flex w-1/2 flex-row justify-around">
            <button
              className="flex items-center self-start rounded-lg bg-green-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-green-500 md:text-base"
              onClick={buy}
            >
              Buy
            </button>
            <button
              className="flex items-center self-start rounded-lg bg-red-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-red-500 md:text-base"
              onClick={sell}
            >
              Sell
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
