import { Play } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const play = Play({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "NexusPlay",
  description: "Play various games online or locally with NexusPlay",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${play.className}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
