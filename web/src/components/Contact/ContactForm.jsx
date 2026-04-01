export function ContactForm() {
  return (
    <div className="contact-form-container">
      <form className="contact-form">
        <div className="form-group">
          <input type="text" placeholder="Your Name" required />
        </div>
        <div className="form-group">
          <input type="email" placeholder="Your Email" required />
        </div>
        <div className="form-group">
          <input type="tel" placeholder="Your Phone" required />
        </div>
        <div className="form-group">
          <textarea
            rows="5"
            placeholder="Tell us about your project..."
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-submit">
          <i className="fas fa-paper-plane"></i> Send Message
        </button>
      </form>
    </div>
  );
}
