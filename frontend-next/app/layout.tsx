import type { Metadata } from "next";
import "./globals.css";
import { getServerSession } from "next-auth";
import { Next_Auth_Config } from "./lib/auth";
import { Toaster } from "./Components/ui/toaster";
import Provider from "./lib/Provider";

export const metadata: Metadata = {
  title: "HackBrokers",
  description: "Buy and Sell Crypto Using",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(Next_Auth_Config);
  console.log(session);
  return (
    <html lang="en">
      <body className="bg-slate-200">
        <main className=" flex h-screen flex-col items-center justify-center ">
          <Provider session={session}>
            <div className="">{children}</div>
          </Provider>
          <Toaster />
        </main>
      </body>
    </html>
  );
}
