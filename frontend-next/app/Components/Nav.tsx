"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Nav() {
  const router = useRouter();
  return (
    <div className="mt-[2350px]">
      <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
        <div className="text-xl font-bold text-yellow-400">🅑🅔 CRYPTOxAI</div>
        <nav className="flex items-center space-x-4">
          <Link href="#search" aria-label="Search">
            🔍
          </Link>
          <Link href="#market">Market</Link>
          <Link href="#trade">Trade</Link>
          <div className="relative group">
            <Link href="#more">More▾</Link>
            <div className="absolute hidden group-hover:block bg-gray-800 text-white rounded mt-1">
              <Link href="#about" className="block px-4 py-2">About</Link>
              <Link href="#contact" className="block px-4 py-2">Contact</Link>
            </div>
          </div>
          <Link href="#about">About</Link>
          <button
            onClick={() => {
              router.push("/signin");
            }}
            className="bg-green-400 text-black px-4 py-2 rounded"
          >
            Login
          </button>
        </nav>
        <button className="text-white text-2xl">🌙</button>
      </header>

      <main className="text-left p-20">
        <section className="float-left clear-right">
            <div className="ml-52 font-bold"> 
          <h1 className="m-3 text-4xl font-serif text-white">Made in India</h1>
          <h2 className="m-1 text-7xl font-serif text-white">CRYPTO APP</h2>
          <p className="m-3 text-4xl font-serif text-white ">All in one solution</p>
          
          <div className="mt-8">
            <input
              type="email"
              placeholder="@email"
              className="w-64 p-2 rounded mr-2"
            />
            <button
              onClick={() => {
                router.push("/signup");
              }}
              className="bg-green-400 text-black px-4 py-2 rounded"
            >
              Sign up
            </button>
          </div>
          </div>
        </section>
        <img className="float-right w-1/4" src="phone1.png" alt="phone image" />

        <section className="clear-both grid grid-cols-2 gap-8 mt-20 p-2">
          <div className="bg-gray-700 text-white p-5 text-center border border-gray-700 rounded">
            <h3>Buy Crypto</h3>
            <p>BUY BTC, ETH, and other crypto easily via bank transfer</p>
            <img src="buy.webp" alt="Buy" className="h-52 mx-auto" />
          </div>
          <div className="bg-gray-700 text-white p-5 text-center border border-gray-700 rounded">
            <h3>Recurring Buy</h3>
            <p>Grow your portfolio automatically with daily, weekly, or monthly trades.</p>
            <img src="phone2.webp" alt="Recurring Buy" className="h-52 mx-auto" />
          </div>
          <div className="bg-gray-700 text-white p-5 text-center border border-gray-700 rounded">
            <h3>Price Alert</h3>
            <p>Be notified on BTC, ETH prices and more</p>
            <ul className="list-none p-0">
              <li>BTC Bitcoin +500.00 1.2%</li>
              <li>ETH Ethereum -200.00 -2%</li>
              <li>BNB Bignbuilt +150.00 2.3%</li>
              <li>ERT Ethorium +210.00 1.2%</li>
              <li>TKV Totalkv -120.00 -0.08%</li>
              <li>MKP Masterkop +233.00 2.5%</li>
            </ul>
          </div>
          <div className="bg-gray-700 text-white p-5 text-center border border-gray-700 rounded">
            <h3>On-Chain Staking</h3>
            <p>Generate passive income by helping to secure blockchain</p>
          </div>
        </section>

        <section className="flex items-center justify-center gap-4 my-8">
          <img src="portfolio3.png" alt="Mobile App" className="max-w-1/2 rounded" />
          <div>
            <h3>Trade on the go, Anywhere, anytime.</h3>
            <p>Compatible with all browsers</p>
          </div>
        </section>

        <section className="bg-gray-900 p-8 rounded my-8">
          <h2 className="text-xl">Latest News</h2>
          <p>Uniswap Foundation Delays Proposal Upgrade Vote</p>
          <p>European Bitcoin ETPs Face Losses Amid Rising US Competition</p>
          <p>Trader Exchanges 29 ETH for 129.6 Billion PEW, Holding Value of Approximately $900,000</p>
          <p>Ethereum Co-Founder Vitalik Buterin Comments On LUNA Criticism</p>
          <Link href="#more-news" className="text-blue-400">View All News</Link>
        </section>
      </main>

      <footer className="bg-gray-800 text-white p-8">
        <div className="flex justify-around text-left">
          <div>
            <h4 className="mb-2">ABOUT</h4>
            <Link href="#careers" className="block">Careers</Link>
            <Link href="#news" className="block">News</Link>
            <Link href="#press" className="block">Press</Link>
            <Link href="#legal" className="block">Legal</Link>
          </div>
          <div>
            <h4 className="mb-2">PRODUCT</h4>
            <Link href="#exchange" className="block">Exchange</Link>
            <Link href="#buy-crypto" className="block">Buy crypto</Link>
            <Link href="#tax" className="block">Tax</Link>
            <Link href="#tokens" className="block">Tokens</Link>
          </div>
          <div>
            <h4 className="mb-2">BUSINESS</h4>
            <Link href="#p2p-merchant" className="block">P2P Merchant</Link>
            <Link href="#vip-service" className="block">VIP Service</Link>
            <Link href="#labs" className="block">Labs</Link>
          </div>
        </div>
        <div className="text-center mt-4">
          <p>Copyrights are reserved by CRYPTOxAI | +91-8304729438</p>
        </div>
      </footer>
    </div>
  );
}
