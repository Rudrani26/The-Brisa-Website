import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();

        // Dummy credentials
        const validUsername = 'admin';
        const validPassword = 'password123';

        if (username === validUsername && password === validPassword) {
            setIsLoggedIn(true);
            setError('');
        } else {
            setError('Invalid username or password.');
        }
    };

    return (
        <div className="pt-24 min-h-screen bg-gray-100 flex justify-center items-center">
            <div className="w-full max-w-md p-8 bg-white shadow-md rounded">
                {!isLoggedIn ? (
                    <>
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Admin Login</h2>
                        <form onSubmit={handleLogin} className="space-y-4">
                            <div>
                                <label className="block text-gray-700 font-medium mb-1">Username</label>
                                <input
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium mb-1">Password</label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    required
                                />
                            </div>
                            {error && <p className="text-red-500 text-sm">{error}</p>}
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition"
                            >
                                Login
                            </button>
                        </form>
                    </>
                ) : (
                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-green-700 mb-4">Welcome, Admin!</h2>
                        <p className="mb-4">You have successfully logged in.</p>
                        <div className="flex flex-col gap-4">
                            <button
                                onClick={() => navigate('/admin/manage-bookings')}
                                className="w-full p-3 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition"
                            >
                                Manage Bookings
                            </button>
                            <button
                                onClick={() => alert("Navigating to Manage Rooms...")}
                                className="w-full p-3 bg-green-500 text-white font-semibold rounded hover:bg-green-600 transition"
                            >
                                Manage Rooms
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
