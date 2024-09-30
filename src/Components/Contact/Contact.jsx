import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to an API)
    alert(`Terima Kasih, ${formData.name}, pesanmu sudah kami terima.`);
    setFormData({ name: '', email: '', message: '' }); // Clear the form
  };

  return (
    <div className="p-10">
      <h1 className="mb-6 text-3xl font-bold text-center">Kontak Kami</h1>
      <div className="max-w-xl p-6 mx-auto bg-white rounded-lg shadow-md">
        {/* Contact Information */}
        <div className="mb-6">
          <h2 className="mb-2 text-xl font-semibold">Hubungi Kami</h2>
          <p className="text-gray-700">Silakan hubungi kami dengan pertanyaan atau komentar apapun.</p>
          <ul className="mt-4 text-gray-700">
            <li><strong>Phone:</strong> 0852-4920-9213</li>
            <li><strong>Email:</strong> seruyan-honey@gmail.com</li>
            <li><strong>Location:</strong> Jl. RA kartini Kuala Pembuang</li>
          </ul>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full p-2 text-white transition duration-200 bg-blue-600 rounded-md shadow hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
