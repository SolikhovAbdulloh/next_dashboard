import Link from "next/link";
import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { FcAbout } from "react-icons/fc";
import {  FaUser } from "react-icons/fa";
import { FcContacts } from "react-icons/fc";

const Headers = () => {
  return (
    <div className="bg-[#00ff62] p-4 w-[300px] h-[100vh]">
      <h2 className="text-[20px] font-normal">Dashboard</h2>

      <div className="flex   items-start pt-[30px] flex-col  justify-start gap-4">
        <Link className="flex items-center gap-3" href={"/"}>
          <AiOutlineHome />
          Home
        </Link>
        <Link className="flex items-center gap-3" href={"about"}>
          <FcAbout />
          About
        </Link>
        <Link className="flex items-center gap-3" href={"contact"}>
          <FcContacts />
          Contact
        </Link>
        <Link className="flex items-center gap-3" href={"user"}>
          <FaUser />
          User
        </Link>
      </div>
    </div>
  );
};

export default Headers;
