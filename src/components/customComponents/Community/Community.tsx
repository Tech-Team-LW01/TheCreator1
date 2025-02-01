import React, { useEffect, useState } from 'react';
import { OurAlumniWorksAtCarousel } from "../../ui2/OurAlumniWorksAtCarousel";

const Community = () => {
  const [position, setPosition] = useState(0);
  

  const logos = [
    { image: '/assets/collogelogo/AIETM.jaipur.jpeg' },
    { image: '/assets/collogelogo/AIETM.jaipur.jpeg' },
    { image: '/assets/collogelogo/AIETM.jaipur.jpeg' },
    { image: '/assets/collogelogo/AIETM.jaipur.jpeg' },
    { image: '/assets/collogelogo/AIETM.jaipur.jpeg' },
    { image: '/assets/collogelogo/AIETM.jaipur.jpeg' },
    { image: '/assets/collogelogo/AIETM.jaipur.jpeg' },
    { image: '/assets/collogelogo/AIETM.jaipur.jpeg' },
    { image: '/assets/collogelogo/AIETM.jaipur.jpeg' },
    { image: '/assets/collogelogo/AIETM.jaipur.jpeg' },
    { image: '/assets/collogelogo/AIETM.jaipur.jpeg' },
    { image: '/assets/collogelogo/PVC,mumbai.jpeg' },
    { image: '/assets/collogelogo/RBS,Agra.jpeg' },
    { image: '/assets/collogelogo/UIET.MOU.Rohthak.jpeg' },
    { image: '/assets/collogelogo/UPES,dehradun.jpeg' },
    { image: '/assets/collogelogo/VIT,Pune.jpeg' },
  ];

  useEffect(() => {
    const animate = () => {
      setPosition((prevPosition) => {
        if (prevPosition <= -100 * (logos.length - 5)) {
          return 0;
        }
        return prevPosition - 0.9;
      });
    };

    const animationFrame = setInterval(animate, 50);
    return () => clearInterval(animationFrame);
  }, [logos.length]);

  return (
    <div className="w-full max-w-full mx-auto overflow-hidden bg-white p-8">
      <h1 className="text-3xl font-bold text-[#ff0000] text-center mb-8">
        Our College Community
      </h1>
      {/* First row - Moving Left */}
      <div className="flex flex-col items-center justify-center bg-white  relative overflow-hidden mt-6">
        <OurAlumniWorksAtCarousel
          items={logos}
          direction="left"
          speed="slow"
          cardWidth={150}
          cardHeight={80}
        />
      </div>

    
    </div>
  );
};

export default Community;
