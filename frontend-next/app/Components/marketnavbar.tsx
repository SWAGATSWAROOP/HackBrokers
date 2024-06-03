import Link from "next/link";
import { Next_Auth_Config } from "../lib/auth";
import { getServerSession } from "next-auth";
import MarketOverview from './marketOverview';

export default async function MarketNavbar() {
  const session = await getServerSession(Next_Auth_Config);
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="fixed left-0 right-0 top-0 z-10 border-b bg-blue-950 py-2">
        <div className="container mx-auto flex flex-wrap items-center justify-between px-4">
          <div className="flex items-center mb-2 sm:mb-0">
            <Link
              href="/"
              className="flex items-center gap-x-2 text-2xl font-bold text-white"
            >
              <img src="/path/to/logo.png" alt="Hackbrokers" className="h-8 w-8" />
              🅑🅔 CRYPTOxAI
            </Link>
          </div>
          <div className="flex items-center space-x-4 sm:space-x-6 mb-2 sm:mb-0">
            <Link href="#" className="hover:text-gray-300">
              Market
            </Link>
            <Link href="#" className="hover:text-gray-300">
              Trade
            </Link>
            <Link href="#" className="hover:text-gray-300">
              More
            </Link>
            <Link href="#" className="hover:text-gray-300">
              About
            </Link>
            <button className="border border-gray-700 py-1 px-3 rounded hover:border-gray-500 bg-yellow-500 text-black">
              {session ? session.user.name : "Username"}
            </button>
          </div>
        </div>
      </div>
      <div className="pt-16">
        <MarketOverview /> {/* Add your MarketOverview component here */}
      </div>
    </div>
  );
}
