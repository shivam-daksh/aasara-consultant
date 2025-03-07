import React from 'react';

export const CallToAction: React.FC = () => {
  return (
    <section className="bg-black text-white text-center py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">
          LEADER IN INDUSTRIAL AND WAREHOUSING PROJECTS
        </h2>
        <p className="text-lg mb-8">
          We deliver excellence in every project we undertake.
        </p>
        <a
          href="#contact"
          className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};