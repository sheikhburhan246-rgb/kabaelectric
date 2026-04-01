export function Location() {
  return (
    <section id="location" className="location">
      <div className="container">
        <h2 className="section-title">Find Us</h2>
        <div
          style={{
            marginTop: "30px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <iframe
            title="Ottawa Service Area"
            src="https://www.google.com/maps?q=Ottawa,+ON,+Canada&output=embed&z=9"
            width="100%"
            height="400"
            style={{ border: 0, borderRadius: "12px", maxWidth: "900px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div
          style={{ textAlign: "center", marginTop: "20px", color: "#b0b0b0" }}
        >
          <p style={{ fontSize: "1.1rem" }}>
            <i
              className="fas fa-map-marker-alt"
              style={{ color: "#ffd700", marginRight: "10px" }}
            ></i>
            Area we serve: 100 km surrounding Ottawa
          </p>
        </div>
      </div>
    </section>
  );
}
