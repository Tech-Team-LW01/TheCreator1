"use client"

import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Linkedin } from 'lucide-react';
import { landingPageTestimonialPosts } from "./data"

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
    <section className="bg-[#000000] py-12">
      <div className="container mx-auto px-4">
        {/* Container Box with Border */}
        <div className="bg-[#111111] border border-gray-600 rounded-xl p-8 shadow-2xl">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h2 className="text-white text-md font-semibold">
              HERE IT FROM THEM
            </h2>
            <h2 className="text-white text-2xl md:text-3xl font-bold mt-2">
              Ambitious Student
            </h2>
          </div>
          
          {/* Testimonials Grid */}
          <div className="columns-1 md:columns-4 lg:columns-4 gap-6 space-y-4">
            {displayedTestimonials.map((post) => (
              <Card
                key={post.id}
                className="relative overflow-hidden bg-[#000000] text-white border border-gray-500 mb-4 break-inside-avoid hover:border-gray-400 transition-colors"
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-12 w-12 flex-shrink-0">
                      <AvatarImage src={post.author.avatar} alt={post.author.name} />
                      <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-grow">
                      <h3 className="text-sm font-semibold">{post.author.name}</h3>
                      <p className="text-xs text-gray-400">{post.author.title}</p>
                    </div>
                    <Linkedin className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer" />
                  </div>
                </CardHeader>
                <CardContent className="pt-2">
                  <div className="space-y-2 text-sm">
                    {post.content.split('\n\n').map((paragraph, index) => (
                      <p key={index}>
                        {paragraph.split(' ').map((word, wordIndex) => {
                          if (word.startsWith('@') || word.startsWith('#')) {
                            return <span key={wordIndex} className="text-[#63B3ED]">{word} </span>;
                          }
                          return word + ' ';
                        })}
                      </p>
                    ))}
                  </div>
                  <p className="mt-4 text-xs text-gray-400">{post.timestamp}</p>
                </CardContent>
              </Card>
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