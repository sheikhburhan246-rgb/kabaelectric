import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export function ContactForm() {
  const formRef = useRef();
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.sendForm(
        "service_5ha438d",
        "template_fknn6im",
        formRef.current,
        "Bks3Y_roBBcdFu-4J"
      );
      setStatus("success");
      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
    }
  };

  return (
    <div className="contact-form-container">
      <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
        <div className="form-group">
          <input type="text" name="from_name" placeholder="Your Name" required />
        </div>
        <div className="form-group">
          <input type="email" name="from_email" placeholder="Your Email" required />
        </div>
        <div className="form-group">
          <input type="tel" name="phone" placeholder="Your Phone" required />
        </div>
        <div className="form-group">
          <textarea
            name="message"
            rows="5"
            placeholder="Tell us about your project..."
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-submit" disabled={status === "sending"}>
          <i className="fas fa-paper-plane"></i>{" "}
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>

        {status === "success" && (
          <p style={{ color: "green", marginTop: "10px" }}>
            ✅ Message sent! We'll be in touch soon.
          </p>
        )}
        {status === "error" && (
          <p style={{ color: "red", marginTop: "10px" }}>
            ❌ Something went wrong. Please try again or call us directly.
          </p>
        )}
      </form>
    </div>
  );
}
