import Link from "next/link";
import { Next_Auth_Config } from "../lib/auth";
import { getServerSession } from "next-auth";
import { buttonVariants } from "../Components/ui/button";

export default async function TradeNavbar() {
  const session = await getServerSession(Next_Auth_Config);
  return (
    <div className="fixed left-0 right-0 top-0 z-10 border-b bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-500 from-30% py-2">
      <div className="container mx-auto flex items-center justify-between">
        <Link
          href={"/"}
          className="flex items-center gap-x-2 font-serif text-xl font-bold text-yellow-400"
        >
          🅑🅔 CRYPTOxAI
        </Link>
        <Link
            href={"/deposit"}
            className="bg-black hover:bg-gradient-to-r from-black from-10% to-blue-500 px-4 py-2 text-white rounded-xl"
          >
          <h1 className="font-serif">Deposit Money</h1>
          </Link>
      
          
   
      </div>
    </div>
  );
}
