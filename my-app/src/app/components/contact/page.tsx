"use client";

import { useState } from "react";

const Contact = () => {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    function nameValueChecker(e: React.ChangeEvent<HTMLInputElement>) {
        const namePatternChecker = e.target.value.replace(/[^a-zA-Z ]/g, "");
        setName(namePatternChecker);
    };
    return (
        <div className="bg-gray-50 min-h-screen flex items-center justify-center px-6 py-12 pt-20">
            <div className="max-w-4xl w-full bg-white shadow-md rounded-lg p-8">
                <h2 className="text-3xl font-bold text-center mb-6 text-blue-600" style={{ fontFamily: "Montserrat, sans-serif" }}>
                    Contact Us
                </h2>
                <p className="text-center text-gray-600 mb-8 font-mont">
                    I love to hear from you! Fill out the form below and I will get back to you shortly.
                </p>
                <form action="https://formspree.io/f/xyzzdneq" method="POST">
                    <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-6">
                        <div>
                            <label
                                className="block text-sm font-medium text-gray-700 font-mont"
                            >
                                Full Name
                            </label>
                            <input
                                type="text"
                                className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-mont"
                                placeholder="Your Name" value={name} onChange={nameValueChecker}
                                name="Full Name" required autoComplete="off"
                            />
                        </div>
                        <div>
                            <label
                                className="block text-sm font-medium text-gray-700 font-mont"
                            >
                                Email Address
                            </label>
                            <input
                                type="email"
                                className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-mont"
                                placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)}
                                name="Email Address" required autoComplete="off"
                            /> 
                        </div>
                    </div>
                    <div className="mt-6">
                        <label
                            className="block text-sm font-medium text-gray-700 font-mont"
                        >
                            Message
                        </label>
                        <textarea value={message} onChange={(e) => { setMessage(e.target.value) }} className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-mont"
                            rows={4}
                            placeholder="Write your message here..."
                            name="Message" required autoComplete="off"
                        ></textarea>
                    </div>
                    <div className="mt-6 flex justify-center">
                        <button
                            type="submit"
                            className="px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 font-mont"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
