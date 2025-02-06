"use client"

import { useEffect, useState, useRef, useCallback } from "react";
import Image from "next/image";
<<<<<<< HEAD
import { cn } from "@/lib/utils";
=======
import { cn } from "@/lib/utils"; // Helper for conditional classes
import Event1Image from "../../../../public/assets/Jazbaa/JAZBAA 1.jpg";
import Event2Image from "../../../../public/assets/Jazbaa/JAZBAA 20.jpg";
import Event3Image from "../../../../public/assets/Jazbaa/JAZBAA 3.jpg";
import Event4Image from "../../../../public/assets/Jazbaa/JAZBAA 19.jpg";
import Event5Image from "../../../../public/assets/Jazbaa/JAZBAA 16.jpg";
import Event6Image from "../../../../public/assets/Jazbaa/JAZBAA 6.jpg";
import Event7Image from "../../../../public/assets/Jazbaa/JAZBAA 7.jpg";
import Event8Image from "../../../../public/assets/Jazbaa/JAZBAA 8.jpg";
import Event9Image from "../../../../public/assets/Jazbaa/JAZBAA 13.jpg";
>>>>>>> af3186cd572303b24e4403ad2b2345c37387fc73

// Separate constants and types into their own files
interface ImageData {
  src: string;
  alt: string;
}

// Move this to a separate constants file
const GALLERY_IMAGES: ImageData[] = [
  { src: "/assets/Jazbaa/JAZBAA 1.jpg", alt: "Gallery Image 1" },
  { src: "/assets/Jazbaa/JAZBAA 2.jpg", alt: "Gallery Image 2" },
  { src: "/assets/Jazbaa/JAZBAA 3.jpg", alt: "Gallery Image 3" },
  { src: "/assets/Jazbaa/JAZBAA 4.jpg", alt: "Gallery Image 4" },
  { src: "/assets/Jazbaa/JAZBAA 5.jpg", alt: "Gallery Image 5" },
  { src: "/assets/Jazbaa/JAZBAA 16.jpg", alt: "Gallery Image 6" },
  { src: "/assets/Jazbaa/JAZBAA 7.jpg", alt: "Gallery Image 7" },
  { src: "/assets/Jazbaa/JAZBAA 8.jpg", alt: "Gallery Image 8" },
  { src: "/assets/Jazbaa/JAZBAA 13.jpg", alt: "Gallery Image 9" },
];

const SLIDE_INTERVAL = 3000;
const VISIBLE_IMAGES_COUNT = 5;

export default function OutComeGallary() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Memoized function to get visible images
  const getVisibleImages = useCallback(() => {
    const images = [];
    for (let i = -2; i <= 2; i++) {
      const index = (currentIndex + i + GALLERY_IMAGES.length) % GALLERY_IMAGES.length;
      images.push(GALLERY_IMAGES[index]);
    }
    return images;
  }, [currentIndex]);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % GALLERY_IMAGES.length);
    }, SLIDE_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  // Modal handlers
  const handleImageClick = useCallback((image: ImageData) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedImage(null);
  }, []);

  // Click outside handler
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
      return () => document.removeEventListener("mousedown", handleOutsideClick);
    }
  }, [isModalOpen, closeModal]);

  // Render functions
  const renderGalleryImage = useCallback(({ image, index, isCenter }: { 
    image: ImageData; 
    index: number; 
    isCenter: boolean;
  }) => (
    <div
      key={index}
      className={cn(
        "flex-shrink-0 transition-all duration-500 ease-in-out cursor-pointer",
        isCenter 
          ? "w-80 h-42 border-4 border-red-500" 
          : "mt-6 w-60 h-32 border-none opacity-80 p-2"
      )}
      onClick={() => handleImageClick(image)}
    >
      <Image
        src={image.src}
        alt={image.alt}
        width={isCenter ? 192 : 128}
        height={isCenter ? 192 : 128}
        className="object-cover w-full"
        priority={isCenter}
      />
    </div>
  ), [handleImageClick]);

  const renderModal = () => (
    isModalOpen && selectedImage && (
      <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
        <div ref={modalRef} className="relative max-w-3xl max-h-[90vh] bg-white rounded-md">
          <button
            className="absolute top-2 right-2 text-white font-bold text-xl p-2"
            onClick={closeModal}
            aria-label="Close modal"
          >
            ×
          </button>
          <Image
            src={selectedImage.src}
            alt={selectedImage.alt}
            width={600}
            height={600}
            className="object-contain w-full h-full"
            priority
          />
        </div>
      </div>
    )
  );

  return (
    <div className="flex flex-col bg-black items-center" id="gallery">
      <h2 className="text-4xl font-bold text-white text-center mb-0 mt-12 font-khand">
        <span className="text-[#ff0000]">Glimpse </span>
        of JAZBAA 1.0, JAZBAA 2.0 & JAZBAA 3.0
      </h2>
      
      <div className="relative w-full max-w-6xl flex overflow-hidden justify-center mt-8">
        <div className="flex transition-transform duration-500 ease-in-out">
          {getVisibleImages().map((image, index) => 
            renderGalleryImage({
              image,
              index,
              isCenter: index === 2
            })
          )}
        </div>
      </div>

      <div className="flex space-x-2 my-4">
        {GALLERY_IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              "w-2 h-2 rounded-full border-2 transition-colors",
              index === currentIndex
                ? "bg-red-500 border-red-500"
                : "bg-white border-gray-300"
            )}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>

      {renderModal()}
    </div>
  );
}