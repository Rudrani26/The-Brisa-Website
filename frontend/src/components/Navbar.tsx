import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
    <nav style={{ padding: '1rem', backgroundColor: '#0ea5e9' }}>
        <Link to="/" style={{ marginRight: '1rem', color: 'white' }}>Home</Link>
        <Link to="/booking" style={{ marginRight: '1rem', color: 'white' }}>Booking</Link>
        <Link to="/gallery" style={{ marginRight: '1rem', color: 'white' }}>Gallery</Link>
        <Link to="/contact" style={{ color: 'white' }}>Contact</Link>
    </nav>
);

export default Navbar;
