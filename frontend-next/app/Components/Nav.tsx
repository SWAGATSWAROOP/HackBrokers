"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import AuthButtons from "./forms/authbutton";
import { useState } from "react";
import Image from "next/image";

export default function Nav() {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <div className="fixed left-0 right-0 top-0 z-10 border-b bg-gray-800 py-2">
        <div className="container mx-auto flex items-center justify-between px-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-x-2 font-serif text-xl font-bold text-yellow-400">
              🅑🅔 CRYPTOxAI
            </Link>
          </div>
          <div className="hidden md:flex items-center gap-x-4">
            <Link href="/market" className="mx-2 font-serif text-white">
              Market
            </Link>
            <Link href="/about" className="mx-2 font-serif text-white">
              About
            </Link>
            <Link href="/more" className="mx-2 font-serif text-white">
              More
            </Link>
          </div>
          <div className="flex items-center">
            <AuthButtons />
          </div>
        </div>
        {showMenu && (
          <div className="bg-gray-800 py-2 md:hidden">
            <Link href="/market" className="block px-4 py-2 font-serif text-white">
              Market
            </Link>
            <Link href="/about" className="block px-4 py-2 font-serif text-white">
              About
            </Link>
            <Link href="/more" className="block px-4 py-2 font-serif text-white">
              More
            </Link>
          </div>
        )}
      </div>
      <div className="mt-16 flex flex-col items-center md:mt-20 md:flex-row">
        <section className="flex-1 md:ml-20 lg:ml-52">
          <div className="text-center font-bold md:text-left">
            <h1 className="mb-3 font-serif text-2xl text-white md:text-4xl">
              Made in India
            </h1>
            <h2 className="mb-1 font-serif text-5xl text-white md:text-7xl">
              CRYPTO APP
            </h2>
            <p className="mb-3 font-serif text-2xl text-white md:text-4xl">
              All in one solution
            </p>
            <div className="mt-8 flex flex-col items-center md:flex-row md:items-start">
              <input placeholder="Email" className="mb-2 w-full rounded p-2 md:mb-0 md:mr-2 md:w-64" />
              <button onClick={() => { router.push("/signup"); }} className="w-full md:w-48 rounded-lg bg-green-500 px-4 py-2 font-bold text-black transition duration-300 hover:bg-green-600 focus:ring-4 focus:ring-green-300">Sign up</button>
            </div>
          </div>
        </section>
        <div className="md:w-1/3 flex justify-center md:justify-end">
          <div className="m-10">
            <Image src="/phone1.png" alt="phone image" width={620} height={640} />
          </div>
        </div>
      </div>
    </>
  );
}

