"use client";

import { SessionProvider } from "next-auth/react";
import { useState, useEffect } from "react";

export function Providers({ children }: Readonly<{ children: React.ReactNode }>) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return <SessionProvider>{children}</SessionProvider>;
}
