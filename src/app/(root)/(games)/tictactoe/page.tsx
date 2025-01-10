"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { io } from "socket.io-client";

// Declare the type for the player
type Player = "X" | "O" | null;

const TicTacToe = () => {
  const [board, setBoard] = useState<Player[]>(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<"X" | "O">("X");
  const [gameStatus, setGameStatus] = useState<string>("Waiting for players...");
  const [roomId, setRoomId] = useState<string | null>(null);
  const [socket, setSocket] = useState<any>(null); // Socket.io client

  // Create or join a room when the component mounts
  useEffect(() => {
    // Initialize Socket.IO client and handle connections
    const socketInstance = io("http://localhost:3001", { path: "/api/socket" });
    setSocket(socketInstance);

    // Handle room updates
    socketInstance.on("roomUpdate", (message: string) => {
      setGameStatus(message);
    });

    // Handle game actions (like moves)
    socketInstance.on("gameAction", (action: { move: number; player: "X" | "O" }) => {
      const newBoard = [...board];
      newBoard[action.move] = action.player;
      setBoard(newBoard);
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    });

    // Cleanup socket connection on unmount
    return () => {
      socketInstance.disconnect();
    };
  }, []);

  // Create a new game room
  const createRoom = () => {
    const room = generateRoomId();
    setRoomId(room);
    socket.emit("joinRoom", { roomId: room, userId: "Player1" });
    setGameStatus("Waiting for Player 2...");
  };

  // Join an existing game room
  const joinRoom = (existingRoomId: string) => {
    setRoomId(existingRoomId);
    socket.emit("joinRoom", { roomId: existingRoomId, userId: "Player2" });
    setGameStatus("Waiting for Player 1...");
  };

  // Handle player clicks
  const handleClick = (index: number) => {
    if (board[index] || calculateWinner(board)) return;

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    // Emit game action
    socket.emit("gameAction", { roomId, action: { move: index, player: currentPlayer } });

    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  };

  const winner = calculateWinner(board);
  const status = winner ? `Winner: ${winner}` : board.every(Boolean) ? "Draw!" : `Next player: ${currentPlayer}`;

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex flex-col items-center">
      <div className="mb-4 text-xl font-bold">{status}</div>

      {!roomId && (
        <div className="mb-4">
          <button onClick={createRoom} className="bg-blue-500 text-white px-4 py-2 rounded-lg">
            Create New Game
          </button>
          <input type="text" placeholder="Enter room ID" onChange={(e) => joinRoom(e.target.value)} className="mt-2 px-4 py-2 rounded-lg border" />
        </div>
      )}

      {gameStatus && <div className="text-lg mb-4">{gameStatus}</div>}

      <div className="grid grid-cols-3 gap-2">
        {board.map((value, index) => (
          <motion.button
            key={index}
            className="w-20 h-20 bg-gray-700 text-4xl font-bold flex items-center justify-center rounded-lg"
            onClick={() => handleClick(index)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {value}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

function calculateWinner(squares: Player[]): Player {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

// Helper function to generate a unique room ID
function generateRoomId(): string {
  return Math.random().toString(36).substr(2, 9);
}

export default TicTacToe;
