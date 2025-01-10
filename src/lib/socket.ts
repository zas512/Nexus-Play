import { io, Socket } from "socket.io-client";

let socket: Socket | null = null;

export const initializeSocket = () => {
  if (!socket) {
    socket = io("http://localhost:3000", { path: "/api/socket" });
  }
  return socket;
};

export const joinRoom = (roomId: string, userId: string) => {
  if (!socket) throw new Error("Socket not initialized. Call initializeSocket first.");
  socket.emit("joinRoom", { roomId, userId });
};

export const sendGameAction = (roomId: string, action: any) => {
  if (!socket) throw new Error("Socket not initialized. Call initializeSocket first.");
  socket.emit("gameAction", { roomId, action });
};

export const listenForEvents = (event: string, callback: (data: any) => void) => {
  if (!socket) throw new Error("Socket not initialized. Call initializeSocket first.");
  socket.on(event, callback);
};

export const leaveRoom = (roomId: string) => {
  if (!socket) throw new Error("Socket not initialized. Call initializeSocket first.");
  socket.emit("leaveRoom", { roomId });
};
