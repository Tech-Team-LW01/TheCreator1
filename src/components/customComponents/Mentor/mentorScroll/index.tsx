



"use client";

import { PlacementCard, CardData } from './card';
import { Rays } from './rays';
import { Beams } from './beams';
import { useState, useRef } from "react";
import { Lens } from "../../../ui/lens";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image1 from "../../../../../public/assets/Mentor/1.jpg";
import Image2 from "../../../../../public/assets/Mentor/2.jpg";
import tedx from "../../../../../public/assets/Mentor/tedx.jpg";
import Image3 from "../../../../../public/assets/Mentor/3.jpg";
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Import icons

import { Inter,Poppins } from 'next/font/google'
const poppins = Poppins({
   subsets: ['latin'],
   weight: ['400']
})

export function MentorScroll() {
  const [hoveringStates, setHoveringStates] = useState(Array(9).fill(false));
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleHover = (index: number, isHovering: boolean) => {
    const newHoveringStates = [...hoveringStates];
    newHoveringStates[index] = isHovering;
    setHoveringStates(newHoveringStates);
  };

  const cardData: CardData[] = [
    {
      title: "Worked with Creators",
      description: "Closely worked associated with the Founders & Creators of technologies. So learn the right approach clear your myths with the right mentor",
      imageUrl: Image1.src
    },
    {
      title: "The World Record Holder",
      description: "The First One Only One in the World to achieve RedHat Certified Architect Level 25 with Enterprise Application Level 11",
      imageUrl: Image2.src
    },
    {
      title: "Awarded as 1",
      description: "Applauded Globally for his contribution towards the Engineering Community for the last 21 years & popularly known as Tech Guru of India",
      imageUrl: Image3.src
    },
    {
      title: "TedX Speaker",
      description: "First we have to create them, then Indian Engineering Students will be The Creator in technology space for our Nation",
      imageUrl: tedx.src
    },
    // Add 5 more cards with similar or different content
    {
      title: "Innovation Leader",
      description: "Leading innovation in technology education and mentoring future tech leaders",
      imageUrl: Image1.src
    },
    {
      title: "Global Educator",
      description: "Reaching students across the globe with cutting-edge technical education",
      imageUrl: Image2.src
    },
    {
      title: "Tech Visionary",
      description: "Shaping the future of technology education with innovative approaches",
      imageUrl: Image3.src
    },
    {
      title: "Community Builder",
      description: "Building strong tech communities and fostering collaboration",
      imageUrl: tedx.src
    },
    {
      title: "Digital Pioneer",
      description: "Pioneering new methods in digital education and technical training",
      imageUrl: Image1.src
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -800 : 800;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className='relative'>
      <div className="container max-w-6xl mx-auto px-4 py-8 md:py-4 lg:py-4">
        <div className="text-center mb-4">
          <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold text-white mb-4 ">
            <span className='text-[#ff0000]'>World Record Holder - </span> Mr Vimal Daga
          </h1>
        </div>

        {/* Navigation Buttons */}
        <button 
          onClick={() => scroll('left')} 
          className="absolute left-2 top-1/2 z-30 bg-white/30 hover:bg-white/50 rounded-full p-2 transform -translate-y-1/2"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button 
          onClick={() => scroll('right')} 
          className="absolute right-2 top-1/2 z-30 bg-white/30 hover:bg-white/50 rounded-full p-2 transform -translate-y-1/2"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Carousel Container */}
        <div 
          ref={scrollRef}
          className="overflow-x-auto scrollbar-hide"
          style={{
            scrollSnapType: 'x mandatory',
            scrollBehavior: 'smooth'
          }}
        >
          <div className="flex gap-4 min-w-max px-4">
            {cardData.map((card, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="w-[300px] flex-shrink-0 relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#1D2235] to-[#121318] p-2"
                style={{ scrollSnapAlign: 'start' }}
              >
                <Rays />
                <Beams />
                <div className="relative z-10">
                  <Lens 
                    hovering={hoveringStates[index]}
                    setHovering={(isHovering) => handleHover(index, isHovering)}
                  >
                    <div className="pb-[75%] w-full relative rounded-xl overflow-hidden">
                      <Image
                        src={card.imageUrl}
                        alt={card.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority
                        className="rounded-xl object-cover absolute top-0 left-0"
                      />
                    </div>
                  </Lens>
                  <div className="py-2 px-2 relative z-20">
                    <h2 className={`text-white text-lg font-bold ${poppins.className}`}>
                      {card.title}
                    </h2>
                    <p className={`text-neutral-200 mt-1 text-sm ${poppins.className}`}>
                      {card.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Add custom scrollbar styles */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}