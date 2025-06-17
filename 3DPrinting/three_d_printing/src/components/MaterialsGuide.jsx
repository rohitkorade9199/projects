
import React from 'react';
import '../Style/MaterialsGuide.css';

function MaterialsGuide() {
  return (
    <div className="materials-guide">
      <section className="intro">
        <h1>Materials & Resources Guide</h1>
        <p>Explore materials used in 3D printing and helpful resources to guide your journey.</p>
      </section>

      <section className="materials">
        <h2>Common 3D Printing Materials</h2>
        <div className="material-cards">
          <div className="material-card">
            <h3>PLA (Polylactic Acid)</h3>
            <p>Biodegradable, easy to print with, and suitable for beginners.</p>
          </div>
          <div className="material-card">
            <h3>ABS (Acrylonitrile Butadiene Styrene)</h3>
            <p>Strong and durable, ideal for functional parts but requires ventilation.</p>
          </div>
          <div className="material-card">
            <h3>PETG (Polyethylene Terephthalate Glycol)</h3>
            <p>Strong, water-resistant, and less prone to warping than ABS.</p>
          </div>
          <div className="material-card">
            <h3>Resins</h3>
            <p>Used in SLA printing, resins offer high-detail results but require post-processing.</p>
          </div>
        </div>
      </section>

      <section className="resources">
        <h2>Helpful Resources</h2>
        <ul>
          <li><a href="https://all3dp.com/" target="_blank" rel="noopener noreferrer">All3DP - 3D Printing News & Reviews</a></li>
          <li><a href="https://reprap.org/" target="_blank" rel="noopener noreferrer">RepRap Community</a></li>
          <li><a href="https://3dprintingindustry.com/" target="_blank" rel="noopener noreferrer">3D Printing Industry</a></li>
          <li><a href="https://www.matterhackers.com/" target="_blank" rel="noopener noreferrer">MatterHackers</a></li>
        </ul>
      </section>
    </div>
  );
}

export default MaterialsGuide;
