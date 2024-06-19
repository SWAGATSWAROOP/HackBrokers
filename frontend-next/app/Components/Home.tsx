"use client";
import Link from "next/link";
import AuthButtons from "./forms/authbutton";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowRightIcon } from "lucide-react";

export default function HomeNavbar() {
  const router = useRouter();
  return (
    <>
      <div className="fixed left-0 right-0  top-0 z-10 border-b bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-500 from-30%  py-3">
        <div className="container mx-auto flex items-center justify-between px-6">
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center gap-x-2 font-serif text-2xl font-extrabold text-yellow-400 tracking-wider"
            >
              🅑🅔 CRYPTOxAI
            </Link>
          </div>

          <div className="hidden items-center gap-x-8 md:flex">
            <Link
              href="https://crypto-sand-ten.vercel.app/"
              className="relative group font-serif text-white transition duration-300 ease-in-out transform hover:scale-105"
            >
              Market
              <span className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
            </Link>
            <Link
              href="/trade"
              className="relative group font-serif text-white transition duration-300 ease-in-out transform hover:scale-105 px-20"
            >
              Trade
              <span className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
            </Link>
            <Link
              href="https://drive.google.com/file/d/1X6gnck4XwoY7YGqPxe3ReztPepbUo5oi/view"
              className="relative group font-serif text-white transition duration-300 ease-in-out transform hover:scale-105"
            >
              About
              <span className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
            </Link>
          </div>
          <div className="flex items-center ">
            <AuthButtons />
          </div>
        </div>
      </div>
      <div className="mt-14 flex flex-col items-center md:mt-16 md:flex-row lg:mt-5">
        <section className="flex-1 md:ml-20 lg:ml-52">

          <div className="flex flex-col justify-center gap-6 rounded-lg bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-500 from-30% px-6 py-10 md:w-4/5 md:px-10">
            <p className="text-6xl font-serif font-bold text-white md:text-6xl md:leading-tight">
              CryptoxAI
            </p>
            <p className="text-3xl font-semibold font-serif text-white md:text-4xl md:leading-relaxed">
              Empowering Your Cryptocurrency Journey with AI-driven Insights
            </p>
            <Link
              href="/signup"
              className="flex items-center gap-5 self-start rounded-lg bg-green-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-green-500 md:text-base"
            >
              <span className="text-xl font-semibold">Sign Up</span><ArrowRightIcon className="w-5 md:w-6" />
            </Link>
          </div>

        </section>
        <div className="flex justify-center md:w-1/3 md:justify-end">
          <div className="m-10">
            <Image src="/phone1.png" alt="image" width={620} height={640} />
          </div>
        </div>
      </div>
      <div className="flex min-h-screen items-center justify-center mb-20">
        <div className="grid grid-cols-2 gap-x-10 gap-y-20">
          <div className="max-w-sm overflow-hidden rounded bg-indigo-900 hover:bg-gradient-to-r from-purple-900 to-indigo-900 from-40% shadow-lg">
            <div className="px-10 py-6">
              <div className="mb-4 text-center text-xl font-bold text-white">
                Buy Crypto
              </div>
              <p className="pb-5 text-center text-base text-white mb-5">
                BUY BTC, ETH, and other crypto easily via bank transfer
              </p>
              <Image src="/buy.jpg" alt="image" width={500} height={200} />
            </div>
          </div>
          <div className="max-w-sm overflow-hidden rounded bg-indigo-900 hover:bg-gradient-to-l from-purple-900 to-indigo-900 from-70% shadow-lg">
            <div className="px-10 py-6">
              <div className="mb-4 pb-5 text-center text-xl font-bold text-white">
                Recurring Buy
              </div>
              <p className="text-center text-base text-white mb-5">
                Grow your portfolio automatically with daily, weekly, or monthly
                trades.
              </p>
              <Image src="/buying.jpg" alt="image" width={620} height={640} />
            </div>
          </div>
          <div className="max-w-sm overflow-hidden rounded bg-indigo-900 hover:bg-gradient-to-r from-purple-900 to-indigo-900 from-40% shadow-lg">

            <div className="px-10 py-6">
              <div className="mb-4 text-center text-xl font-bold text-white">
                Price Alert
              </div>
              <p className="text-center text-base text-white mb-10">
                Be notified on BTC, ETH prices and more
              </p>
              <Image src="/alert.jpeg" alt="image" width={620} height={640} />
            </div>

          </div>
          <div className="max-w-sm overflow-hidden rounded bg-indigo-900 hover:bg-gradient-to-l from-purple-900 to-indigo-900 from-70% shadow-lg">

            <div className="px-10 py-6">
              <div className="mb-4 text-center text-xl font-bold text-white">
                Trade on the go
              </div>
              <p className="text-center text-base text-white mb-5">
                Anywhere, anytime. Compatible with all browsers
              </p>
              <Image src="/anywhere.jpg" alt="image" width={620} height={640} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
