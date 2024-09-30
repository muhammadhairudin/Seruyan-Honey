import React from 'react';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Products from './Components/Products/Products';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="font-sans">
      <Header />
      <section id="home">
        <Hero />
      </section>
      <section id="products">
        <Products />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}

export default App;
