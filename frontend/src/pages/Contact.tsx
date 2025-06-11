import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactUs() {
    return (
        <section className="py-16 bg-blue-50" id="contact">
            <div className="container mx-auto px-4">
                {/* Section Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-blue-800 mb-4">Contact Us</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        We’d love to hear from you. Whether you have a question, want to book a stay, or just want to say hello — get in touch!
                    </p>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Contact Form */}
                    <form className="bg-white p-8 rounded-xl shadow-md">
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                            <input
                                type="text"
                                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="Your name"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input
                                type="email"
                                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="you@example.com"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                            <textarea
                                className="w-full border border-gray-300 rounded-md px-4 py-2 h-32 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="Write your message..."
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="bg-blue-700 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition"
                        >
                            Send Message
                        </button>
                    </form>

                    {/* Contact Information */}
                    <div className="space-y-6 text-blue-900">
                        <div className="flex items-start gap-4">
                            <Phone className="w-6 h-6 text-blue-600" />
                            <div>
                                <p className="font-semibold">Phone</p>
                                <p>+1 (555) 123-4567</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <Mail className="w-6 h-6 text-blue-600" />
                            <div>
                                <p className="font-semibold">Email</p>
                                <p>info@azureshores.com</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <MapPin className="w-6 h-6 text-blue-600" />
                            <div>
                                <p className="font-semibold">Location</p>
                                <p>123 Ocean Breeze Lane, Paradise Cove, FL</p>
                            </div>
                        </div>
                        <iframe
                            className="w-full h-64 rounded-md border"
                            src="https://maps.google.com/maps?q=paradise%20cove%20florida&t=&z=13&ie=UTF8&iwloc=&output=embed"
                            allowFullScreen
                            loading="lazy"
                            title="Google Map"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}
