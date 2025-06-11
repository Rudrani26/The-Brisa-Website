import { motion } from 'framer-motion'

const amenities = [
    {
        icon: '😎',
        title: 'Infinity Pool',
        description:
            'Our stunning infinity pool appears to merge with the ocean horizon, offering breathtaking views while you swim or relax poolside.',
    },
    {
        icon: '💆',
        title: 'Luxury Spa',
        description:
            'Rejuvenate your body and mind with our range of spa treatments, including massages, facials, and holistic therapies.',
    },
    {
        icon: '🍽️',
        title: 'Beachfront Dining',
        description:
            'Experience exquisite cuisine with ocean views at our multiple restaurants offering local and international dishes.',
    },
    {
        icon: '🌊',
        title: 'Water Sports',
        description:
            'Enjoy a variety of water activities including snorkeling, kayaking, paddleboarding, and jet skiing right from our private beach.',
    },
    {
        icon: '🏋️',
        title: 'Fitness Center',
        description:
            'Stay active in our state-of-the-art fitness center featuring modern equipment and daily yoga classes with ocean views.',
    },
    {
        icon: '🎉',
        title: 'Kids Club',
        description:
            'Our supervised kids club offers fun activities and adventures for children, giving parents time to relax and enjoy.',
    },
]

export default function Amenities() {
    return (
        <section id="amenities" className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-blue-800 mb-4">
                        Villa Amenities
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Indulge in our world-class amenities designed to make your stay
                        unforgettable.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {amenities.map((amenity, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="bg-blue-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-2xl">
                                    {amenity.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    {amenity.title}
                                </h3>
                                <p className="text-gray-600 text-sm">{amenity.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
