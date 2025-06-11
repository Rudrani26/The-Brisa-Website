import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8080/api',
});

export const fetchRooms = () => API.get('/rooms');
export const createBooking = (data: any) => API.post('/bookings', data);
export const fetchBookings = () => API.get('/bookings');
export const fetchBookingById = (id: number) => API.get(`/bookings/${id}`);