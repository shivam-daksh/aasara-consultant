import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} AASARA CONSULTANTS. All rights reserved.</p>
      </div>
    </footer>
  );
};