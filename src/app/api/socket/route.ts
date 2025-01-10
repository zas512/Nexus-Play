import type { NextApiRequest, NextApiResponse } from "next";
import type { Server as HTTPServer } from "http";
import type { Socket as NetSocket } from "net";
import type { Server as IOServer } from "socket.io";
import { Server as SocketIOServer } from "socket.io";

interface ExtendedNetServer extends HTTPServer {
  io?: IOServer;
}

interface ExtendedNetSocket extends NetSocket {
  server: ExtendedNetServer;
}

type ExtendedResponse = NextApiResponse & {
  socket: ExtendedNetSocket;
};

export default function handler(req: NextApiRequest, res: ExtendedResponse) {
  if (!res.socket.server.io) {
    console.log("Initializing Socket.IO server...");
    const io = new SocketIOServer(res.socket.server, {
      path: "/api/socket",
      cors: {
        origin: ["http://localhost:3000", "http://localhost:3001"],
        methods: ["GET", "POST"]
      }
    });
    io.on("connection", (socket) => {
      console.log("Client connected:", socket.id);
      socket.on("joinRoom", (roomId) => {
        socket.join(roomId);
        console.log(`Client ${socket.id} joined room ${roomId}`);
      });
      socket.on("leaveRoom", (roomId) => {
        socket.leave(roomId);
        console.log(`Client ${socket.id} left room ${roomId}`);
      });
      socket.on("gameAction", (data) => {
        const { roomId, action } = data;
        socket.to(roomId).emit("gameAction", action);
        console.log(`Action in room ${roomId}:`, action);
      });
      socket.on("disconnect", () => {
        console.log("Client disconnected:", socket.id);
      });
    });
    res.socket.server.io = io;
  } else {
    console.log("Socket.IO server is already running.");
  }
  res.status(200).end();
}
