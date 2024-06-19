"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { contract } from "@/lib/constant";

export default function BitcoinCard() {
  const [days, setDays] = useState(7);
  const [imageUrl, setImageUrl] = useState(
    "https://res.cloudinary.com/djtudleky/image/upload/v1717468043/ogib3zfczrxpyfeo6mod.png",
  );

  const data = {
    desc: 12,
    inc: 23,
  };

  // useEffect(() => {
  //   const fetchImage = async () => {
  //     console.log("Change occurred");
  //     try {
  //       const res = await axios.get(
  //         `http://127.0.0.1:5000/upload?days=${days}&type=btc`,
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
    const email = sessionStorage.getItem("email");
    const createUser = await contract.buy(email, 0, "BTC", 0);
    await createUser.wait();
  }

  async function sell() {
    const email = sessionStorage.getItem("email");
    const createUser = await contract.sell(email, "BTC", 0, 0);
    await createUser.wait();
  }

  return (
    <>
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
                alt="Bitcoin Image"
                className="h-auto w-full rounded"
              />
            </div>
            <div className="w-full px-6 py-4 md:w-1/3 lg:w-1/2">
              <div className="mb-2 text-center text-xl font-bold">
                Bitcoin (BTC):
              </div>
              <p className="text-center text-base text-gray-700">
                Bitcoin is a decentralized digital currency, without a central
                bank or single administrator, that can be sent from user to user
                on the peer-to-peer bitcoin network without the need for
                intermediaries.
              </p>
              <div className="m-4 flex flex-col items-center">
                <input
                  placeholder="Enter the number of crypto"
                  className="w-80 rounded-lg p-5"
                  type="number"
                />
                <div className="mt-4 flex space-x-4">
                  <button
                    className="rounded-lg bg-green-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-green-500 md:text-base"
                    onClick={buy}
                  >
                    Buy
                  </button>
                  <button
                    className="rounded-lg bg-red-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-red-500 md:text-base"
                    onClick={sell}
                  >
                    Sell
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="ml-12 mr-12 mt-4 flex flex-row justify-between">
            <div className="flex w-1/2 flex-row justify-around">
              <div className="flex items-center self-start rounded-lg bg-green-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-green-500 md:text-base">
                <FontAwesomeIcon icon={faArrowUp} size="2x" color="white" />
                <h1 className="pl-4 text-white">
                  <strong>0.32007%</strong>
                </h1>
              </div>
              <div className="flex items-center self-start rounded-lg bg-red-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-red-500 md:text-base">
                <FontAwesomeIcon icon={faArrowDown} size="2x" color="white" />
                <h1 className="pl-4 text-white">
                  <strong>0.6800%</strong>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
