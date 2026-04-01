export function Navigation() {
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
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#pricing">Pricing</a>
          </li>
          <li>
            <a href="#gallery">Gallery</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <a href="tel:6138070621" className="btn-cta-nav">
          Call Now
        </a>
      </div>
    </nav>
  );
}
