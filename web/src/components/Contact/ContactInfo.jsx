export function ContactInfo() {
  return (
    <div className="contact-info">
      <div className="contact-item">
        <div className="contact-icon">
          <i className="fas fa-phone"></i>
        </div>
        <div>
          <h4>Phone</h4>
          <a href="tel:6138070621">613-807-0621</a>
        </div>
      </div>

      <div className="contact-item">
        <div className="contact-icon">
          <i className="fas fa-envelope"></i>
        </div>
        <div>
          <h4>Email</h4>
          <a href="mailto:kabaelectric@gmail.com">kabaelectric@gmail.com</a>
        </div>
      </div>

      <div className="contact-item">
        <div className="contact-icon">
          <i className="fas fa-map-marker-alt"></i>
        </div>
        <div>
          <h4>Address</h4>
          <p>
            900 Dynes Rd
            <br />
            Ottawa, ON
          </p>
        </div>
      </div>

      <div className="contact-item">
        <div className="contact-icon">
          <i className="fas fa-clock"></i>
        </div>
        <div>
          <h4>Business Hours</h4>
          <p>
            Monday - Friday: 7:00 AM - 6:00 PM
            <br />
            Saturday: 8:00 AM - 4:00 PM
            <br />
            Sunday: Emergency Calls Only
          </p>
        </div>
      </div>
    </div>
  );
}
