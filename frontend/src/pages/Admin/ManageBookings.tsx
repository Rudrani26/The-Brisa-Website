import { useState } from 'react';
import { format } from 'date-fns';

export default function ManageBookings() {
    const [bookings, setBookings] = useState([
        {
            id: 1,
            guestName: 'John Doe',
            checkIn: '2025-07-01',
            checkOut: '2025-07-05',
            room: 'Deluxe Suite',
            status: 'Confirmed',
        },
        {
            id: 2,
            guestName: 'Jane Smith',
            checkIn: '2025-07-10',
            checkOut: '2025-07-12',
            room: 'Standard Room',
            status: 'Pending',
        },
    ]);

    const [newBooking, setNewBooking] = useState({
        guestName: '',
        room: '',
        checkIn: '',
        checkOut: '',
        status: 'Pending',
    });

    const handleStatusChange = (id: number, newStatus: string) => {
        setBookings(prev => prev.map(b => b.id === id ? { ...b, status: newStatus } : b));
    };

    const handleCreateBill = (id: number) => {
        alert(`Generating bill for booking ID ${id}`);
    };

    const handleAddBooking = () => {
        const id = Date.now();
        setBookings(prev => [...prev, { ...newBooking, id }]);
        setNewBooking({ guestName: '', room: '', checkIn: '', checkOut: '', status: 'Pending' });
    };

    return (
        <div className="pt-24 px-4 min-h-screen bg-gray-100 py-5">
            <div className="max-w-5xl mx-auto bg-white shadow-md rounded p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Manage Bookings</h3>

                {/* Add Booking Form */}
                <div className="mb-8">
                    <h4 className="text-lg font-semibold text-gray-700 mb-4">Add New Booking</h4>
                    <div className="space-y-3">
                        <input
                            type="text"
                            placeholder="Guest Name"
                            value={newBooking.guestName}
                            onChange={e => setNewBooking({ ...newBooking, guestName: e.target.value })}
                            className="w-full border px-3 py-2 rounded"
                        />
                        <input
                            type="text"
                            placeholder="Room"
                            value={newBooking.room}
                            onChange={e => setNewBooking({ ...newBooking, room: e.target.value })}
                            className="w-full border px-3 py-2 rounded"
                        />
                        <input
                            type="date"
                            value={newBooking.checkIn}
                            onChange={e => setNewBooking({ ...newBooking, checkIn: e.target.value })}
                            className="w-full border px-3 py-2 rounded"
                        />
                        <input
                            type="date"
                            value={newBooking.checkOut}
                            onChange={e => setNewBooking({ ...newBooking, checkOut: e.target.value })}
                            className="w-full border px-3 py-2 rounded"
                        />
                        <select
                            value={newBooking.status}
                            onChange={e => setNewBooking({ ...newBooking, status: e.target.value })}
                            className="w-full border px-3 py-2 rounded"
                        >
                            <option value="Pending">Pending</option>
                            <option value="Confirmed">Confirmed</option>
                            <option value="Cancelled">Cancelled</option>
                        </select>
                        <button
                            onClick={handleAddBooking}
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
                        >
                            Add Booking
                        </button>
                    </div>
                </div>

                {/* Bookings Table */}
                <div className="overflow-x-auto">
                    <table className="w-full table-auto border-collapse">
                        <thead>
                            <tr className="bg-gray-200 text-gray-700">
                                <th className="p-3 border">Booking ID</th>
                                <th className="p-3 border">Guest Name</th>
                                <th className="p-3 border">Room</th>
                                <th className="p-3 border">Check-In</th>
                                <th className="p-3 border">Check-Out</th>
                                <th className="p-3 border">Status</th>
                                <th className="p-3 border">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookings.map(booking => (
                                <tr key={booking.id} className="text-center border-t">
                                    <td className="p-3 border">{booking.id}</td>
                                    <td className="p-3 border">{booking.guestName}</td>
                                    <td className="p-3 border">{booking.room}</td>
                                    <td className="p-3 border">{format(new Date(booking.checkIn), 'd MMM yyyy')}</td>
                                    <td className="p-3 border">{format(new Date(booking.checkOut), 'd MMM yyyy')}</td>
                                    <td className="p-3 border">
                                        <select
                                            value={booking.status}
                                            onChange={(e) => handleStatusChange(booking.id, e.target.value)}
                                            className="border rounded px-2 py-1"
                                        >
                                            <option value="Pending">Pending</option>
                                            <option value="Confirmed">Confirmed</option>
                                            <option value="Cancelled">Cancelled</option>
                                        </select>
                                    </td>
                                    <td className="p-3 border">
                                        <button
                                            onClick={() => handleCreateBill(booking.id)}
                                            className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded"
                                        >
                                            Create Bill
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            {bookings.length === 0 && (
                                <tr>
                                    <td colSpan={6} className="text-center text-gray-500 py-4">
                                        No bookings available.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
