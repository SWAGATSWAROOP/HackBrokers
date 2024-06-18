import { ReactNode } from "react";
import { FC } from "react";
import "../globals.css";
import Navbar from "../Components/navbar";

interface Auth_LayoutProps {
  children: ReactNode;
}

const Auth_Layout: FC<Auth_LayoutProps> = ({ children }) => {
  return (
    <>
        <Navbar />
        <div className="flex h-screen flex-col justify-center items-center ">
        <div className="rounded-md bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-500 from-10% p-16 items-center">
          {children}</div>
        </div>
    </>
  );
};

export default Auth_Layout;
