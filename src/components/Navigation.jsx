import './Navigation.css';

function Navigation() {
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-logo">
          <h2>LEVISTRO</h2>
        </div>
        <ul className="nav-menu">
          <li><a href="#home" onClick={(e) => scrollToSection(e, 'home')}>Home</a></li>
          <li><a href="#about" onClick={(e) => scrollToSection(e, 'about')}>About</a></li>
          <li><a href="#products" onClick={(e) => scrollToSection(e, 'products')}>Products</a></li>
          <li><a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
