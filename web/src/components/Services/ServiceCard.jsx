export function ServiceCard({ icon, image, title, description }) {
  return (
    <div className="service-card">
      <div className="service-icon">
        <i className={icon}></i>
      </div>
      <img src={image} alt={title} className="service-img" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
