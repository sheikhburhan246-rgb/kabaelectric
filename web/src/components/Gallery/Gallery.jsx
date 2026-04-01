import { GalleryItem } from "./GalleryItem";

const galleryData = [
  {
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&h=400&fit=crop",
    title: "Panel Upgrade",
  },
  {
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
    title: "Lighting Design",
  },
  {
    image:
      "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=600&h=400&fit=crop",
    title: "EV Charger Setup",
  },
  {
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop",
    title: "Commercial Install",
  },
  {
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&h=400&fit=crop",
    title: "Home Rewiring",
  },
  {
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&h=400&fit=crop",
    title: "Outdoor Lighting",
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <h2 className="section-title">Our Recent Work</h2>
        <p className="section-subtitle">
          Quality electrical installations and repairs
        </p>

        <div className="gallery-grid">
          {galleryData.map((item, index) => (
            <GalleryItem key={index} image={item.image} title={item.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
