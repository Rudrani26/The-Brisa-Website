import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export default function Gallery() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    const fadeInVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    const galleryItems = [
        "Beach View",
        "Infinity Pool",
        "Luxury Suite",
        "Spa Treatment",
        "Restaurant",
        "Water Sports",
        "Aerial View",
        "Conference Room",
    ];

    return (
        <section id="gallery" className="py-16 bg-blue-50">
            <div className="container mx-auto px-4" ref={ref}>
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold heading text-blue-800 mb-4">
                        Resort Gallery
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Take a visual journey through our stunning beachfront resort.
                    </p>
                </div>

                <motion.div
                    variants={fadeInVariants}
                    initial="hidden"
                    animate={controls}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                >
                    {galleryItems.map((label, index) => (
                        <div
                            key={index}
                            className="relative overflow-hidden rounded-lg group shadow-lg bg-white"
                        >
                            <div className="w-full h-64 bg-blue-200 flex items-center justify-center">
                                <span className="text-3xl text-blue-700">🏖️</span>
                            </div>
                            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="text-white text-lg font-medium">{label}</span>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
