import React from 'react'
import "../Style/home.css"

function Home() {
  return (
   <div className="home">
      <section className="welcome_section">
      <h1>Welcome To Wedding Planner</h1>
      <p>
        Begin your wedding journey by setting your vision, deciding on a theme, creating a budget, and outlining a timeline. A solid start sets the tone for everything that follows.
      </p>
    </section>

    <section className="invitation_section">
  <h1>Invitations</h1>
    <p>"Let your love story begin with a beautiful invite — the first glimpse of your forever."</p>
  <div className="invitation-gallery">
    <div className="card">
      <img 
        src="../Images/invitationcard1.jpg" 
        alt="Classic Wedding Invitation" 
        className="invitation-img" 
      />
      <p>Classic Wedding Invitation</p>
    </div>

    <div className="card">
      <img 
        src="../Images/invitationcard2.jpg" 
        alt="Modern Wedding Invite" 
        className="invitation-img" 
      />
      <p>Modern Wedding Invite</p>
    </div>

    <div className="card">
      <img 
        src="../Images/invitationcard3.jpg" 
        alt="Floral Invitation Design" 
        className="invitation-img" 
      />
      <p>Floral Invitation Design</p>
    </div>

    <div className="card">
      <img 
        src="../Images/invitationcard4.jpg" 
        alt="Rustic Theme Invitation" 
        className="invitation-img" 
      />
      <p>Rustic Theme Invitation</p>
    </div>

    <div className="card">
      <img 
        src="../Images/invitationcard5.jpg" 
        alt="Simple Elegant Invitation" 
        className="invitation-img" 
      />
      <p>Simple Elegant Invitation</p>
    </div>

    <div className="card">
      <img 
        src="../Images/invitationcard6.jpg" 
        alt="Luxury Wedding Card" 
        className="invitation-img" 
      />
      <p>Luxury Wedding Card</p>
    </div>
  </div>

  <p>
    Wedding invitations aren't just cards – they’re a visual reflection of your style, story, and celebration. Whether you prefer handcrafted paper invites or sleek digital versions, make sure they match your theme.
  </p>
  <p>
    Popular styles include floral, vintage, modern minimal, and eco-friendly invites. Enhancements like embossed text, laser cuts, custom monograms, or acrylic finishes add personality and charm.
  </p>
  <p>
    Be sure to include all vital information: date, time, location, RSVP details, and dress code. Many couples now use QR codes linking to their wedding websites or RSVP forms for convenience.
  </p>
</section>


    


     <section className="flower_section">
  <h2>Flowers</h2>
  <p className="flower-slogan">
    "Blooms of beauty, fragrance of love – let flowers tell your story."
  </p>

  <div className="flower-gallery">
    <div className="flower-card">
      <img 
        src="../Images/flower1.jpg" 
        alt="Bridal Bouquet" 
        className="flower-img" 
      />
      <p>Bridal Bouquet</p>
    </div>

    <div className="flower-card">
      <img 
        src="../Images/flower2.jpg" 
        alt="Floral Archway" 
        className="flower-img" 
      />
      <p>Floral Archway</p>
    </div>

    <div className="flower-card">
      <img 
        src="../Images/flower3.jpg" 
        alt="Rustic Table Centerpiece" 
        className="flower-img" 
      />
      <p>Rustic Table Centerpiece</p>
    </div>



    <div className="flower-card">
      <img 
        src="../Images/flower4.jpg" 
        alt="Pastel Rose Decor" 
        className="flower-img" 
      />
      <p>Pastel Rose Decor</p>
    </div>

   
  </div>

  <div className="flower-description">
    <p>
      Flowers do more than just decorate—they express emotions, create ambiance, and bring life to every wedding scene. From the bride’s bouquet to the entrance arch, floral design defines your aesthetic.
    </p>
 
  </div>
</section>

    </div>
  )
}

export default Home
