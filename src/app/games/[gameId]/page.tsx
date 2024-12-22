import dynamic from 'next/dynamic';
import Logo from '../../../components/ui/Logo';
import ThemeToggle from '../../../components/ui/ThemeToggle';
import ColorPicker from '../../../components/ui/ColorPicker';

const games = {
  tictactoe: dynamic(() => import('@/components/games/tictactoe/TicTacToe'), { ssr: false }),
  chess: dynamic(() => import('@/components/games/chess/Chess'), { ssr: false }),
  fourinrow: dynamic(() => import('@/components/games/fourinrow/FourInRow'), { ssr: false }),
  checkers: dynamic(() => import('@/components/games/checkers/Checkers'), { ssr: false }),
  connectfour: dynamic(() => import('@/components/games/connectfour/ConnectFour'), { ssr: false }),
};

export default function GamePage({ params }: { params: { gameId: string } }) {
  const GameComponent = games[params.gameId as keyof typeof games];

  if (!GameComponent) {
    return <div>Game not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8 bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <Logo />
        <h1
          className="text-4xl font-bold capitalize text-primary">{params.gameId.replace(/([A-Z])/g, ' $1').trim()}</h1>
        <div className="flex space-x-2">
          <ThemeToggle />
          <ColorPicker />
        </div>
      </div>
      <GameComponent />
    </div>
  );
}

