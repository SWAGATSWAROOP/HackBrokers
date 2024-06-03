import Link from "next/link";
import AuthButtons from "./forms/authbutton";
import { Next_Auth_Config } from "../lib/auth";
import { getServerSession } from "next-auth";

export default async function Navbar() {
  const session = await getServerSession(Next_Auth_Config);
  return (
    <div className="fixed left-0 right-0 top-0 z-10 border-b bg-gray-800 py-2">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link
            href={"/"}
            className="flex items-center gap-x-2 text-xl font-bold text-yellow-400 font-serif"
          >
           🅑🅔 CRYPTOxAI
          </Link>
        </div>
        <div className="flex items-end">
          <AuthButtons />
        </div>
      </div>
    </div>
  );
}
