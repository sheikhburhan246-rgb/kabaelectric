import { ServiceCard } from "./ServiceCard";

const servicesData = [
  {
    icon: "fas fa-home",
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=500&h=300&fit=crop",
    title: "Residential Wiring",
    description:
      "Complete home electrical installations, rewiring, and upgrades to meet modern safety standards.",
  },
  {
    icon: "fas fa-bolt",
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=500&h=300&fit=crop",
    title: "Panel Upgrades",
    description:
      "Upgrade your electrical panel to handle increased power demands safely and efficiently.",
  },
  {
    icon: "fas fa-lightbulb",
    image:
      "https://ucarecdn.com/15e121bf-cff1-427d-a37d-09f0255652bf/-/format/auto/",
    title: "Lighting Installation",
    description:
      "Expert installation of indoor and outdoor lighting systems, LED upgrades, and smart lighting.",
  },
  {
    icon: "fas fa-tools",
    image:
      "https://ucarecdn.com/881571cf-a523-4740-98d5-dc63b213bf6c/-/format/auto/",
    title: "Electrical Repairs",
    description:
      "Fast and reliable troubleshooting and repair of all electrical issues in your property.",
  },
  {
    icon: "fas fa-charging-station",
    image:
      "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=500&h=300&fit=crop",
    title: "EV Charger Installation",
    description:
      "Professional installation of electric vehicle charging stations for your home or business.",
  },
  {
    icon: "fas fa-clock",
    image:
      "https://raw.createusercontent.com/1c1beb9b-4115-4c84-99ff-761bf7152d04/",
    title: "24/7 Emergency Services",
    description:
      "Round-the-clock emergency electrical services when you need us most.",
  },
];

export function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">Our Expert Services</h2>
        <p className="section-subtitle">
          Professional electrical solutions for residential and commercial needs
        </p>

        <div className="services-grid">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              image={service.image}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
