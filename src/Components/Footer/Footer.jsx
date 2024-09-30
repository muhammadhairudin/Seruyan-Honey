import React from 'react';

// Define the Footer component
function Footer() {
  return (
    <footer className="py-6 text-white bg-gray-800">
      <div className="container flex flex-col items-center justify-between mx-auto md:flex-row">
        {/* Copyright Section */}
        <div className="mb-4 text-center md:text-left md:mb-0">
          <p className="text-sm">
            © {new Date().getFullYear()} Seruyan-Honey.
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex mb-4 space-x-4 md:mb-0">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
            aria-label="Facebook"
          >
            {/* FontAwesome or another icon can be used here */}
            <i className="fab fa-facebook-f"></i> Facebook
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
            aria-label="Twitter"
          >
            <i className="fab fa-twitter"></i> Twitter
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram"></i> Instagram
          </a>
        </div>

        {/* Contact Information */}
        <div className="text-center md:text-right">
          <p className="text-sm">Hubungi Kami: Muhammad H | 0852-4920-9213</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
