export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-section">
          <img
            src="https://ucarecdn.com/865e3662-3b9f-49de-8cfb-d81cfa8baa08/-/format/auto/"
            alt="Kaba Electric"
            className="footer-logo"
          />
          <h3>Kaba Electric</h3>
          <p>Your trusted electrical partner for safe, reliable service.</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#gallery">Gallery</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact Info</h4>
          <p>
            <i className="fas fa-phone"></i> 613-807-0621
          </p>
          <p>
            <i className="fas fa-envelope"></i> kabaelectric@gmail.com
          </p>
          <p>
            <i className="fas fa-map-marker-alt"></i> 900 Dynes Rd, Ottawa
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; 2024 Kaba Electric. All Rights Reserved. Licensed & Insured.
        </p>
      </div>
    </footer>
  );
}
