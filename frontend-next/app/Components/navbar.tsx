import Link from "next/link";
import Image from "next/image";
import AuthButtons from "./forms/authbutton";
import { Next_Auth_Config } from "../lib/auth";
import { getServerSession } from "next-auth";

export default async function Navbar() {
  const session = await getServerSession(Next_Auth_Config);
  return (
    <div className="fixed left-0 right-0 top-0 z-10 border-b bg-gray-600 py-2">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link
            href={"/"}
            className="flex items-center gap-x-2 text-2xl font-bold text-white"
          >
            HackBroker
          </Link>
        </div>
        <div className="flex items-end">
          {session && (
            <h1 className="text-m mr-4 pr-5 font-serif font-bold">
              Hello {session?.user?.name} !😊
            </h1>
          )}
          <AuthButtons />
        </div>
      </div>
    </div>
  );
}
