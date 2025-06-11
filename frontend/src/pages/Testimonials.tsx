import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
    {
        name: "Sarah Johnson",
        text: `"Our stay at Azure Shores was absolutely magical. The room had the most breathtaking ocean view I've ever experienced. The staff went above and beyond to make our anniversary special. We'll definitely be back!"`,
        rating: 5,
    },
    {
        name: "Michael Rodriguez",
        text: `"The Family Beach Villa was perfect for our vacation with kids. Having our own pool while still being steps from the beach was incredible. The kids club activities kept our children entertained while we enjoyed the spa."`,
        rating: 5,
    },
    {
        name: "Michael Rodriguez",
        text: `"The Family Beach Villa was perfect for our vacation with kids. Having our own pool while still being steps from the beach was incredible. The kids club activities kept our children entertained while we enjoyed the spa."`,
        rating: 5,
    },
];

const fadeInVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.2,
            duration: 0.6,
            ease: "easeOut",
        },
    }),
};

export default function Testimonials() {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-blue-800 mb-4">Guest Experiences</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Hear what our guests have to say about their stay at Azure Shores Resort.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, idx) => (
                        <motion.div
                            key={idx}
                            className="bg-white rounded-xl p-6 shadow-md"
                            custom={idx}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInVariant}
                        >
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                    <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            fillRule="evenodd"
                                            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-semibold text-gray-800">{testimonial.name}</h4>
                                    <div className="flex text-yellow-400">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-yellow-400" />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-600 italic">{testimonial.text}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
