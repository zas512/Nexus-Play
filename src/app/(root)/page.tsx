import GameGrid from "@/components/ui/GameGrid";
import Logo from "@/components/ui/Logo";

export default function Home() {
  return (
    <div className="flex h-[calc(100vh-5rem)] z-20 relative flex-col items-center justify-center">
      <div className="bg-white/10 backdrop-blur-3xl rounded-2xl p-6 flex flex-col items-center justify-center border border-transparent hover:border-white">
        <Logo />
        <GameGrid />
      </div>
    </div>
  );
}
