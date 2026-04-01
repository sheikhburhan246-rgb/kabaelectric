export function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <h2 className="section-title">About Kaba Electric</h2>
            <p className="about-text">
              Kaba Electric has established itself as a trusted name in
              residential and commercial electrical services throughout the
              Ottawa area. Our team of licensed and certified electricians is
              committed to delivering safe, reliable, and professional
              electrical solutions tailored to your needs.
            </p>
            <p className="about-text">
              We take pride in our attention to detail, strict adherence to
              safety standards, and dedication to customer satisfaction. Every
              project—big or small—receives the same level of expertise,
              precision, and care.
            </p>
          </div>
          <div className="about-image">
            <img
              src="https://raw.createusercontent.com/bb5f7f91-05aa-4eb5-b83b-025cb9b20efd/"
              alt="Professional Electrician at Work"
              style={{
                display: "block",
                width: "100%",
                height: "600px",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
