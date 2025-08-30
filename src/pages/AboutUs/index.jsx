import React from 'react'

const AboutUs = () => {
    return (
        <>
            <div className="bg-gray-50 min-h-screen text-gray-800">
                {/* Hero Section */}
                <section className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-20">
                    <div className="max-w-6xl mx-auto px-6 text-center">
                        <h1 className="text-4xl md:text-5xl font-extrabold">About Shopfinity</h1>
                        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
                            Redefining the way you shop online with trust, innovation, and style.
                        </p>
                    </div>
                </section>

                {/* Mission Section */}
                <section className="py-16">
                    <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                        <img
                            src="/shopfinity.png"
                            alt="Shopfinity Mission"
                            className="rounded-2xl shadow-lg"
                        />
                        <div>
                            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                            <p className="text-lg leading-relaxed">
                                At <span className="font-semibold text-indigo-600">Shopfinity</span>, our mission is simple –
                                to bring quality products closer to you while ensuring a seamless, enjoyable, and
                                secure shopping experience. We believe in innovation, customer trust, and delivering
                                value at every step.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="bg-gray-100 py-16">
                    <div className="max-w-6xl mx-auto px-6 text-center">
                        <h2 className="text-3xl font-bold mb-10">Our Core Values</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-white shadow-md rounded-2xl p-6">
                                <h3 className="text-xl font-semibold mb-2 text-indigo-600">Trust</h3>
                                <p>Your satisfaction and security are our top priority.</p>
                            </div>
                            <div className="bg-white shadow-md rounded-2xl p-6">
                                <h3 className="text-xl font-semibold mb-2 text-indigo-600">Innovation</h3>
                                <p>We continuously improve to bring you a modern shopping experience.</p>
                            </div>
                            <div className="bg-white shadow-md rounded-2xl p-6">
                                <h3 className="text-xl font-semibold mb-2 text-indigo-600">Customer First</h3>
                                <p>Every decision we make starts with you in mind.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Vision / Closing */}
                <section className="py-16">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                        <p className="text-lg leading-relaxed">
                            We envision a future where shopping is not just about buying, but an experience
                            that inspires joy, connection, and trust. With <span className="font-semibold text-indigo-600">Shopfinity</span>,
                            you’re not just shopping — you’re part of a community built on values.
                        </p>
                    </div>
                </section>

                {/* Call To Action */}
                <section className="bg-indigo-600 text-white py-12">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">Be Part of Shopfinity</h2>
                        <p className="mb-6">Join us on our journey to revolutionize online shopping.</p>
                        <button className="bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-gray-100 transition">
                            Start Shopping
                        </button>
                    </div>
                </section>
            </div>
        </>
    )
}

export default AboutUs