"use client";
import { useSession, signIn } from "next-auth/react";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";

export default function SignInButton() {
  const { data: session } = useSession();
  if (session) return null;
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      onClick={() => signIn("google", { callbackUrl: "/" })}
      className="flex h-12 animate-shimmer items-center justify-center rounded-md bg-[linear-gradient(110deg,#2a2a2a,45%,#60DD2A,55%,#2a2a2a)] bg-[length:200%_100%] px-6 font-medium transition-colors outline-none"
    >
      <FcGoogle className="mr-2 size-6" />
      Sign In
    </motion.button>
  );
}
