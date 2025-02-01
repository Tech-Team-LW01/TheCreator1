import React from 'react';
import { BentoGrid } from 'react-bento';

const BentoGallery = () => {
  const bentoItems = [
    {
      id: 1,
      title: "Settings Menu",
      element: (
        <div className="w-full h-full relative">
          <img 
            src="/api/placeholder/300/300" 
            alt="Settings menu"
            className="w-full h-full object-cover" 
          />
        </div>
      ),
      width: 2,
      height: 2,
    },
    {
      id: 2,
      title: "Email Preview",
      element: (
        <div className="w-full h-full relative">
          <img 
            src="/api/placeholder/400/200" 
            alt="Email preview"
            className="w-full h-full object-cover"
          />
        </div>
      ),
      width: 3,
      height: 2,
    },
    {
      id: 3,
      title: "Today's Recap",
      element: (
        <div className="w-full h-full relative">
          <img 
            src="/api/placeholder/200/200" 
            alt="Today's recap"
            className="w-full h-full object-cover"
          />
        </div>
      ),
      width: 2,
      height: 2,
    },
    {
      id: 4,
      title: "Adidas Card",
      element: (
        <div className="w-full h-full relative">
          <img 
            src="/api/placeholder/200/200" 
            alt="Adidas promotion"
            className="w-full h-full object-cover"
          />
        </div>
      ),
      width: 2,
      height: 3,
    },
    {
      id: 5,
      title: "Hello Luna",
      element: (
        <div className="w-full h-full relative">
          <img 
            src="/api/placeholder/600/300" 
            alt="Hello Luna notification"
            className="w-full h-full object-cover"
          />
        </div>
      ),
      width: 4,
      height: 3,
    },
    {
      id: 6,
      title: "House Listing",
      element: (
        <div className="w-full h-full relative">
          <img 
            src="/api/placeholder/300/300" 
            alt="House listing preview"
            className="w-full h-full object-cover"
          />
        </div>
      ),
      width: 2,
      height: 3,
    },
    {
      id: 7,
      title: "Partnership Email",
      element: (
        <div className="w-full h-full relative">
          <img 
            src="/api/placeholder/400/200" 
            alt="Partnership email"
            className="w-full h-full object-cover"
          />
        </div>
      ),
      width: 3,
      height: 2,
    },
    {
      id: 8,
      title: "Circular Logos",
      element: (
        <div className="w-full h-full relative">
          <img 
            src="/api/placeholder/300/200" 
            alt="Logo preview"
            className="w-full h-full object-cover"
          />
        </div>
      ),
      width: 2,
      height: 2,
    },
    {
      id: 9,
      title: "Inbox Interface",
      element: (
        <div className="w-full h-full relative">
          <img 
            src="/api/placeholder/300/200" 
            alt="Inbox interface"
            className="w-full h-full object-cover"
          />
        </div>
      ),
      width: 2,
      height: 2,
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto min-h-screen bg-black p-0">
      {/* Main Heading */}
      <div className="w-full text-center py-6">
        <h1 className="text-3xl font-bold text-white ">
          Bento Grid Gallery
        </h1>
        <p className="text-gray-400 text-lg">
          A modern layout showcase
        </p>
      </div>

      {/* Bento Grid */}
      <BentoGrid
        items={bentoItems}
        gridCols={8}
        rowHeight={80}
        classNames={{
          container: "max-w-full mx-auto",
          elementContainer: "bg-zinc-900 rounded-none gap-0 overflow-hidden hover:opacity-90 transition-opacity duration-300", 
        }}
      />

      {/* Optional: Add hover effect and title overlay for each item */}
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
          background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
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

export default BentoGallery;