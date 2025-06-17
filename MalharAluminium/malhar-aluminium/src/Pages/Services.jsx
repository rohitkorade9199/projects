import React from 'react';
import '../Style/Services.css';

function Services() {
  const services = [
    {
      name: "Sliding Window",
      description: "Smooth and stylish sliding aluminium windows for homes and offices.",
     
      images: [
        "/Images/SlidingWindow-1.jpg",
        "/Images/SlidingWindow-2.jpg",
        "/Images/SlidingWindow-3.jpg",
      ],
    },
    {
      name: "Partition Work",
       description: "Aluminium and glass partitions for cabins, offices, and showrooms.",
     
      images: [
        "/Images/PV-1.jpg",
        "/Images/PV-2.jpg",
        "/Images/PV-3.jpg",
      ],
    },
    {
      name: "ACP Work",
       description: "High-quality Aluminium Composite Panel cladding for exteriors.",
     
      images: [
        "/Images/ACP-1.jpg",
        "/Images/ACP-2.jpg",
        "/Images/ACP-3.jpg",
      ],
    },
    {
      name: "PVC Door Work",
      description: "Waterproof and durable PVC doors ideal for bathrooms and kitchens.",
    
      images: [
        "/Images/PVC-1.jpg",
        "/Images/PVC-2.jpg",
        "/Images/PVC-3.jpg",
      ],
    },
    {
      name: "Toughened Glass Work",
       description: "Tempered glass solutions for doors, railings, partitions, and more.",
     
      images: [
        "/Images/GlassWork-1.jpg",
        "/Images/GlassWork-2.jpg",
        "/Images/GlassWork-3.jpg",
      ],
    }
  ];

  return (
     <div className="services-container">
      <h2>Our Services</h2>
      <div className="services-list">
        {services.map((service, idx) => (
          <div className="service-line" key={idx}>
            <div className="service-info">
              <h4>{service.name}</h4>
              <p>{service.description}</p>
            </div>
            <div className="service-images">
              {service.images.map((img, i) => (
                <img key={i} src={img} alt={`${service.name} ${i + 1}`} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
