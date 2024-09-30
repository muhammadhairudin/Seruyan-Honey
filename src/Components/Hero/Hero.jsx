import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative py-40 bg-honey bg-opacity-20">
      {/* Wrapper untuk gambar */}
      <div className="absolute inset-0">
        <img 
          src="/public/Images/madumurni.svg" // Ganti dengan URL gambar yang sesuai
          alt="Gambar Madu" 
          className="object-cover w-full h-full opacity-50" 
        />
        {/* Overlay gelap */}
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>
      
      <div className="container relative z-10 px-4 mx-auto text-center"> {/* Z-index untuk menempatkan teks di atas gambar */}
        <h1 className="mb-4 text-4xl font-bold md:text-6xl text-honey-dark">Seruyan-Honey</h1>
        <p className="mb-8 text-xl md:text-2xl text-honey-dark">Madu Murni dari Hutan Kalimantan</p>

        <button className="px-6 py-2 font-bold text-white transition duration-300 rounded-full bg-slate-600 hover:bg-honey">
          Beli Sekarang
        </button>
      </div>
    </section>
  );
};

export default Hero;
