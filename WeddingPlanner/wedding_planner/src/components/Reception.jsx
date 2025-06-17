import React from 'react';
import '../Style/Reception.css';

function Reception() {
  return (
    <div className="reception">
      <div className="reception-header">
        <h2>Reception Celebration</h2>
        <p className="reception-tagline">
          Lights, laughter, and the beginning of forever.
        </p>
      </div>

      <div className="highlight-grid">
        <div className="highlight-card">
          <img
            src="../Images/reception1.jpg"
            alt="Grand Entry"
          />
          <h3>Grand Entry</h3>
          <p>Start the night with a magical entrance filled with music, lights, and cheers.</p>
        </div>

        <div className="highlight-card">
          <img
            src="../Images/reception2.jpg"
            alt="Couple Dance"
          />
          <h3>Couple’s First Dance</h3>
          <p>A romantic moment to remember — dancing under the spotlight with your love.</p>
        </div>

        <div className="highlight-card">
          <img
            src="../Images/reception3.jpg"
            alt="Live Band"
          />
          <h3>Live Music / DJ</h3>
          <p>Keep the party alive with your favorite tunes, live performances, or DJs.</p>
        </div>

        <div className="highlight-card">
          <img
            src="../Images/reception4.jpg"
            alt="Cake Cutting"
          />
          <h3>Cake Cutting</h3>
          <p>A sweet highlight – celebrate your first dessert together as a married couple.</p>
        </div>

        <div className="highlight-card">
          <img
            src="../Images/reception5.jpg"
            alt="Guest Toasts"
          />
          <h3>Toasts & Memories</h3>
          <p>Raise a glass, share a laugh, and enjoy heartfelt moments with loved ones.</p>
        </div>

        <div className="highlight-card">
          <img
            src="../Images/reception6.jpg"
            alt="Dance Floor"
          />
          <h3>Dance Floor Madness</h3>
          <p>End the night with everyone on the floor, dancing till the stars fade!</p>
        </div>
      </div>

      <footer className="reception-footer">
        <p>“Celebrate love with sparkle, laughter, and unforgettable memories.”</p>
      </footer>
    </div>
  );
}

export default Reception;
