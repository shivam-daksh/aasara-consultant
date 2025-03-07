import React from 'react';

interface ServiceCardProps {
  image: string;
  title: string;
  category: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ image, title, category, description }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl shadow-lg hover-scale transition-all duration-300">
      <div className="aspect-[4/3] w-full">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
          width="600"
          height="450"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <div className="mb-2 inline-block rounded-full bg-yellow-500 px-4 py-1 text-sm font-semibold">
          {category}
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-1 text-sm opacity-90">{description}</p>
      </div>
    </div>
  );
};

export const Services: React.FC = () => {
  const services = [
    {
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2089&q=80",
      title: "Architectural Solutions",
      category: "Design & Build",
      description: "Innovative designs blending functionality with aesthetic excellence"
    },
    {
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Structural",
      category: "Design & Build",
      description: "Innovative designs blending functionality with aesthetic excellence"
    },
    {
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      title: "Civil",
      category: "Design & Build",
      description: "Innovative designs blending functionality with aesthetic excellence"
    },
    {
      image: "https://images.unsplash.com/photo-1581092921461-39b9d08a9b2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Electrical",
      category: "Design & Build",
      description: "Innovative designs blending functionality with aesthetic excellence"
    },
    {
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Mechanical",
      category: "Design & Build",
      description: "Innovative designs blending functionality with aesthetic excellence"
    },
    {
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Construction Design",
      category: "Design & Build",
      description: "Innovative designs blending functionality with aesthetic excellence"
    }
  ];

  return (
    <section id="services" className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-center text-4xl font-bold mb-12">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              image={service.image}
              title={service.title}
              category={service.category}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};