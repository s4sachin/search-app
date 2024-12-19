import Link from "next/link";
import React from "react";
import { TbGridDots } from "react-icons/tb";
import { ImLab } from "react-icons/im";

const HomeHeader = () => {
  return (
    <header className="flex justify-end p-3 text-sm">
      <div className="flex space-x-4 items-center">
        <Link href={"https://mail.google.com"} className="hover:underline text-sm">
          Gmail
        </Link>
        <Link href={"https://image.google.com"} className="hover:underline text-sm">
          Images
        </Link>
        <ImLab className="bg-transparent hover:bg-gray-200 rounded-full text-4xl p-2"/>
        <TbGridDots className="bg-transparent hover:bg-gray-200 rounded-full text-4xl p-2" />
        <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:brightness-105 hover:shadow-md transition-shadow">
          Sign In
        </button>
      </div>
    </header>
  );
};

export default HomeHeader;
