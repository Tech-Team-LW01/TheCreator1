import React, { useState, useEffect } from "react";
import { BentoGrid } from "react-bento";
import { motion, AnimatePresence } from "framer-motion";
import { Inter, Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

// Define props for ImageCycler
interface ImageCyclerProps {
  images: string[];
  interval?: number;
  transitionDuration?: number;
}

// ImageCycler Component
const ImageCycler: React.FC<ImageCyclerProps> = ({
  images,
  interval = 2000,
  transitionDuration = 1,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

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
          className="w-full h-full object-cover absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: transitionDuration }}
        />
      </AnimatePresence>
    </div>
  );
};

// Define a type for each item in the BentoGrid
interface BentoItem {
  id: number;
  title: string;
  images: string[];
  width: number;
  height: number;
  interval: number;
  transitionDuration: number;
}

// Define props for MobileGallery
interface MobileGalleryProps {
  bentoItems: BentoItem[];
}

// MobileGallery Component
const MobileGalleryFrame: React.FC<MobileGalleryProps> = ({ bentoItems }) => {
  return (
    <div className="w-full max-w-7xl mx-auto min-h-screen bg-black p-0">
      {/* Main Heading */}
      <div className="w-full text-center py-6">
        <h1 className="text-3xl md:text-4xl font-bold text-[#ff0000]" id="Preivous">
          Previous Summer 2024
        </h1>
        <p className={`text-white text-sm md:text-3xl ${poppins.className}`}>
          See How Engineering Students From Across India Are Learning Together
        </p>
      </div>

      {/* Bento Grid */}
      <BentoGrid
        items={bentoItems.map((item) => ({
          ...item,
          element: (
            <ImageCycler
              images={item.images}
              interval={item.interval}
              transitionDuration={item.transitionDuration}
            />
          ),
        }))}
        gridCols={8}
        rowHeight={80}
        classNames={{
          container: "max-w-full mx-auto gap-2",
          elementContainer:
            "bg-white rounded-none gap-0 p-1 gap-2  overflow-hidden hover:opacity-90 transition-opacity duration-300",
        }}
      />

      {/* Global Styles */}
      <style jsx global>{`
        .bento-item {
          position: relative;
        }

        .bento-item::after {
          content: attr(data-title);
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 1rem;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
          color: white;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .bento-item:hover::after {
          opacity: 1;
        }

        .bento-item img {
          transition: transform 0.3s ease;
        }

        .bento-item:hover img {
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
};

export default MobileGalleryFrame;
