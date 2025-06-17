import React from 'react'
import "../Style/Home.css"
import { Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';


function Home() {
    const Navigate=useNavigate();
    const showservices=()=>{
        Navigate('/Services')
    }
  return (
    <div>
       <div className="home-page">
      <header className="main-section">
        <h1>Welcome to 3D PrintHub</h1>
        <p>Innovate. Create. Print. Your gateway to high-quality 3D printing services.</p>
        <button className="cta-button" onClick={showservices}>Explore Services</button>
      </header>

      <section className="features">
        <div className="feature-card">
          <img src="../Images/feature1.jpg" alt="Fast Printing" />
          <h3>Fast & Precise Printing</h3>
          <p>State-of-the-art printers ensuring accurate and timely prints.</p>
        </div>

        <div className="feature-card">
          <img src="../Images/feature2.jpg" alt="Materials" />
          <h3>Wide Range of Materials</h3>
          <p>From PLA to advanced resins — we cover all your material needs.</p>
        </div>

        <div className="feature-card">
          <img src="../Images/feature3.jpg" alt="Support" />
          <h3>Expert Support</h3>
          <p>Our experienced team helps you through every step of your printing journey.</p>
        </div>
      </section>

      <section className="about">
        <h2>Why Choose 3D PrintHub?</h2>
        <p>Whether you're a hobbyist, a business, or an educator, we offer flexible 3D printing solutions tailored to your needs. With years of experience, a customer-first approach, and the latest in 3D printing tech — your ideas are in safe hands.</p>
      </section>

      <section className="latest-blog">
        <h2>From Our Blog</h2>
        <div className="blog-preview">
          <div className="blog-card">
            <img src="../Images/blog1.png" alt="Beginner Tips" />
            <h4>Getting Started with 3D Printing</h4>
            <p>Explore the basics of 3D printing for newcomers and hobbyists.</p>
            <a href="/blog">Read More</a>
          </div>

          <div className="blog-card">
            <img src="../Images/blog2.jpg" alt="Material Guide" />
            <h4>Choosing the Right Material</h4>
            <p>Understand the differences between PLA, ABS, PETG, and more.</p>
            <a href="/blog">Read More</a>
          </div>

          <div className="blog-card">
            <img src="../Images/blog3.jpg" alt="Business Uses" />
            <h4>How Businesses Use 3D Printing</h4>
            <p>Discover real-world business applications of 3D printing tech.</p>
            <a href="/blog">Read More</a>
          </div>
        </div>
      </section>
    </div>
    </div>
  )
}

export default Home
