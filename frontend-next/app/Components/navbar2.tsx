"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";


const Navbar2 = () => {
  return (
    <div className="t-0">
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
    </div>
  )
}

export default Navbar2
