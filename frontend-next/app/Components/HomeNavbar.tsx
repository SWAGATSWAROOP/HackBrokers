"use client"
import Link from "next/link";
import AuthButtons from "./forms/authbutton";
import { useRouter } from "next/navigation";

export default function HomeNavbar() {
    const router=useRouter();
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
      <section className="w-full flex flex-col items-start clear-right p-4 md:ml-52">
      <div className="font-bold">
        <h1 className="mb-3 font-serif text-2xl md:text-4xl text-white">
          Made in India
        </h1>
        <h2 className="mb-1 font-serif text-5xl md:text-7xl text-white">
          CRYPTO APP
        </h2>
        <p className="mb-3 font-serif text-2xl md:text-4xl text-white">
          All in one solution
        </p>
        <div className="mt-8 flex flex-col md:flex-row items-start md:items-center">
          <input
            type="email"
            placeholder="@email"
            className="mb-2 md:mb-0 md:mr-2 w-full md:w-64 rounded p-2"
          />
          <button
            onClick={() => {
              router.push("/signup");
            }}
            className="w-full md:w-auto rounded bg-green-400 px-4 py-2 text-black"
          >
            Sign up
          </button>
        </div>
      </div>
    </section>  
    import Image from 'next/image';

<Image src="/phone1.png" alt="phone image" width={320} height={240} className="float-right" />

    </>
  );
}
