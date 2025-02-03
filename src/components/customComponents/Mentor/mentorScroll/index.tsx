// "use client";
 
// import { PlacementCard, CardData } from './card';
// import { Rays } from './rays';
// import { Beams } from './beams';
// import { useState } from "react";
// import { Lens } from "../../../ui/lens";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { cn } from "@/lib/utils";
// import Image1 from "../../../../../public/assets/Mentor/1.jpg";
// import Image2 from "../../../../../public/assets/Mentor/2.jpg";
// import tedx from "../../../../../public/assets/Mentor/tedx.jpg";
// import Image3 from "../../../../../public/assets/Mentor/3.jpg";

// export function MentorScroll() {
//   // Create separate hovering state for each card
//   const [hoveringStates, setHoveringStates] = useState([false, false, false, false]);

//   // Function to update hovering state for a specific card
//   const handleHover = (index: number, isHovering: boolean) => {
//     const newHoveringStates = [...hoveringStates];
//     newHoveringStates[index] = isHovering;
//     setHoveringStates(newHoveringStates);
//   };

//   // Card data

  


  

//   const cardData: CardData[] = [
//     {
//       title: "Worked with Creators",
//       description: "Closely worked  associated with the Founders & Creators of technologies. So learn the right approach  clear your myths with the right mentor",
//       imageUrl: Image1.src
//     },
//     {
//         title: "The World Record Holder",
//         description: "The First One  Only One in the World to achieve RedHat Certified Architect Level 25 with Enterprise Application Level 11",
//         imageUrl: Image2.src
//       },





//     {
      
//       title: "Awarded as 1",
//       description: "Applauded Globally for his contribution towards the Engineering Community for the last 21 years & popularly known as Tech Guru of India",
//       imageUrl: Image3.src
//     },





  
//     {
//       title: "TedX Speaker",
//       description: "First we have to create them, then Indian Engineering Students will be The Creator in technology space for our Nation",
//       imageUrl: tedx.src
//     }
//   ];

//   return (
//     <div className=''>
//     <div className="container max-w-6xl mx-auto px-4 py-8 md:py-4 lg:py-4">
//       {/* Heading Section */}
//       <div className="text-center mb-4 ">
//         <h1 
       
//           className="text-3xl md:text-3xl lg:text-3xl font-bold text-white mb-2"
//         >
           

//           <span className='text-[#ff0000]'>World Record Holder - </span> Mr Vimal Daga
//         </h1>
//         < p className="text-gray-700 text-lg">
          
//           {/* Discover the incredible journey of our students, from learning to landing dream jobs at top-tier companies */}
//         </p>
//       </div>

//       {/* Cards Section */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {cardData.map((card, index) => (
//           <motion.div 
//             key={index} 
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ 
//               duration: 0.5, 
//               delay: index * 0.2 
//             }}
//             className="w-full relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#1D2235] to-[#121318] p-4 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
//           >
//             <Rays />
//             <Beams />
//             <div className="relative z-10">
//               <Lens 
//                 hovering={hoveringStates[index]}
//                 setHovering={(isHovering) => handleHover(index, isHovering)}
//               >
//                 <Image
//                   src={card.imageUrl}
//                   alt={card.title}
//                   width={500}
//                   height={500}
//                   className="rounded-2xl object-cover aspect-square"
//                 />
//               </Lens>
//               <div className="py-4 relative z-20">
//                 <h2 className="text-white text-xl text-left font-bold">
//                   {card.title}
//                 </h2>
//                 <p className="text-neutral-200 text-left mt-2 text-sm">
//                   {card.description}
//                 </p>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//     </div>
//   );
// }

"use client";

import { PlacementCard, CardData } from './card';
import { Rays } from './rays';
import { Beams } from './beams';
import { useState } from "react";
import { Lens } from "../../../ui/lens";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image1 from "../../../../../public/assets/Mentor/1.jpg";
import Image2 from "../../../../../public/assets/Mentor/2.jpg";
import tedx from "../../../../../public/assets/Mentor/tedx.jpg";
import Image3 from "../../../../../public/assets/Mentor/3.jpg";

export function MentorScroll() {
  const [hoveringStates, setHoveringStates] = useState([false, false, false, false]);

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
    }
  ];

  return (
    <div className=''>
      <div className="container max-w-6xl mx-auto px-4 py-8 md:py-4 lg:py-4">
        <div className="text-center mb-4">
          <h1 className="text-3xl md:text-3xl lg:text-3xl font-bold text-white mb-2">
            <span className='text-[#ff0000]'>World Record Holder - </span> Mr Vimal Daga
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cardData.map((card, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="w-full relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#1D2235] to-[#121318] p-2"
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
                  <h2 className="text-white text-lg font-bold">
                    {card.title}
                  </h2>
                  <p className="text-neutral-200 mt-1 text-sm">
                    {card.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}