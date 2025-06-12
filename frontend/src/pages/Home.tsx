import React from 'react';

const Home: React.FC = () => {
    return (
        <section className="hero h-screen flex items-center justify-center pt-16">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-white heading mb-4">
                    Experience Paradise on the Shore
                </h1>
                <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
                    Nestled away from the hustle and bustle, we offer a tranquil atmosphere with nature walk and exploring nearby historical forts, monuments, temples and beaches. It's perfect for a peaceful getaway with family and friends.
                </p>
            </div>
        </section>
    );
};

export default Home;
