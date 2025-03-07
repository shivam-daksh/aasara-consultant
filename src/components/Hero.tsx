import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative h-[500px] flex items-center justify-center"
    >
      <img
        src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        alt="Industrial warehouse with machinery and equipment"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 gradient-overlay"></div>
      <div className="relative text-center text-white px-4">
        <h1 className="text-5xl font-bold mb-4">Building the Future</h1>
        <p className="text-xl mb-8">
          Innovative, cost-effective, and quality construction solutions.
        </p>
        <a
          href="#services"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Explore Services
        </a>
      </div>
    </section>
  );
};