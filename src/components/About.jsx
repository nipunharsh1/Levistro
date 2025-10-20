import './About.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="section-title">About Levistro</h2>
        <div className="about-content">
          <div className="about-card">
            <div className="card-icon">🎯</div>
            <h3>Our Mission</h3>
            <p>
              To deliver exceptional products that combine quality, innovation, 
              and style for the modern lifestyle.
            </p>
          </div>
          <div className="about-card">
            <div className="card-icon">💎</div>
            <h3>Our Values</h3>
            <p>
              We believe in excellence, sustainability, and creating lasting 
              relationships with our customers.
            </p>
          </div>
          <div className="about-card">
            <div className="card-icon">🚀</div>
            <h3>Our Vision</h3>
            <p>
              To be the leading brand recognized for premium quality and 
              customer satisfaction worldwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
