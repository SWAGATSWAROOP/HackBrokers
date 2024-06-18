import Link from "next/link";
import { Next_Auth_Config } from "../lib/auth";
import { getServerSession } from "next-auth";

export default async function MarketNavbar() {
  const session = await getServerSession(Next_Auth_Config);
  return (
    <div className="fixed left-0 right-0 top-0 z-10 border-b bg-blue-950 py-2">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link
            href={"/"}
            className="flex items-center gap-x-2 text-2xl font-bold text-white"
          >
            Hackbrokers
          </Link>
        </div>
        <div className="flex items-end">
          <h1 className="txt">market</h1>
          <h1>trade</h1>~
        </div>
      </div>
    </div>
  );
}
