import React from 'react';
import '../Style/Ceremony.css';

function Ceremony() {
  return (
    <div className="ceremony">
      <h2 className="ceremony-title">Wedding Ceremony</h2>
      <p className="ceremony-subtitle">
        A moment of promises, traditions, and everlasting memories.
      </p>

      <div className="ceremony-gallery">
        <div className="ceremony-card">
          <img
            src="../Images/ceremony1.jpg"
            alt="Vows Exchange"
            className="ceremony-img"
          />
          <p>Vows Exchange</p>
        </div>

        <div className="ceremony-card">
          <img
            src="../Images/ceremony2.jpg"
            alt="Traditional Rituals"
            className="ceremony-img"
          />
          <p>Traditional Rituals</p>
        </div>

        <div className="ceremony-card">
          <img
            src="../Images/ceremony3.jpg"
            alt="Ring Ceremony"
            className="ceremony-img"
          />
          <p>Ring Exchange</p>
        </div>

        <div className="ceremony-card">
          <img
            src="../Images/ceremony4.jpg"
            alt="Blessings"
            className="ceremony-img"
          />
          <p>Family Blessings</p>
        </div>

        <div className="ceremony-card">
          <img
            src="../Images/ceremony5.jpg"
            alt="Sacred Fire"
            className="ceremony-img"
          />
          <p>Under the Sacred Fire</p>
        </div>

        <div className="ceremony-card">
          <img
            src="../Images/ceremony6.jpg"
            alt="First Kiss"
            className="ceremony-img"
          />
          <p>First Kiss as a Couple</p>
        </div>
      </div>

      <div className="ceremony-note">
        <p>
          Whether it's a grand traditional ritual or a simple vow exchange, your ceremony reflects your love story. Customize your wedding with readings, music, symbolic gestures, and heartfelt promises. Every step down the aisle becomes a memory you'll cherish forever.
        </p>
      </div>
    </div>
  );
}

export default Ceremony;
