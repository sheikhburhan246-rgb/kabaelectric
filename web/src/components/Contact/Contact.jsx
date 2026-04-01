import { ContactInfo } from "./ContactInfo";
import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Ready to start your project? Contact us today for a free quote!
        </p>

        <div className="contact-grid">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
