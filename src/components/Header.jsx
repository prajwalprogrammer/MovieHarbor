import React from "react";
import MenuItems from "./MenuItems";
import { AiFillHome } from "react-icons/ai";
import { BsInfoCircleFill } from "react-icons/bs";
import Link from "next/link";
import DarkModeSwitch from "./DarkModeSwitch";
export default function Header() {
  return (
    <div className="flex justify-between max-w-6xl sm:mx-auto mx-2 items-center py-6">
      <div className="flex">
        <MenuItems title="HOME" address="/" Icon={AiFillHome} />
        <MenuItems title="ABOUT" address="/about" Icon={BsInfoCircleFill} />
      </div>
      <div className="flex items-center space-x-3">
        <DarkModeSwitch/>
        <Link href="/">
          <h1 className="text-2xl">
            <span className="bg-amber-500 font-bold py-1 px-2 rounded-lg mr-2">
              Movie
            </span>
            <span className="hidden sm:inline text-xl">Harbor</span>
          </h1>
        </Link>
      </div>
    </div>
  );
}
