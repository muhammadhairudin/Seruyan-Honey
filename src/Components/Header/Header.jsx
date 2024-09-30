import React from 'react';

const Header = () => {
  return (
    <header className="shadow-md bg-honey-light">
      <nav className="container flex items-center justify-between px-4 py-3 mx-auto">
        <div className="text-2xl font-bold text-honey-dark">Seruyan-Honey</div>
        <ul className="hidden space-x-4 md:flex">
          <li><a href="#home" className="text-honey-dark hover:text-honey">Beranda</a></li>
          <li><a href="#products" className="text-honey-dark hover:text-honey">Produk</a></li>
          <li><a href="#about" className="text-honey-dark hover:text-honey">Tentang Kami</a></li>
          <li><a href="#contact" className="text-honey-dark hover:text-honey">Kontak</a></li>
        </ul>
        <button className="md:hidden">
          <svg className="w-6 h-6 text-honey-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
    </header>
  );
};

export default Header;
