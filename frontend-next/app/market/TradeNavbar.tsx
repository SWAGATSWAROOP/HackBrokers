import Link from "next/link";

export default async function TradeNavbar() {
  return (
    <div className="fixed left-0 right-0 top-0 z-10 border-b bg-gradient-to-r from-indigo-900 from-30% via-purple-900 to-pink-500 py-2">
      <div className="container mx-auto flex items-center justify-between">
        <Link
          href={"/"}
          className="flex items-center gap-x-2 font-serif text-xl font-bold text-yellow-400"
        >
          🅑🅔 CRYPTOxAI
        </Link>
        <Link
          href={"/deposit"}
          className="rounded-xl bg-black from-black from-10% to-blue-500 px-4 py-2 text-white hover:bg-gradient-to-r"
        >
          <h1 className="font-serif">Deposit Money</h1>
        </Link>
      </div>
    </div>
  );
}
