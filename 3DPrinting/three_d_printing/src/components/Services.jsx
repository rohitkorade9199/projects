import React from 'react';
import '../Style/Services.css';

function Services() {
  return (
    <div className="services-page">
      <h1 className="services-title">Our 3D Printing Services</h1>
      <p className="services-intro">
        From concept to creation, we deliver fast, high-quality 3D printing solutions for professionals, students, and hobbyists alike.
      </p>

      <div className="services-grid">
        <div className="service-card">
          <img src="../Images/services1.jpg" alt="Prototyping" />
          <h3>Rapid Prototyping</h3>
          <p>Accelerate your product development with functional prototypes and fast iteration cycles.</p>
        </div>

        <div className="service-card">
          <img src="../Images/services2.jpg" alt="Custom Parts" />
          <h3>Custom Parts Production</h3>
          <p>Print durable, high-precision parts for robotics, engineering, or daily utilities.</p>
        </div>

        <div className="service-card">
          <img src="../Images/services3.jpg" alt="Miniatures" />
          <h3>Miniatures & Figurines</h3>
          <p>Create detailed gaming figurines, collectibles, architectural models, and more.</p>
        </div>

        <div className="service-card">
          <img src="../Images/services4.jpg" alt="Design Help" />
          <h3>3D Design & Modeling</h3>
          <p>Need help creating a 3D file? Our experts can design from scratch or optimize your existing file.</p>
        </div>

        <div className="service-card">
          <img src="../Images/services5.jpg" alt="Batch Printing" />
          <h3>Batch Printing</h3>
          <p>Get multiple parts printed with consistent quality, perfect for small-scale production runs.</p>
        </div>

        <div className="service-card">
          <img src="../Images/services6.jpg" alt="Educational Projects" />
          <h3>Educational Projects</h3>
          <p>We support schools and colleges with models and kits for STEM learning and exhibitions.</p>
        </div>
      </div>

      <section className="workflow-section">
        <h2>How Our Service Works</h2>
        <div className="workflow-steps">
          <div className="step">
            <span className="step-number">1</span>
            <h4>Upload Your File</h4>
            <p>Send us your STL, OBJ, or CAD file through our online portal or email.</p>
          </div>

          <div className="step">
            <span className="step-number">2</span>
            <h4>Choose Material & Finish</h4>
            <p>Select from our wide range of filaments, resins, and surface finishes.</p>
          </div>

          <div className="step">
            <span className="step-number">3</span>
            <h4>Review & Print</h4>
            <p>We'll review the design and start printing after your confirmation.</p>
          </div>

          <div className="step">
            <span className="step-number">4</span>
            <h4>Pickup or Delivery</h4>
            <p>Receive your printed part via courier or collect it from our workshop.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
