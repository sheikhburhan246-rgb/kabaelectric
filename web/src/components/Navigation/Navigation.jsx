export function Navigation() {
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <div className="logo-container">
          <img
            src="https://ucarecdn.com/ceab01f3-3961-42e4-b78d-4b1a5abd1454/-/format/auto/"
            alt="Kaba Electric Logo"
            className="logo-img"
          />
          <div className="logo-text">Kaba Electric</div>
        </div>
        <ul className="nav-menu">
          <li>
            <a href="#home" onClick={(e) => handleNavClick(e, 'home')}>Home</a>
          </li>
          <li>
            <a href="#services" onClick={(e) => handleNavClick(e, 'services')}>Services</a>
          </li>
          <li>
            <a href="#about" onClick={(e) => handleNavClick(e, 'about')}>About</a>
          </li>
          <li>
            <a href="#pricing" onClick={(e) => handleNavClick(e, 'pricing')}>Pricing</a>
          </li>
          <li>
            <a href="#gallery" onClick={(e) => handleNavClick(e, 'gallery')}>Gallery</a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a>
          </li>
        </ul>
        <a href="tel:6138070621" className="btn-cta-nav">
          Call Now
        </a>
      </div>
    </nav>
  );
}
