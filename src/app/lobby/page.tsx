import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';
import GameList from './components/GameList';
import RoomCreation from './components/RoomCreation';

export default async function Lobby() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/api/auth/signin');
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Game Lobby</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <GameList />
        <RoomCreation />
      </div>
    </div>
  );
}

