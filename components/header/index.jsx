import Link from "next/link";
import React from "react";

const Headers = () => {
  return (
    <div className="bg-[#00ff62] p-4 w-[300px] h-[100vh]">
      <h2 className="text-[20px] font-normal">Dashboard</h2>

      <div className="flex   items-center pt-[30px] flex-col  justify-start gap-4">
        <Link href={"/"}>Home</Link>
        <Link href={"about"}>About</Link>
        <Link href={"contact"}>Contact</Link>
        <Link href={"user"}>User</Link>
      </div>
    </div>
  );
};

export default Headers;
