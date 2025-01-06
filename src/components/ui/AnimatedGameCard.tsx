import { StaticImageData } from 'next/image';
import Image from 'next/image';
import Link from 'next/link';

interface GameCardProps {
  game: { id: number; name: string; icon: StaticImageData, href: string };
}

export default function AnimatedGameCard(props: Readonly<GameCardProps>) {
  const { game } = props;

  return (
    <Link href={game.href}
      className="bg-white/30 p-6 rounded-lg hover:shadow-xl cursor-pointer border border-transparent hover:border-white
      flex flex-col items-center justify-center">
      <Image src={game.icon} alt={''} width={60} className="text-4xl mb-2" />
      <h2 className="text-xl font-bold text-primary">{game.name}</h2>
    </Link>
  )
    ;
}
