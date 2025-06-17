import React from 'react'
import "../Style/ImageGallery.css"

function ImageGallery() {

   const images = [
       {
      src: '/Images/glassDoor.jpg',
      title: 'Glass Door',
      description: 'legant toughened glass door installed at XYZ Corporate Tower, Mumbai.',
    },
    {
      src: '/Images/glassWindow.jpg',
      title: 'Glass Window',
      description: 'Sliding glass window with aluminium frame at ABC Residential Complex, Pune.',
    },
    {
      src: '/Images/steelDoor.jpg',
      title: 'Steel Door',
      description: 'Durable steel door for commercial properties at DEF Mall, Nagpur.',
    }
  ];


  return (
    <div>

        <p>At Malhar Aluminium, we take pride in our extensive experience in the aluminium fabrication industry. With over a decade of expertise, we have successfully completed numerous projects,
             ranging from residential installations to large-scale commercial developments.</p>
       <div className="gallery">
        
      {images.map((img, idx) => (
        <div className="gallery-item" key={idx}>
          <img src={img.src} alt={img.title} />
          <h4>{img.title}</h4>
          <p>{img.description}</p>
        </div>
        
      ))}
    </div>
     </div>
  )
}

export default ImageGallery
