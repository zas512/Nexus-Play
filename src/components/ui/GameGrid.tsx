import AnimatedGameCard from './AnimatedGameCard';
import Chess from '@/assets/chess.png';
import Ludo from '@/assets/ludo.png';
import TicTac from '@/assets/tictac.png';

const games = [
  { id: 1, name: 'Tic Tac Toe', icon: TicTac, href: '/tictactoe' },
  { id: 2, name: 'Chess', icon: Chess, href: '/chess' },
  { id: 3, name: 'Ludo', icon: Ludo, href: '/ludo' },
];

export default async function GameGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
      {games.map((game, index) => (
        <AnimatedGameCard key={game.id} game={game} />
      ))}
    </div>
  );
}
