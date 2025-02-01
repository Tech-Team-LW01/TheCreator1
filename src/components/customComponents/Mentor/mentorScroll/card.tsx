import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Lens } from './lens';
import { Rays } from './rays';
import { Beams } from './beams';

export interface CardData {
  title: string;
  description: string;
  imageUrl: string;
}

interface CardProps extends CardData {
  index: number;
  hovering: boolean;
  onHoverChange: (isHovering: boolean) => void;
}

export const PlacementCard: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  index,
  hovering,
  onHoverChange
}) => {
  return (
    <div 
      className="flex-1 relative rounded-3xl overflow-hidden 
      bg-red-20 border-2
      p-2 my-10 w-full relative"
    >
      <Rays />
      <Beams />
      <div className="relative z-10">
        <Lens 
          hovering={hovering} 
          setHovering={onHoverChange}
        >
          <Image
            src={imageUrl}
            alt={title}
            width={600}
            height={500}
            className="rounded-2xl w-full"
          />
        </Lens>
        <motion.div
          animate={{
            filter: hovering ? "blur(2px)" : "blur(0px)",
          }}
          className="py-4 relative z-20 px-2"
        >
          <h2 className="text-black text-xl text-left font-bold">
            {title}
          </h2>
          <p className="text-black-200 text-left mt-2">
            {description}
          </p>
        </motion.div>
      </div>
    </div>
  );
};