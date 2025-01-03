import AnimatedGameCard from "./AnimatedGameCard";

const games = [
  { id: "tictactoe", name: "Tic Tac Toe", icon: "❌⭕" },
  { id: "chess", name: "Chess", icon: "♟️" },
  { id: "fourinrow", name: "Four in a Row", icon: "🔴🟡" },
  { id: "checkers", name: "Checkers", icon: "🔴⚫" },
  { id: "connectfour", name: "Connect Four", icon: "🔵🔴" },
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
