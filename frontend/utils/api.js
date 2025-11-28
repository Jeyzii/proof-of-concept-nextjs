import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

const api = axios.create({ baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api' });

export const useBookings = (userId) => useQuery(['bookings', userId], async () => {
  const { data } = await api.get(`/bookings?userId=${userId}`);
  return data;
});

export const useSendMessage = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async ({ bookingId, content }) => api.post('/messages', { bookingId, content }),
    { onSuccess: (_, variables) => queryClient.invalidateQueries(['messages', variables.bookingId]) }
  );
};

export default api;
