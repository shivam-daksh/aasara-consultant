import React from 'react';

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold">WHY CHOOSE US!</h1>
      </div>
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white shadow-md rounded-lg overflow-hidden hover-scale">
          <div className="p-6">
            <h2 className="text-xl font-bold mb-2">
              AASARACONSULTANT - The Synonym for Industrial Project Experts
            </h2>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 mb-4 md:mb-0">
                <img
                  alt="Image of an industrial warehouse with machinery and equipment"
                  className="w-full h-auto rounded-lg"
                  src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                />
              </div>
              <div className="md:w-2/3 md:pl-6">
                <p className="text-gray-700 mb-4">
                  <b>AASARACONSULTANT</b> works closely with clients to
                  understand their needs and provide customized solutions that
                  meet their requirements.
                </p>
                <button
                  className="bg-yellow-500 text-white font-bold py-2 px-4 rounded hover:bg-yellow-600 transition-colors"
                >
                  More About Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};