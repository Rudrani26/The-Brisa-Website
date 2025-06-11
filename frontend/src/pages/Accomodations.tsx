import { Star } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Room } from '../types'

export const rooms: Room[] = [
  {
    id: 1,
    title: 'Luxury Balcony Room',
    description: 'Sea-facing room with a private balcony. Perfect for couples.',
    image: ["url1.jpg", "url2.jpg", "url3.jpg"],
    label: 'Ocean View',
    features: ['2 Adults', 'Private Balcony', '40m²'],
    weekdayPrice: 3000,
    weekendPrice: 3500,
    rating: 5.0,
    reviews: 112,
  },
  {
    id: 2,
    title: 'Deluxe Room',
    description: 'Cozy room for couples, with all essential amenities.',
    image: '/room2.jpg',
    label: 'Standard',
    features: ['2 Adults', 'Basic Amenities', '30m²'],
    weekdayPrice: 2000,
    weekendPrice: 2500,
    rating: 4.8,
    reviews: 96,
  },
  {
    id: 3,
    title: 'Majestic 1 BHK',
    description: 'Spacious 1 BHK ideal for families or small groups.',
    image: '/room3.jpg',
    label: 'Premium',
    features: ['4 Adults', 'Living Area', '60m²'],
    weekdayPrice: 4000,
    weekendPrice: 4500,
    rating: 5.0,
    reviews: 85,
  },
  {
    id: 4,
    title: 'Royal 2 BHK',
    description: 'Luxurious 2 BHK suite with living room and beach view.',
    image: '/room4.jpg',
    label: 'Premium',
    features: ['6 Adults', 'Living Room', '85m²'],
    weekdayPrice: 5000,
    weekendPrice: 6000,
    rating: 5.0,
    reviews: 78,
  },
  {
    id: 5,
    title: 'Full Villa (7 BHK)',
    description: 'Entire villa with 7 bedrooms, kitchen, and hall. Great for groups.',
    image: '/room5.jpg',
    label: 'Group Booking',
    features: ['20 Adults', 'Private Villa', '240m²'],
    weekdayPrice: 23000,
    weekendPrice: 25000,
    rating: 4.9,
    reviews: 60,
  },
]

export default function Accommodations() {
  return (
    <section className="px-4 py-12 md:px-16 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Book Your Stay
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {rooms.map((room) => (
          <motion.div
            key={room.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden border"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <img
                src={Array.isArray(room.image) ? room.image[0] : room.image}
                alt={room.title}
                className="w-full h-40 object-cover"
              />
              <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-medium">
                {room.label}
              </span>
            </div>
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-1">{room.title}</h3>
              <div className="flex items-center text-sm text-yellow-500 mb-2">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star key={i} size={16} fill="currentColor" className="mr-1" />
                ))}
                <span className="text-gray-600 ml-2">{room.rating.toFixed(1)} ({room.reviews} reviews)</span>
              </div>

              {/* Feature Badges */}
              <div className="flex flex-wrap gap-2 mb-3">
                {room.features.map((feature, i) => (
                  <span key={i} className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                    {feature}
                  </span>
                ))}
              </div>

              <p className="text-sm text-gray-600 mb-4">{room.description}</p>

              <div className="flex items-center justify-between">
                <div className="text-lg font-bold text-blue-700">
                  ₹{room.weekdayPrice} <span className="text-sm font-medium text-gray-500">/night (Weekdays Mon-Fri)</span>
                </div>
                <Link to={`/book/${room.id}`}>
                  <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded-md hover:bg-blue-700">
                    Book Now
                  </button>
                </Link>
              </div>
              <div className="text-lg font-bold text-blue-700">
                ₹{room.weekendPrice} <span className="text-sm font-medium text-gray-500">/night (Weekends Sat-Sun)</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
