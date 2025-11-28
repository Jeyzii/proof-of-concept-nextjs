import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import api, { useSendMessage } from '../../utils/api';
import { useQuery } from '@tanstack/react-query';

export default function BookingDetail() {
  const router = useRouter();
  const { id } = router.query;

  const { data: booking, isLoading: bookingLoading } = useQuery(['booking', id], async () => {
    const { data } = await api.get(`/bookings/${id}`);
    return data;
  });

  const { data: messages = [], refetch: refetchMessages } = useQuery(['messages', id], async () => {
    const { data } = await api.get(`/messages/${id}`);
    return data;
  });

  const [msgText, setMsgText] = useState('');
  const sendMessageMutation = useSendMessage();

  const handleSend = async () => {
    if (!msgText) return;
    await sendMessageMutation.mutateAsync({ bookingId: id, content: msgText });
    setMsgText('');
    refetchMessages();
  };

  if (bookingLoading) return <p className="text-center mt-10">Loading booking...</p>;

  return (
    <div className="max-w-3xl mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-2">Booking: {booking.bookingId}</h1>
      <p className="mb-4 text-gray-700">{booking.details}</p>

      <h2 className="font-semibold mb-2">Attachments</h2>
      <div className="mb-4">
        {booking.attachments.length > 0 ? booking.attachments.map((a, i) => (
          <a key={i} href={a} target="_blank" className="block text-blue-600 underline">{a}</a>
        )) : <p>No attachments</p>}
      </div>

      <h2 className="font-semibold mb-2">Messages</h2>
      <div className="mb-4 border p-3 rounded h-48 overflow-y-auto bg-gray-50">
        {messages.length > 0 ? messages.map(m => (
          <p key={m._id} className="mb-2">{m.content}</p>
        )) : <p>No messages yet</p>}
      </div>

      <div className="flex gap-2">
        <input
          className="flex-1 border rounded px-2 py-1"
          placeholder="Type your message"
          value={msgText}
          onChange={(e) => setMsgText(e.target.value)}
        />
        <button
          onClick={handleSend}
          className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
        >
          Send
        </button>
      </div>
    </div>
  );
}
