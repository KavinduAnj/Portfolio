import React from "react";
import { FaEnvelope, FaWhatsapp, FaFacebookMessenger } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12">
        {/* Left Side - Contact Info */}
        <div>
          <h2 className="text-2xl font-semibold mb-8 text-center md:text-left">
            Talk to me
          </h2>
          <div className="space-y-6">
            {/* Email */}
            <div className="border rounded-xl p-6 shadow-sm flex items-center gap-4">
              <FaEnvelope className="text-2xl text-gray-600" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-500">user@gmail.com</p>
                <a
                  href="mailto:user@gmail.com"
                  className="text-sm text-gray-700 flex items-center gap-1 hover:underline"
                >
                  Write me →
                </a>
              </div>
            </div>

            {/* Whatsapp */}
            <div className="border rounded-xl p-6 shadow-sm flex items-center gap-4">
              <FaWhatsapp className="text-2xl text-green-500" />
              <div>
                <h3 className="font-semibold">Whatsapp</h3>
                <p className="text-gray-500">999-888-777</p>
                <a
                  href="https://wa.me/999888777"
                  className="text-sm text-gray-700 flex items-center gap-1 hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Write me →
                </a>
              </div>
            </div>

            {/* Messenger */}
            <div className="border rounded-xl p-6 shadow-sm flex items-center gap-4">
              <FaFacebookMessenger className="text-2xl text-blue-500" />
              <div>
                <h3 className="font-semibold">Messenger</h3>
                <p className="text-gray-500">user.fb123</p>
                <a
                  href="https://m.me/user.fb123"
                  className="text-sm text-gray-700 flex items-center gap-1 hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Write me →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div>
          <h2 className="text-2xl font-semibold mb-8 text-center md:text-left">
            Write me your project
          </h2>
          <form className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-sm mb-2">Name</label>
              <input
                type="text"
                placeholder="Insert your name"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm mb-2">Mail</label>
              <input
                type="email"
                placeholder="Insert your email"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>

            {/* Project */}
            <div>
              <label className="block text-sm mb-2">Project</label>
              <textarea
                rows="5"
                placeholder="Write your project"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full md:w-auto bg-black text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-800 transition"
            >
              Send Message
              <span>✈️</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
