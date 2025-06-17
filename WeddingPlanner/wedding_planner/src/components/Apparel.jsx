import React from 'react';
import '../Style/Apparel.css';

function Apparel() {
  return (
    <div className="apparel">
      <h2 className="apparel-title">Wedding Apparel</h2>
      <p className="apparel-subtitle">
        Style meets tradition. Discover curated outfits to make you look stunning on your big day.
      </p>

      <div className="apparel-gallery">
        <div className="apparel-card">
          <img
            src="../Images/apparel1.jpg"
            alt="Bridal Gown"
            className="apparel-img"
          />
          <p>Bridal Gown</p>
        </div>

        <div className="apparel-card">
          <img
            src="../Images/apparel2.jpg"
            alt="Groom Suit"
            className="apparel-img"
          />
          <p>Groom Suit</p>
        </div>

        <div className="apparel-card">
          <img
            src="../Images/apparel3.jpg"
            alt="Bridesmaids Dresses"
            className="apparel-img"
          />
          <p>Bridesmaids Dresses</p>
        </div>

        <div className="apparel-card">
          <img
            src="../Images/apparel4.jpg"
            alt="Groomsmen Attire"
            className="apparel-img"
          />
          <p>Groomsmen Attire</p>
        </div>

        <div className="apparel-card">
          <img
            src="../Images/apparel5.jpg"
            alt="Traditional Wear"
            className="apparel-img"
          />
          <p>Traditional Wear</p>
        </div>

        <div className="apparel-card">
          <img
            src="../Images/apparel6.jpg"
            alt="Wedding Accessories"
            className="apparel-img"
          />
          <p>Wedding Accessories</p>
        </div>
      </div>

      <div className="apparel-note">
        <p>
          From timeless classics to contemporary designs, choose attire that reflects your personal style and fits seamlessly into the wedding theme. Coordinating colors, textures, and silhouettes help bring a cohesive visual story to your ceremony.
        </p>
      </div>
    </div>
  );
}

export default Apparel;
