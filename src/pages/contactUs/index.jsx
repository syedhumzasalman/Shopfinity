import React, { useState } from 'react'

const ContactUs = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("Form Submitted:", formData);
        alert("Thank you for contacting us!", formData.name);
        setFormData({ name: "", email: "", message: "" });
    };

    // console.log(formData);
    

    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
                <div className="bg-white shadow-xl rounded-2xl p-8 max-w-lg w-full">
                    <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
                        Contact <span className="text-indigo-600">Shopfinity</span>
                    </h1>
                    <p className="text-gray-600 mb-6 text-center">
                        Have questions? We'd love to hear from you. Fill out the form below.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                            required
                        />
                        <textarea
                            name="message"
                            rows="4"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                            required
                        />
                        <button
                            type="submit"
                            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 transition"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>

        </>
    )
}

export default ContactUs