export default function Contact() {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
            <div className="bg-gray-100 p-8 md:p-10 rounded-lg shadow-lg w-full max-w-xl">
                <h1 className="md:text-6xl text-3xl font-serif font-bold text-gray-800 mb-6 text-center">Contact Us</h1>
                <p className="text-center font-serif text-gray-600 md:text-lg mb-6">
                    Bloom your thoughts with us—reach out for support, inquiries, or feedback!
                </p>
                <form className="space-y-4">
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1">
                            <label htmlFor="name" className="block font-serif text-lg text-gray-800 mb-1">Name</label>
                            <input
                                type="text"
                                id="name"
                                className="w-full h-12 border border-gray-500 rounded-lg px-3 py-2 focus:outline-none focus:border-2 focus:border-purple-500"
                                placeholder="Your Name"
                            />
                        </div>
                        <div className="flex-1">
                            <label htmlFor="email" className="block font-serif text-lg text-gray-800 mb-1">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full h-12 border border-gray-500 rounded-lg px-3 py-2 focus:outline-none focus:border-2 focus:border-purple-500"
                                placeholder="Your Email"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="message" className="block font-serif text-lg text-gray-800 mb-1">Message</label>
                        <textarea
                            id="message"
                            rows={6}
                            className="w-full border border-gray-500 rounded-lg px-3 py-2 focus:outline-none focus:border-2 focus:border-purple-500"
                            placeholder="Your Message"
                        ></textarea>
                    </div>
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="w-full md:w-1/2 bg-purple-400 text-white text-xl font-serif rounded-lg py-2 hover:bg-purple-500"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}