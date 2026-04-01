export function GalleryItem({ image, title }) {
  return (
    <div className="gallery-item">
      <img src={image} alt={title} />
      <div className="gallery-overlay">
        <h4>{title}</h4>
      </div>
    </div>
  );
}
