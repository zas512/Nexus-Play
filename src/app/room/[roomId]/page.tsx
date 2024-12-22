'use client';

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
// import { createClient } from '@supabase/supabase-js';

// const supabase = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL!,
//   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
// );

export default function Room() {
  const { roomId } = useParams();
  const [players, setPlayers] = useState<string[]>([]);
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    const channel = supabase.channel(`room:${roomId}`);

    channel
      .on('presence', { event: 'sync' }, () => {
        const newState = channel.presenceState();
        setPlayers(Object.keys(newState));
      })
      .on('broadcast', { event: 'message' }, ({ payload }) => {
        setMessages((prev) => [...prev, payload.message]);
      })
      .subscribe(async (status) => {
        if (status === 'SUBSCRIBED') {
          await channel.track({ user: 'userId' });
        }
      });

    return () => {
      supabase.removeChannel(channel);
    };
  }, [roomId]);

  const sendMessage = (message: string) => {
    supabase.channel(`room:${roomId}`).send({
      type: 'broadcast',
      event: 'message',
      payload: { message },
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Room: {roomId}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Players</h2>
          <ul>
            {players.map((player) => (
              <li key={player}>{player}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Chat</h2>
          <div className="h-64 overflow-y-auto border p-4 mb-4">
            {messages.map((message, index) => (
              <div key={index}>{message}</div>
            ))}
          </div>
          <input
            type="text"
            placeholder="Type a message"
            className="w-full p-2 border rounded"
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                sendMessage(e.currentTarget.value);
                e.currentTarget.value = '';
              }
            }}
          />
        </div>
      </div>
    </div>
  );
}

