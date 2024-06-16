"use client";
import Link from "next/link";
import AuthButtons from "./forms/authbutton";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function HomeNavbar() {
  const router = useRouter();
  return (
    <>
      <div className="fixed left-0 right-0 top-0 z-10 border-b bg-gray-800 py-2">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/">
              <a className="flex items-center gap-x-2 font-serif text-xl font-bold text-yellow-400">
                🅑🅔 CRYPTOxAI
              </a>
            </Link>
          </div>
          <div className="flex items-center gap-x-4">
            <Link href="/market">
              <a className="text-white">Market</a>
            </Link>
            <Link href="/">
              <a className="text-white">More</a>
            </Link>
            <Link href="/">
              <a className="text-white">About</a>
            </Link>
          </div>
          <div className="flex items-end">
            <AuthButtons />
          </div>
        </div>
      </div>
      <section className="clear-right flex w-full flex-col items-start p-4 md:ml-52">
        <div className="font-bold">
          <h1 className="mb-3 font-serif text-2xl text-white md:text-4xl">
            Made in India
          </h1>
          <h2 className="mb-1 font-serif text-5xl text-white md:text-7xl">
            CRYPTO APP
          </h2>
          <p className="mb-3 font-serif text-2xl text-white md:text-4xl">
            All in one solution
          </p>
          <div className="mt-8 flex flex-col items-start md:flex-row md:items-center">
            <input
              type="email"
              placeholder="@email"
              className="mb-2 w-full rounded p-2 md:mb-0 md:mr-2 md:w-64"
            />
            <button
              onClick={() => {
                router.push("/signup");
              }}
              className="w-full rounded bg-green-400 px-4 py-2 text-black md:w-auto"
            >
              Sign up
            </button>
          </div>
        </div>
      </section>
      import Image from 'next/image';
      <Image
        src="/phone1.png"
        alt="phone image"
        width={320}
        height={240}
        className="float-right"
      />
    </>
  );
}
