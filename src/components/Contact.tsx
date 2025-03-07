import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Visit Us */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover-scale">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <MapPin className="text-blue-600 h-6 w-6" />
              </div>
              <h3 className="text-2xl font-semibold">Visit Our Office</h3>
            </div>
            <p className="text-gray-600 pl-16">
              501, Neelkanth Corporate Park,<br />
              Kirol Road, Vidyavihar (West),<br />
              Mumbai - 400 086
            </p>
          </div>

          {/* Contact Info */}
          <div className="bg-white rounded-xl shadow-lg p-8 hover-scale">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <Phone className="text-blue-600 h-6 w-6" />
              </div>
              <h3 className="text-2xl font-semibold">Get in Touch</h3>
            </div>
            <div className="pl-16 space-y-4">
              <div className="flex items-center">
                <Phone className="text-gray-500 h-4 w-4 mr-3" />
                <a
                  href="tel:+912222035352"
                  className="text-gray-600 hover:text-blue-600"
                >
                  +91-22-22035352
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="text-gray-500 h-4 w-4 mr-3" />
                <a
                  href="mailto:info@karmasrconsultants.com"
                  className="text-gray-600 hover:text-blue-600"
                >
                  info@karmasrconsultants.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};