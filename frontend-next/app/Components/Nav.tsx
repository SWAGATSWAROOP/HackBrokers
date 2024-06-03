"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import AuthButtons from "./forms/authbutton";
import { useState } from "react";
import Image from "next/image";

export default function Nav() {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <div className="fixed left-0 right-0 top-0 z-10 border-b bg-gray-800 py-2">
        <div className="container mx-auto flex items-center justify-between px-4">
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center gap-x-2 font-serif text-xl font-bold text-yellow-400"
            >
              🅑🅔 CRYPTOxAI
            </Link>
          </div>
          <div className="hidden items-center gap-x-4 md:flex">
            <Link
              href="https://crypto-sand-ten.vercel.app/"
              className="mx-2 font-serif text-white"
            >
              Market
            </Link>

            <Link href="/trade" className="mx-2 font-serif text-white">
              Trade
            </Link>
            <Link href="/about" className="mx-2 font-serif text-white">
              About
            </Link>
            <Link href="/more" className="mx-2 font-serif text-white">
              More
            </Link>
          </div>
          <div className="flex items-center">
            <AuthButtons />
          </div>
        </div>
      </div>
      <div className="mt-16 flex flex-col items-center md:mt-20 md:flex-row">
        <section className="flex-1 md:ml-20 lg:ml-52">
          <div className="text-center font-bold md:text-left">
            <h1 className="mb-3 font-serif text-2xl text-white md:text-4xl">
              Made in India
            </h1>
            <h2 className="mb-1 font-serif text-5xl text-white md:text-7xl">
              CRYPTO APP
            </h2>
            <p className="mb-3 font-serif text-2xl text-white md:text-4xl">
              All in one solution
            </p>
            <div className="mt-8 flex flex-col items-center md:flex-row md:items-start">
              <input
                placeholder="Email"
                className="mb-2 w-full rounded p-2 md:mb-0 md:mr-2 md:w-64"
              />
              <button
                onClick={() => {
                  router.push("/signup");
                }}
                className="w-full rounded-lg bg-green-500 px-4 py-2 font-bold text-black transition duration-300 hover:bg-green-600 focus:ring-4 focus:ring-green-300 md:w-48"
              >
                Sign up
              </button>
            </div>
          </div>
        </section>
        <div className="flex justify-center md:w-1/3 md:justify-end">
          <div className="m-10">
            <Image
              src="/phone1.png"
              alt="phone image"
              width={620}
              height={640}
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 p-20">
      <div className="max-w-sm overflow-hidden rounded shadow-lg">
      <Image className="ml-24" src="/buy.webp" alt="pic" width={200} height={200}></Image>
        <div className="px-6 py-4">
          <div className="mb-2 text-xl font-bold text-white text-2xl text-center">Buy Crypto</div>
          <p className="text-base  text-white text-xl text-center">
          BUY BTC, ETH, and other crypto easily via bank transfer
          </p>
        </div>
        <div className="px-6 pb-2 pt-4">
          <span className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
            #crypto
          </span>
          <span className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
            #blockchain
          </span>
        </div>
      </div>
      <div className="max-w-sm overflow-hidden rounded shadow-lg">
      <Image className="ml-24" src="/phone2.webp" alt="pic" width={200} height={200}></Image>
        <div className="px-6 py-4">
          <div className="mb-2 text-xl font-bold text-white text-2xl text-center">Recurring Buy</div>
          <p className="text-base  text-white text-xl text-center">
          Grow your portfolio automatically with daily, weekly, or monthly trades.
          </p>
          <br />
          <ul className="list-none p-0 text-white text-xl text-center">
              <li>BTC Bitcoin +500.00 1.2%</li>
              <li>ETH Ethereum -200.00 -2%</li>
              <li>BNB Bignbuilt +150.00 2.3%</li>
              <li>ERT Ethorium +210.00 1.2%</li>
              <li>TKV Totalkv -120.00 -0.08%</li>
              <li>MKP Masterkop +233.00 2.5%</li>
            </ul>
        </div>
        <div className="px-6 pb-2 pt-4">
          <span className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
            #photography
          </span>
          <span className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
            #travel
          </span>
          <span className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
            #winter
          </span>
        </div>
      </div>
      <div className="max-w-sm overflow-hidden rounded shadow-lg">
      <Image className="ml-24" src="/portfolio3.png" alt="pic" width={200} height={200}></Image>
        <div className="px-6 py-4">
          <div className="mb-2 text-xl font-bold text-white text-2xl text-center">Price Alert</div>
          <p className="text-base  text-white text-xl text-center">
          Be notified on BTC, ETH prices and more
          </p>
        </div>
        <div className="px-6 pb-2 pt-4">
          <span className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
            #photography
          </span>
          <span className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
            #travel
          </span>
          <span className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
            #winter
          </span>
        </div>
      </div>
      <div className="max-w-sm overflow-hidden rounded shadow-lg">
      <Image className="ml-24" src="/buy.webp" alt="pic" width={200} height={200}></Image>
        <div className="px-6 py-4">
          <div className="mb-2 text-xl font-bold text-white text-2xl text-center">Trade on the go, Anywhere, anytime.</div>
          <p className="text-base text-white text-xl text-center">
          Compatible with all browsers
          </p>
        </div>
        <div className="px-6 pb-2 pt-4">
          <span className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
            #photography
          </span>
          <span className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
            #travel
          </span>
          <span className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
            #winter
          </span>
        </div>
      </div>
      </div>
    </>
  );
}
