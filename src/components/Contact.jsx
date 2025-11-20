import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! (Connect to your backend to make it functional)');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="relative py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
           Get in Touch
        </h2>
        <p className="text-gray-400 mb-8">
          I'm always open to discussing new projects and opportunities
        </p>

        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
              className="w-full px-4 py-3 bg-slate-700/50 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 transition-colors text-white placeholder-gray-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
              className="w-full px-4 py-3 bg-slate-700/50 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 transition-colors text-white placeholder-gray-400"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              required
              className="w-full px-4 py-3 bg-slate-700/50 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 transition-colors resize-none text-white placeholder-gray-400"
            ></textarea>
            <button 
              type="submit"
              className="w-full px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}