import React from 'react';
import { Cog as Cogs, Eye, Users } from 'lucide-react';

export const MissionVision: React.FC = () => {
  return (
    <section id="about" className="bg-gray-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="hover-scale p-6 rounded-lg bg-gray-700">
            <Cogs className="mx-auto h-16 w-16 mb-4 text-blue-500" />
            <h3 className="text-2xl font-bold mb-4">OUR MISSION</h3>
            <p className="text-gray-300">
              To form partnership resulting in innovative, cost effective and
              quality construction, exceeding our customer's expectation in a
              safe environment.
            </p>
          </div>
          <div className="hover-scale p-6 rounded-lg bg-gray-700">
            <Eye className="mx-auto h-16 w-16 mb-4 text-blue-500" />
            <h3 className="text-2xl font-bold mb-4">OUR VISION</h3>
            <p className="text-gray-300">
              To be the most preferred and trusted design & engineering
              consultant for the engineering services.
            </p>
          </div>
          <div className="hover-scale p-6 rounded-lg bg-gray-700">
            <Users className="mx-auto h-16 w-16 mb-4 text-blue-500" />
            <h3 className="text-2xl font-bold mb-4">OUR CORE VALUES</h3>
            <p className="text-gray-300">
              Client Satisfaction<br />Trust & Reliability<br />Accountability<br />Integrity
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};