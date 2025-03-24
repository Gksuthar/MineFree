import React from 'react';
import './index.css';
import Navbar from '../../components/Header/index'
const Hero = () => {
  return (
    <>
      <Navbar />
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Empowering Businesses</h1>
          <h2 className="hero-subtitle">with Affordable Custom Tech Solutions</h2>
          <button className="hero-button">Start A Project</button>
        </div>
      </section>
    </>
  );
};

export default Hero;