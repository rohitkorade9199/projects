import React from 'react'
import "../Style/Contact.css"

function Contact() {
  return (
     <section className="about-container">
      <div className="about-header">
        <h1>About Malhar Aluminium</h1>
        <p>Crafting Excellence in Aluminium Fabrication</p>
      </div>

      <div className="about-content">
        <p>
          Welcome to <strong>Malhar Aluminium</strong>, your trusted partner in premium aluminium fabrication solutions for both residential and commercial projects. Based in Nagpur, Maharashtra, we specialize in delivering high-quality, custom-designed products that enhance the aesthetics, functionality, and durability of your spaces.
        </p>
        <p>
          With a commitment to quality and customer satisfaction, we offer a comprehensive range of services tailored to meet the diverse needs of our clients.
        </p>
      </div>

      <div className="about-services">
        <h2>Our Expertise</h2>
        <ul>
          <li><strong>Sliding Windows:</strong> Sleek, space-saving designs that allow for smooth operation and maximum ventilation.</li>
          <li><strong>Partitions:</strong> Versatile solutions for creating functional spaces without compromising on style.</li>
          <li><strong>ACP Work:</strong> Durable and lightweight Aluminium Composite Panels for both interior and exterior applications.</li>
          <li><strong>PVC Doors:</strong> Affordable and low-maintenance options that don't sacrifice quality or appearance.</li>
          <li><strong>Toughened Glass Installations:</strong> Safety and clarity combined in our high-strength glass solutions.</li>
        </ul>
      </div>

      <div className="about-approach">
        <h2>Our Approach</h2>
        <p>
          We pride ourselves on our commitment to quality and customer satisfaction. Our process includes:
        </p>
        <ol>
          <li><strong>Consultation:</strong> Understanding your specific requirements and vision.</li>
          <li><strong>Design:</strong> Creating customized solutions that align with your needs.</li>
          <li><strong>Fabrication:</strong> Utilizing advanced techniques and materials to craft durable products.</li>
          <li><strong>Installation:</strong> Ensuring precise and efficient setup for optimal performance.</li>
        </ol>
      </div>

      <div className="about-footer">
        <p>
          
          Ready to transform your space with our premium aluminium solutions? Contact us today to discuss your project and discover how we can bring your vision to life.
        </p>
       
      </div>
      <div className='contact_form'>
        <h4>Contact</h4>
        <form className='form_input'>
          <input type="text" id='' placeholder='enter name ' required  />
          <input type="number" name="" id=""  placeholder='enter number'  maxLength={10}/>
          <input type="text" name="" id="" placeholder='enter text'/>
        </form>

      </div>
    </section>
  )
}

export default Contact
