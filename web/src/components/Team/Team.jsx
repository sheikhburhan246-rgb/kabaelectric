export function Team() {
  return (
    <section id="team" className="team">
      <div className="container">
        <h2 className="section-title">Meet Our Team</h2>
        <div
          className="team-content"
          style={{ maxWidth: "900px", margin: "0 auto", marginTop: "40px" }}
        >
          <div
            style={{
              backgroundColor: "#1a1a1a",
              padding: "40px",
              borderRadius: "12px",
              border: "1px solid #333",
            }}
          >
            <h3
              style={{
                color: "#ffd700",
                fontSize: "1.8rem",
                marginBottom: "20px",
                fontWeight: "bold",
              }}
            >
              Abdel-ouahed Kabassa
            </h3>
            <p
              style={{
                color: "#e0e0e0",
                fontSize: "1rem",
                marginBottom: "10px",
              }}
            >
              <strong style={{ color: "#ffd700" }}>
                Co-owner & Master Licensed Electrician
              </strong>
            </p>
            <p
              style={{
                color: "#b0b0b0",
                fontSize: "1rem",
                lineHeight: "1.8",
                marginBottom: "15px",
              }}
            >
              Co-owner Abdel-ouahed Kabassa is a Master Licensed Electrician who
              is originally from Morocco. He speaks four languages: French,
              English, German, and Arabic.
            </p>
            <p
              style={{
                color: "#b0b0b0",
                fontSize: "1rem",
                lineHeight: "1.8",
                marginBottom: "15px",
              }}
            >
              He graduated as an electrical and automation engineer in Germany
              in 2004. Years later, he moved to Canada. He also obtained an AEC
              diploma in electrical and electronics from Collège Montmorency in
              Quebec.
            </p>
            <p
              style={{ color: "#b0b0b0", fontSize: "1rem", lineHeight: "1.8" }}
            >
              When Abdel isn't working at the job site, he enjoys spending time
              with his wife, Marie France, and kids, golfing, swimming, and
              traveling.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
