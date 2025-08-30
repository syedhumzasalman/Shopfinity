import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        <>

            <footer className="bg-gray-100 text-gray-600 mt-10">
                <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

                    <div>
                        <h2 className="text-2xl font-bold text-blue-500">Shopfinity</h2>
                        <p className="mt-2 text-sm">
                            Your one-stop destination for quality products at the best prices.
                            Shop smart. Shop with confidence. Shopfinity.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/" className="hover:text-blue-500">Home</Link></li>
                            <li><Link to="/AboutUs" className="hover:text-blue-500">About Us</Link></li>
                            <li><Link to="/ContactUs" className="hover:text-blue-500">Contact Us</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-3">Get in Touch</h3>
                        <p className="text-sm">📍 Karachi, Pakistan</p>
                        <p className="text-sm">📧 support@shopfinity.com</p>
                        <p className="text-sm">📞 +92 300 1234567</p>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-300 py-4 text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} Shopfinity. All Rights Reserved.
                </div>
            </footer>
        </>
    )
}

export default Footer