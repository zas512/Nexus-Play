"use client";

import { useSession, signIn } from "next-auth/react";
import { motion } from "framer-motion";

export default function SignInButton() {
  const { data: session } = useSession();

  if (session) return null;

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      onClick={() => signIn("google", { callbackUrl: "/" })}
      className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
    >
      Sign In to Play
    </motion.button>
  );
}
