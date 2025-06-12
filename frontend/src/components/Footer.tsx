import { Facebook, Instagram, Twitter, Mail, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-blue-800 text-white py-12">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Branding */}
                <div>
                    <h3 className="text-2xl font-bold mb-4">The Brisa Nature Stay</h3>
                    <p className="text-blue-100">
                        Where tranquility meets luxury. Escape to the coast and let your worries drift away.
                    </p>
                </div>

                {/* Navigation */}
                <div>
                    <h4 className="text-lg font-semibold mb-4">Explore</h4>
                    <ul className="space-y-2 text-blue-100">
                        <li><a href="#home" className="text-blue-100 hover:text-blue-500 transition">
                            Home
                        </a></li>
                        <li><a href="#accommodations" className="text-blue-100 hover:text-blue-500 transition">
                            Rooms
                        </a></li>
                        <li><a href="#amenities" className="text-blue-100 hover:text-blue-500 transition">
                            Amenities
                        </a></li>
                        <li><a href="#gallery" className="text-blue-100 hover:text-blue-500 transition">
                            Gallery
                        </a></li>
                        <li><a href="#contact" className="text-blue-100 hover:text-blue-500 transition">
                            Contact
                        </a></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
                    <ul className="space-y-2 text-blue-100">
                        <li className="flex items-center gap-2">
                            <Phone className="w-4 h-4" /> +91 92224 12037
                        </li>
                        <li className="flex items-center gap-2">
                            <Phone className="w-4 h-4" /> +91 93229 66577
                        </li>

                        <li className="flex items-center gap-2">
                            <Mail className="w-4 h-4" /> thebrisansr@gmail.com
                        </li>
                        <li>123 Ocean Breeze Lane<br />Paradise Cove, FL</li>
                    </ul>
                </div>

                {/* Social Media */}
                <div>
                    <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                    <div className="flex gap-4">
                        <a href="https://www.facebook.com/profile.php?id=61571990521229" aria-label="Facebook">
                            <Facebook className="w-5 h-5 hover:text-blue-300" />
                        </a>
                        <a href="https://www.instagram.com/thebrisansr/" aria-label="Instagram">
                            <Instagram className="w-5 h-5 hover:text-blue-300" />
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=61571990521229" aria-label="Twitter">
                            <Twitter className="w-5 h-5 hover:text-blue-300" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="mt-12 border-t border-blue-700 pt-6 text-center text-blue-300 text-sm">
                &copy; {new Date().getFullYear()} The Brisa Nature Stay. All rights reserved.
            </div>
        </footer>
    );
}
