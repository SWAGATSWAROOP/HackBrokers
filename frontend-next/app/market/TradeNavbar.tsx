import Link from "next/link";
import { buttonVariants } from "../Components/ui/button";

export default async function TradeNavbar() {
  return (
    <div className="fixed left-0 right-0 top-0 z-10 border-b bg-gray-800 py-2">
      <div className="container mx-auto flex items-center justify-between">
        <Link
          href={"/"}
          className="flex items-center gap-x-2 font-serif text-xl font-bold text-yellow-400"
        >
          🅑🅔 CRYPTOxAI
        </Link>
        <Link
          href={"/deposit"}
          className={buttonVariants({ variant: "outline" })}
        >
          <h1 className="font-serif">Deposit Money</h1>
        </Link>
      </div>
    </div>
  );
}
