"use client"

import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import ImageSlideshow from './ImageSlideshow';
import { motion } from 'framer-motion';
import { landingPageTestimonialPosts } from './data';
import Image from 'next/image';

// Define interface for testimonial data
interface Testimonial {
  id: string | number;
  testimonialScreenShot: string;
  images?: string[];
}

export default function ImageTestimonials() {
  const [showAll, setShowAll] = useState(false);
  const initialDisplayCount = 10;
  const hasMoreTestimonials = landingPageTestimonialPosts.length > initialDisplayCount;

  const displayedTestimonials = showAll 
    ? landingPageTestimonialPosts 
    : landingPageTestimonialPosts.slice(0, initialDisplayCount);

  const handleToggleDisplay = () => {
    setShowAll(!showAll);
  };

  return (
    <section className="bg-[#000000] py-6">
      <div className="max-w-6xl mx-auto px-2">
        <div className="bg-[#111111] border border-gray-600 rounded-xl p-6 shadow-2xl">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h2 className="text-[#ff0000] text-3xl md:text-4xl font-bold mt-2">
            Summer Interns felt <br/>
            “It’s a Life Changing Program”
            </h2>
            <h2 className="text-white pt-2 text-xl font-semibold">
            LET’S HEAR FROM THEM WHY ?
            </h2>
          </div>
          
          {/* Testimonials Grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-4">
            {displayedTestimonials.map((testimonial: Testimonial) => (
              <div key={testimonial.id} className="break-inside-avoid space-y-4">
                {/* Testimonial Screenshot Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="relative overflow-hidden bg-[#000000] border border-gray-500 hover:border-gray-400 transition-colors">
                    <CardContent className="p-4">
                      <div className="relative w-full min-h-[150px]"> {/* Adjust height as needed */}
                        <Image 
                          src={testimonial.testimonialScreenShot} 
                          alt="Testimonial"
                          fill
                          className="rounded-lg object-fit min-h-[200px] shadow-lg hover:scale-[1.02] transition-transform duration-200"
                         
                          // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Additional Images Slideshow (if exists) */}
                {testimonial.images && testimonial.images.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <Card className="relative overflow-hidden bg-[#000000] border border-gray-500 hover:border-gray-400 transition-colors">
                      <CardContent className="p-4">
                        <ImageSlideshow images={testimonial.images} />
                      </CardContent>
                    </Card>
                  </motion.div>
                )}
              </div>
            ))}
          </div>  

          {/* Load More Button */}
          {hasMoreTestimonials && (
            <div className="flex items-center mt-12">
              <button 
                className="mx-auto px-6 py-3 border border-gray-500 rounded-lg hover:bg-gray-800 transition-colors text-white font-medium"
                onClick={handleToggleDisplay}
              >
                {showAll ? 'View Less' : 'See our Wall of Love'}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}