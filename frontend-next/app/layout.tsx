import type { Metadata } from "next";
import "./globals.css";
import { getServerSession } from "next-auth";
import { Next_Auth_Config } from "./lib/auth";
import { Toaster } from "./Components/ui/toaster";
import Provider from "./lib/Provider";

export const metadata: Metadata = {
  title: "HackBrokers",
  description: "Your all in one crypto app",
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
      <body className="bg-gradient-to-r from-black to-[#2e1065] from-50% font-roboto">
        <main className=" flex h-screen flex-col ">
          <Provider session={session}>
            <div className="">{children}</div>
          </Provider>
          <Toaster />
        </main>
      </body>
    </html>
  );
}
