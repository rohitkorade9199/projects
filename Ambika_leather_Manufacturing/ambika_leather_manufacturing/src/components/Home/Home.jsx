import React from 'react'

import '../../Style/Home.css';
import heroImg from '../../assets/hero-leather.jpg';
import bagsImg from '../../assets/bags.jpg';
import beltsImg from '../../assets/belts.jpg';
import glovesImg from '../../assets/gloves.jpg';
import apparelImg from '../../assets/apparel.jpg';

const categories = [
  { title: 'Bags', img: bagsImg },
  { title: 'Belts', img: beltsImg },
  { title: 'Gloves', img: glovesImg },
  { title: 'Apparel', img: apparelImg },
];

function Home() {
  return (
  <section className="home-container">
    <div
      className="hero-section"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1>Welcome to Ambika Leather Manufacturing</h1>
        <p>
          We take pride in crafting premium leather products—bags, belts,
          gloves, wallets & apparel—combining timeless craftsmanship with modern design.
        </p>
        <button onClick={() => window.location.href = '/products'}>
          Explore Our Collection
        </button>
      </div>
    </div>

    <div className="welcome-note">
      <h2> A Warm Welcome</h2>
      <p>
        Thank you for visiting! We’re thrilled to share our passion for
        fine leatherwork with you. Explore our handcrafted collections,
        learn about our artisanal process, and join our journey of timeless
        elegance.
      </p>
    </div>

    <div className="home-highlights">
      {categories.map((cat) => (
        <div key={cat.title} className="highlight-card">
          <img src={cat.img} alt={cat.title} />
          <h3>{cat.title}</h3>
        </div>
      ))}
    </div>
  </section>
  )
}

export default Home
