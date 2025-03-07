import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselItem {
  image: string;
  category: string;
  title: string;
}

export const Portfolio: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselTrackRef = useRef<HTMLDivElement>(null);
  
  const carouselItems: CarouselItem[] = [
    {
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Industrial Projects",
      title: "HEAVY ENGINEERING PROJECTS"
    },
    {
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Industrial Projects",
      title: "HEAVY ENGINEERING PROJECTS"
    }
  ];

  const totalItems = carouselItems.length;

  const updateCarousel = () => {
    if (carouselTrackRef.current) {
      const offset = -currentIndex * 100;
      carouselTrackRef.current.style.transform = `translateX(${offset}%)`;
    }
  };

  const prevSlide = () => {
    setCurrentIndex(prev => (prev > 0 ? prev - 1 : totalItems - 1));
  };

  const nextSlide = () => {
    setCurrentIndex(prev => (prev < totalItems - 1 ? prev + 1 : 0));
  };

  useEffect(() => {
    updateCarousel();
  }, [currentIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev < totalItems - 1 ? prev + 1 : 0));
    }, 5000);

    return () => clearInterval(interval);
  }, [totalItems]);

  return (
    <section id="gallery" className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Latest Portfolio</h1>
        <div className="relative group max-w-6xl mx-auto">
          {/* Carousel Container */}
          <div className="carousel overflow-hidden rounded-2xl shadow-xl">
            <div ref={carouselTrackRef} className="carousel-track">
              {carouselItems.map((item, index) => (
                <div key={index} className="carousel-item relative">
                  <div className="aspect-video w-full">
                    <img
                      alt={item.title}
                      className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
                      src={item.image}
                      loading="lazy"
                      width="1200"
                      height="675"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 text-white">
                      <div className="bg-yellow-500 text-sm px-4 py-1 rounded-full inline-block mb-2">
                        {item.category}
                      </div>
                      <h3 className="text-2xl font-bold">{item.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-gray-800 text-white w-10 h-10 rounded-full shadow-lg hover:bg-gray-900 transition-colors duration-300 flex items-center justify-center"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-gray-800 text-white w-10 h-10 rounded-full shadow-lg hover:bg-gray-900 transition-colors duration-300 flex items-center justify-center"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};