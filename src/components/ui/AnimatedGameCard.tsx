"use client";
import Link from "next/link";

interface GameCardProps {
  game: { id: string; name: string; icon: string };
}

export default function AnimatedGameCard(props: Readonly<GameCardProps>) {
  const { game } = props;

  return (
    <Link href={"/api/auth/signin"}>
      <div className="bg-white/30 p-6 rounded-lg hover:shadow-xl cursor-pointer border border-transparent hover:border-white flex flex-col items-center justify-center">
        <div className="text-4xl mb-2">{game.icon}</div>
        <h2 className="text-xl font-bold text-primary">{game.name}</h2>
      </div>
    </Link>
  );
}
