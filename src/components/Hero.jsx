import './Hero.css';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Welcome to Levistro</h1>
        <p className="hero-subtitle">
          Experience Premium Quality and Timeless Elegance
        </p>
        <p className="hero-description">
          Discover our carefully curated collection of products designed to elevate your lifestyle
        </p>
        <button className="hero-button">Explore Our Collection</button>
      </div>
    </section>
  );
}

export default Hero;
