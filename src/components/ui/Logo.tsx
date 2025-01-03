"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import logo from "@/assets/logo.png";

export default function Logo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 10,
      }}
    >
      <Image src={logo} alt="NexusPlay" width={200} height={50} />
    </motion.div>
  );
}
