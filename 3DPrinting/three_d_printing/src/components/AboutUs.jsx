import React from 'react';
import '../Style/AboutUs.css';

function AboutUs() {
  return (
    <div className="about-page">
      <section className="about-section">
        <h1>About 3D PrintHub</h1>
        <p>
          At 3D PrintHub, we are passionate about transforming ideas into reality through the power of 3D printing.
          From prototypes to production-ready parts, we deliver precision and creativity to individuals, startups, and large enterprises alike.
        </p>
        <p>
          With cutting-edge technology, a wide material selection, and dedicated professionals, we’re committed to bringing your designs to life efficiently and affordably.
        </p>
      </section>

      <section className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <div className="member-card">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="John" />
            <h4>John Patel</h4>
            <p>Founder & Lead Engineer</p>
          </div>
          <div className="member-card">
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Sarah" />
            <h4>Sarah Khan</h4>
            <p>Design Specialist</p>
          </div>
          <div className="member-card">
            <img src="https://randomuser.me/api/portraits/men/65.jpg" alt="David" />
            <h4>David Wong</h4>
            <p>Materials Expert</p>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <h2>Contact Us</h2>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message..." rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
}

export default AboutUs;
