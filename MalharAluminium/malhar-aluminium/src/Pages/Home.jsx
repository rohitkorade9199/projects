import React from 'react'
import ImageGallery from "../components/ImageGallery";
import "../Style/Home.css"
import Services from './Services';

function Home() {
  return (
     <div className="home-container">
      <section className="home-intro">
        <h2>Welcome to <span className="highlight">Malhar Aluminium</span></h2>
     <p>
  At <strong>Malhar Aluminium</strong>, we don't just craft aluminium structures; we create lasting impressions. With over a decade of expertise in premium aluminium fabrication, our solutions seamlessly blend durability with elegance. Whether enhancing the aesthetics of your home or elevating the functionality of your commercial space, our offerings—including sliding windows, partitions, ACP work, PVC doors, and toughened glass installations—are tailored to meet your unique needs.
</p>

      </section>
      <Services/>
      <section className="home-gallery">
        <div>

        </div>
        <h3>Our Recent Work</h3>
        <div>
          
        </div>
        <ImageGallery />
        
      </section>
    </div>
  )
}

export default Home
