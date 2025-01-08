import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-purple-300 text-black py-10">
        <div className="container mx-auto px-4">
          {/* Logo and Description */}
          <div className="flex flex-col md:flex-row justify-between md:items-center items-start space-y-6 md:space-y-0">
            {/* Logo Section */}
            <div>
              <h2 className="md:text-4xl text-3xl font-bold text-black flex items-center font-dancing">
                Bloom Haven
              </h2>
              <p className="mt-3 md:text-lg max-w-sm">
                Celebrating the beauty of nature, one petal at a time. Discover stories, tips, and more about your favorite blooms.
              </p>
            </div>
  
            {/* Quick Links */}
            <div className="space-y-2 text-left">
              <h3 className="md:text-xl text-lg font-semibold text-black">Quick Links</h3>
              <ul className="space-y-1 md:text-lg text-black">
                <li>
                  <a href="#home" className="hover:text-gray-500">Home</a>
                </li>
                <li>
                  <a href="#about" className="hover:text-gray-500">About</a>
                </li>
                <li>
                  <a href="#blog" className="hover:text-gray-500">Blog</a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-gray-500">Contact</a>
                </li>
              </ul>
            </div>
  
            {/* Newsletter */}
            <div>
              <h3 className="md:text-xl text-lg font-semibold text-black">Stay in Bloom</h3>
              <p className="mt-2 md:text-lg max-w-lg">Subscribe for the latest updates on flower care, new blooms, and expert tips to nurture your garden of knowledge.</p>
              <form className="mt-4 flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border-t-2 border-l-2 border-b-2  border-purple-500 text-gray-800 bg-white rounded-l-lg focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-pink-500 text-white border-t-2 border-r-2 border-b-2 border-pink-700  rounded-r-lg hover:bg-pink-600"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
  
          {/* Divider */}
          <div className="my-6 border-t border-gray-800"></div>

          {/* Social Media Links */}
          <div className="flex justify-center space-x-6">
            <a href="https://facebook.com" target="_blank" className="text-black hover:text-gray-500">
            <FaFacebook className="md:text-3xl text-2xl" />
            </a>
            <a href="https://instagram.com" target="_blank" className="text-black hover:text-gray-500">
            <FaInstagram className="md:text-3xl text-2xl" />
            </a>
            <a href="https://twitter.com" target="_blank" className="text-black hover:text-gray-500">
            <FaTwitter className="md:text-3xl text-2xl" />
            </a>
          </div>
  
          {/* Copyright */}
          <div className="mt-6 text-center md:text-lg text-black">
            &copy; 2025 <span className="font-dancing text-xl font-semibold">Bloom Haven</span>. All Rights Reserved.
          </div>
        </div>
      </footer>
    )
}