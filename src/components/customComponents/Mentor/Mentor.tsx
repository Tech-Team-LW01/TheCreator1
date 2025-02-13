import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400']
});

const ImageCycler = ({ images, interval = 2000, transitionDuration = 1 }: { images: string[], interval?: number, transitionDuration?: number }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="w-full h-full relative">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt="Cycling image"
          className="w-full h-full object-cover absolute inset-0 rounded-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: transitionDuration }}
        />
      </AnimatePresence>
    </div>
  );
};

const BentoGallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      squares: [
        {
          id: 1,
          images: ["/assets/event-gallery/G28.jpg", "/assets/event-gallery/G27.jpg"],
        },
        {
          id: 2,
          images: ["/assets/event-gallery/G26.jpeg", "/assets/event-gallery/G25.jpeg"],
        }
      ],
      rectangle: {
        id: 3,
        images: ["/assets/event-gallery/G24.jpg", "/assets/event-gallery/G23.jpg"],
      }
    },
    {
      squares: [
        {
          id: 4,
          images: ["/assets/event-gallery/G22.jpg", "/assets/event-gallery/G21.jpg"],
        },
        {
          id: 5,
          images: ["/assets/event-gallery/G20.jpg", "/assets/event-gallery/G19.jpg"],
        }
      ],
      rectangle: {
        id: 6,
        images: ["/assets/event-gallery/G18.jpg", "/assets/event-gallery/G17.jpg"],
      }
    },
    {
      squares: [
        {
          id: 7,
          images: ["/assets/event-gallery/G16.jpeg", "/assets/event-gallery/G15.jpg"],
        },
        {
          id: 8,
          images: ["/assets/event-gallery/G14.jpeg", "/assets/event-gallery/G13.jpg"],
        }
      ],
      rectangle: {
        id: 9,
        images: ["/assets/event-gallery/G12.jpg", "/assets/event-gallery/G11.jpeg"],
      }
    }
  ];

  // Auto-swipe effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="w-full min-h-screen bg-black p-4">
      {/* Header */}
      <div className="w-full text-center mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-[#ff0000]" id="Previous">
          Previous Summer 2024
        </h1>
        <p className={`text-white text-sm md:text-3xl ${poppins.className}`}>
          See How Engineering Students From Across India Are Learning Together
        </p>
      </div>

      {/* Mobile Gallery */}
      <div className="md:hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            {/* Rectangle Box */}
            <div className="w-full aspect-[2/1] bg-gray-900 rounded-lg p-2">
              <ImageCycler 
                images={slides[currentSlide].rectangle.images} 
                interval={5000} 
              />
            </div>

            {/* Two Square Boxes */}
            <div className="grid grid-cols-2 gap-4">
              {slides[currentSlide].squares.map((square) => (
                <div 
                  key={square.id} 
                  className="aspect-square bg-gray-900 rounded-lg p-2"
                >
                  <ImageCycler 
                    images={square.images} 
                    interval={5000} 
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Slide Indicators */}
        <div className="flex justify-center space-x-2 mt-4">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                currentSlide === index ? 'bg-white' : 'bg-gray-600'
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>

      {/* Desktop Gallery (hidden on mobile) */}
      <div className="hidden md:block">
        {/* Your existing desktop gallery layout */}
      </div>
    </div>
  );
};

export default BentoGallery;