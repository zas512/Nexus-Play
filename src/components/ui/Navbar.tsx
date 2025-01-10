"use client";
import React from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import logo from "@/assets/logo2.png";
import Button from "@/components/ui/SignInButton";
import { p } from "framer-motion/client";

const Navbar = () => {
  const { data: session } = useSession();
  return (
    <div className="flex items-center justify-between p-4">
      <Image src={logo} alt="Logo" width={100} height={40} />
      {session?.user ? (
        <div className="flex items-center space-x-4">
          <span className="text-xl flex gap-2">
            <p className="text-gray-300">Welcome,</p>
            <p>{session.user.name}</p>
          </span>
          {session.user.image && <Image src={session.user.image} alt={""} width={35} height={35} className="rounded-full" />}
        </div>
      ) : (
        <div className="flex items-center space-x-4 z-30">
          <Button />
        </div>
      )}
    </div>
  );
};

export default Navbar;
