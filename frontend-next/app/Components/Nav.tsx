"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import HomeNavbar from "./Home";
import { ArrowBigRightIcon } from "lucide-react";

export default function Nav() {
  const router = useRouter();
  return (
    <>
      <HomeNavbar />
      <div className="flex flex-col text-black">
        <div className="flex min-h-screen items-center border-2 border-[#fe8d88] bg-sky-100">
          <div className="flex flex-col items-center md:flex-row lg:mt-5">
            <section className="flex-1 md:ml-10 md:mr-10 lg:ml-20 lg:mr-20">
              <div className="flex flex-col justify-center gap-6 rounded-lg bg-gradient-to-r from-indigo-600 via-purple-900 to-indigo-900 px-6 py-10 md:px-10">
                <p className="text-center font-serif text-5xl font-bold text-white md:text-6xl md:leading-tight">
                  Analyze your portfolio
                </p>
                <p className="text-center font-serif text-2xl font-semibold text-white md:text-4xl md:leading-relaxed">
                  AI driven insights that help users anticipate market trends
                </p>
                <Link
                  href="/trade"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-green-500 px-6 py-3 font-serif text-lg font-semibold text-white transition-all duration-300 hover:bg-green-600 hover:text-black hover:shadow-lg md:text-xl"
                >
                  <span>Get Started</span>
                  <ArrowBigRightIcon className="h-6 w-6" />
                </Link>
              </div>
            </section>

            <div className="flex justify-center md:w-1/3 md:justify-end">
              <div className="m-5 md:m-10 lg:m-10">
                <Image
                  src="/portfolioanalyze.png"
                  alt="Portfolio Analyze"
                  width={620}
                  height={640}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex min-h-screen items-center bg-indigo-400">
          <div className="flex flex-col items-center md:flex-row-reverse lg:mt-5">
            <section className="flex-1 md:mr-10 lg:mr-20">
              <div className="flex flex-col justify-center gap-6 rounded-lg bg-gradient-to-r from-indigo-600 via-purple-900 to-indigo-900 px-6 py-10 md:px-10">
                <p className="text-center font-serif text-5xl font-bold text-white md:text-6xl md:leading-tight">
                  Price Prediction
                </p>
                <p className="text-center font-serif text-2xl font-semibold text-white md:text-4xl md:leading-relaxed">
                  Predict future crypto prices using advanced machine learning
                  techniques
                </p>
                <Link
                  href="/trade"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-yellow-500 px-6 py-3 font-serif text-lg font-semibold text-white transition-all duration-300 hover:bg-yellow-400 hover:text-black hover:shadow-lg md:text-xl"
                >
                  <span>See Predictions</span>
                  <ArrowBigRightIcon className="h-6 w-6" />
                </Link>
              </div>
            </section>
            <div className="flex justify-center md:w-1/3 md:justify-start">
              <div className="md:m-5">
                <Image
                  src="/pricepredict.png"
                  alt="Price Prediction"
                  width={620}
                  height={640}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex min-h-screen items-center justify-center border-2 border-[#e67b76] bg-violet-200">
          <div className="flex flex-col items-center md:flex-row lg:mt-5">
            <section className="flex-1 md:ml-10 md:mr-10 lg:ml-20 lg:mr-20">
              <div className="flex flex-col justify-center gap-6 rounded-lg bg-gradient-to-r from-indigo-600 via-purple-900 to-indigo-900 px-6 py-10 md:px-10">
                <p className="text-center font-serif text-5xl font-bold text-white md:text-6xl md:leading-tight">
                  Market Analysis
                </p>
                <p className="text-center font-serif text-2xl font-semibold text-white md:text-4xl md:leading-relaxed">
                  View real-time cryptocurrency data & trends
                </p>
                <Link
                  href="https://crypto-sand-ten.vercel.app/"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-green-500 px-6 py-3 font-serif text-lg font-semibold text-white transition-all duration-300 hover:bg-green-600 hover:text-black hover:shadow-lg md:text-xl"
                >
                  <span>Real Time crypto Updates</span>
                  <ArrowBigRightIcon className="h-6 w-6" />
                </Link>
              </div>
            </section>
            <div className="flex justify-center md:w-1/3 md:justify-end">
              <div className="m-5 md:m-10 lg:m-10">
                <Image
                  src="/marketanalysis.png"
                  alt="Market Analysis"
                  width={620}
                  height={640}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex min-h-screen items-center bg-sky-100">
          <div className="flex flex-col items-center md:flex-row-reverse lg:mx-auto lg:mt-5">
            <section className="flex-1 md:ml-10 md:mr-10 lg:ml-20 lg:mr-20">
              <div className="flex flex-col justify-center gap-6 rounded-lg bg-gradient-to-r from-indigo-600 via-purple-900 to-indigo-900 px-6 py-10 md:px-10">
                <p className="text-center font-serif text-5xl font-bold text-white md:text-6xl md:leading-tight">
                  Secure Transactions
                </p>
                <p className="text-center font-serif text-2xl font-semibold text-white md:text-4xl md:leading-relaxed">
                  Blockchain integration for decentralized storage
                </p>
                <Link
                  href="/trade"
                  className="inline-flex w-auto items-center justify-center gap-3 rounded-full bg-yellow-500 px-6 py-3 font-serif text-lg font-semibold text-white transition-all duration-300 hover:bg-yellow-400 hover:text-black hover:shadow-lg md:text-xl"
                >
                  <span>Let&apos;s Go</span>
                  <ArrowBigRightIcon className="h-6 w-6" />
                </Link>
              </div>
            </section>
            <div className="flex justify-center md:w-1/3 md:justify-start">
              <div className="m-5 md:m-10 lg:m-10">
                <Image
                  src="/blockchain.png"
                  alt="Secure Transactions"
                  width={620}
                  height={640}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-20 flex flex-col items-center justify-center">
        <div className="text-center">
          <div className="pb-5 font-pacifico text-[50px] text-white">
            Then what are you waiting for
          </div>
          <div className="tracking-2xl pb-10 font-anton text-3xl text-white">
            Start Trading with CRYPTOxAI
          </div>
          <Link
            href="/signup"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-yellow-500 px-6 py-3 text-lg font-semibold text-white transition-all duration-300 hover:bg-yellow-400 hover:text-black hover:shadow-lg md:text-xl"
          >
            <span>Let&apos;s Go</span>
            <ArrowBigRightIcon className="h-6 w-6" />
          </Link>
        </div>
      </div>

      <footer className="mt-4 bg-gradient-to-r from-indigo-900 from-30% to-purple-900  py-8 pb-4 text-white">
        <div className="px- container mx-auto grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-lg font-bold">Crypto Exchange</h3>
            <p className="text-sm">
              Your go-to platform for trading Bitcoin, Ethereum, and other
              cryptocurrencies.
            </p>
          </div>
          <div>
            <h3 className="mb-4 ml-40 text-lg font-bold">Quick Links</h3>
            <ul className="ml-40">
              <li className="mb-2">
                <Link
                  href="https://crypto-sand-ten.vercel.app/"
                  className="text-sm text-gray-300 hover:text-white"
                >
                  Market
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/trade"
                  className="text-sm text-gray-300 hover:text-white"
                >
                  Trade
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="https://drive.google.com/file/d/1X6gnck4XwoY7YGqPxe3ReztPepbUo5oi/view"
                  className="text-sm text-gray-300 hover:text-white"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 pl-40 text-lg font-bold">Follow Us</h3>
            <div className="flex space-x-4 pl-40">
              <Link
                href="https://x.com/Sanghrakshit12"
                className="text-gray-200 hover:text-white"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.949.555-2.003.959-3.127 1.184-.897-.959-2.173-1.559-3.59-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124-4.088-.205-7.719-2.165-10.148-5.144-.422.722-.666 1.561-.666 2.457 0 1.69.861 3.178 2.168 4.048-.801-.026-1.555-.246-2.21-.616v.061c0 2.362 1.679 4.337 3.907 4.778-.409.111-.84.171-1.284.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.415-1.68 1.319-3.809 2.105-6.102 2.105-.397 0-.79-.023-1.177-.067 2.179 1.393 4.768 2.207 7.548 2.207 9.054 0 14.002-7.5 14.002-14.002 0-.209 0-.42-.015-.631.961-.695 1.8-1.562 2.462-2.549z" />
                </svg>
              </Link>
              <Link
                href="https://github.com/Sanghrakshit12"
                className="text-gray-200 hover:text-white"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.675 0h-21.35c-.73 0-1.325.595-1.325 1.325v21.351c0 .729.595 1.324 1.325 1.324h11.498v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.464.099 2.797.143v3.24l-1.919.001c-1.504 0-1.794.715-1.794 1.762v2.314h3.588l-.467 3.622h-3.12v9.293h6.116c.73 0 1.324-.595 1.324-1.324v-21.35c0-.73-.594-1.325-1.324-1.325z" />
                </svg>
              </Link>
              <Link
                href="https://www.linkedin.com/in/sanghrakshit/"
                className="text-gray-200 hover:text-white"
              >
                <svg
                  className="h-6 w-6 "
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.616 3.017c1.179 0 2.134.955 2.134 2.134s-.955 2.134-2.134 2.134-2.134-.955-2.134-2.134.955-2.134 2.134-2.134zM9.847 8.143h-3.713v12.922h3.713v-12.922zM8.001 4.978c-1.19 0-2.155.965-2.155 2.155s.965 2.155 2.155 2.155 2.155-.965 2.155-2.155-.965-2.155-2.155-2.155zM15.136 8.143h-3.711v12.922h3.711v-6.505c0-2.576 3.308-2.793 3.308 0v6.505h3.711v-7.359c0-5.172-6.187-4.988-6.187 0v7.359h-.132v-12.922h-.132z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-4 border-t border-gray-700 pt-4">
          <p className="text-center text-sm text-gray-100">
            © 2024 Crypto Exchange. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
