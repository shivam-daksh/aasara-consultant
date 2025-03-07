import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialProps {
  logo: string;
  company: string;
  testimonial: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ logo, company, testimonial }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover-scale p-8 transition-all duration-300">
      <div className="flex items-start mb-6">
        <img
          alt={`${company} logo`}
          className="w-16 h-16 object-contain mr-6"
          src={logo}
        />
        <div>
          <h3 className="text-xl font-bold mb-2">{company}</h3>
          <div className="flex text-yellow-500 space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-current" />
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-600 italic border-l-4 border-blue-500 pl-4">
        "{testimonial}"
      </p>
    </div>
  );
};

export const Clients: React.FC = () => {
  const testimonials = [
    {
      logo: "https://storage.googleapis.com/a1aa/image/WIlXxm-wWNyCP1V_5r28nN_tR0l9vvGah8m_T5_SK68.jpg",
      company: "CANPACK INDIA LIMITED",
      testimonial: "We appreciate KSICPL for completion of its assignment in the time frame given and looking forward for a healthy business relationship in future."
    },
    {
      logo: "https://storage.googleapis.com/a1aa/image/i2-Fcdnz_u7FjLLPedzXdaklc_abS97TezeqYkThzp8.jpg",
      company: "NRB INDUSTRIAL BEARINGS LTD.",
      testimonial: "Ms. Kamra SK Consultants Pvt. Ltd. has successfully completed our project at Aurangabad to our fullest satisfaction and we look forward to have longer association in all our future project requirements."
    }
  ];

  const clientLogos = [
    "https://storage.googleapis.com/a1aa/image/iFYKgvB-SKn9xkqaU4kJ4McJ4NZmLW_JyL6LcHV7KMQ.jpg",
    "https://storage.googleapis.com/a1aa/image/mCvFUzbbgahc_hDL6U4QjskN2eXztKRGPI6u6wHqYsw.jpg",
    "https://storage.googleapis.com/a1aa/image/adpeDKxuXqBNS5pFsG11D8nYUkuqJ2CN_OzaRsfBE9s.jpg",
    "https://storage.googleapis.com/a1aa/image/HvEuvFNFKbiE3ZoWxCImOrO0isl8BBL3ILGpjFw8h7E.jpg",
    "https://storage.googleapis.com/a1aa/image/S5nY9CzKAC7Dfo0rKNYBfp_G6ybFf3Wr5R91nxE6Ffo.jpg"
  ];

  return (
    <section id="clients" className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">
          Client Testimonials
        </h1>
        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              logo={testimonial.logo}
              company={testimonial.company}
              testimonial={testimonial.testimonial}
            />
          ))}
        </div>

        {/* Client Logos */}
        <div className="bg-white rounded-2xl shadow-md p-8">
          <h3 className="text-center text-xl font-semibold mb-8">
            Trusted By Industry Leaders
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-75 hover:opacity-100 transition-opacity">
            {clientLogos.map((logo, index) => (
              <img
                key={index}
                alt={`Client logo ${index + 1}`}
                className="h-12 w-auto object-contain"
                src={logo}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};