import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! (Backend integration required)");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="relative py-20 px-4 bg-[#0f0f13]">
      <div className="max-w-3xl mx-auto text-center">

        <h2 className="text-4xl md:text-5xl font-bold mb-4 
          bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
          Let's Work Together
        </h2>

        <p className="text-gray-400 mb-10">
          I’m always open to new opportunities, collaborations, and interesting projects.
        </p>

        <div className="bg-[#1a1a1f] p-8 rounded-2xl shadow-xl border border-white/10 
        backdrop-blur-xl hover:border-purple-500/30 transition-all duration-300">

          <form onSubmit={handleSubmit} className="space-y-6 text-left">
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
              className="w-full px-4 py-3 bg-[#2a2a2e] text-gray-200 border border-white/10 
              rounded-lg focus:outline-none focus:border-purple-500/60 transition-all 
              placeholder-gray-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
              className="w-full px-4 py-3 bg-[#2a2a2e] text-gray-200 border border-white/10 
              rounded-lg focus:outline-none focus:border-purple-500/60 transition-all 
              placeholder-gray-500"
            />

            {/* Message */}
            <textarea
              placeholder="Your Message"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              required
              className="w-full px-4 py-3 bg-[#2a2a2e] text-gray-200 border border-white/10 
              rounded-lg focus:outline-none focus:border-purple-500/60 transition-all 
              resize-none placeholder-gray-500"
            ></textarea>

            <button
              type="submit"
              className="w-full px-8 py-3 rounded-lg font-semibold 
              bg-gradient-to-r from-purple-600 to-pink-600 
              text-white shadow-lg shadow-purple-600/20 
              hover:scale-105 transition-transform duration-300"
            >
              Send Message
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}
