import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { data } from './data';
import { Project } from './types';
import { Badge } from "@/components/ui/badge";
import { CalendarDays } from "lucide-react";
import { MdCircle } from "react-icons/md";
import { Inter,Poppins } from 'next/font/google'

const poppins = Poppins({
   subsets: ['latin'],
   weight: ['400']
})

export default function Projects(): JSX.Element {
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);

    const handleScroll = () => {
      projectRefs.current.forEach((ref) => {
        if (!ref) return;

        const rect = ref.getBoundingClientRect();
        const isInView = rect.top <= window.innerHeight * 0.75;

        if (isInView) {
          ref.style.opacity = '1';
          ref.style.transform = 'translateY(0)';
        }
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const renderProjectContent = (project: Project): JSX.Element => (
    <div className="space-y-4 bg-[#202020] p-4 md:p-6 rounded-lg hover:shadow-xl transition-all duration-300 relative">
      {/* Project Code Badge */}
      <Badge
        variant="secondary"
        className="absolute top-2 right-2 h-6 pt-2 pb-2 bg-[#4a4a4a] text-sm text-white border-none shrink-0"
      >
        Project {project.projectCode}
      </Badge>

      {/* Project Title */}
      <h2 className="text-lg md:text-xl font-bold tracking-tight text-[#ff0000] whitespace-pre-wrap mt-4">
        {project.title}
      </h2>

      {/* Project Description */}
      <p className="text-xs md:text-base text-white leading-relaxed pl-0 md:pl-6">
        {project.description}
      </p>
      <div className='w-full h-[2px] mt-2 bg-white'/>

      {/* Project Sections */}
      <div className="space-y-2">
        {project.sections.map((section, idx) => (
          <div key={idx} className="text-white">
            <div className="flex space-x-3">
              <MdCircle
                className="text-[#ff0000] flex-shrink-0 mt-[18px]"
                size={8}
              />
              <div className="flex-1">
                <h3 className="text-sm md:text-sm font-bold text-[#ff0000] mt-2">
                  {section.heading}
                </h3>
                <p className={`text-xs md:text-sm text-gray-200 leading-relaxed ${poppins.className}`}>
                  {section.content.split('|').map((item, i) => (
                    <span key={i} className="inline-block">
                      {item.trim()}
                      {i < section.content.split('|').length - 1 && (
                        <span className="mx-2 text-gray-500">|</span>
                      )}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderImageContent = (project: Project): JSX.Element => (
    <div className="hidden md:block w-full max-w-[400px] mx-auto md:pt-24 lg:pt-24">
      <div className="relative group">
        <Image
          src={project.image.src}
          alt={project.image.alt}
          width={project.image.width}
          height={project.image.height}
          className={`${project.image.className} transition-transform duration-300 group-hover:scale-105 bg-white`}
          priority={project.image.priority}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </div>
  );

  const renderProject = (project: Project, index: number): JSX.Element => {
    const isEven = index % 2 === 0;

    return (
      <div
        ref={(el) => { projectRefs.current[index] = el }}
        key={index}
        className="grid grid-cols-1 gap-4 md:gap-8 md:grid-cols-2 min-h-[auto] md:min-h-screen py-4 md:py-6 opacity-0 transform translate-y-4 transition-all duration-500 ease-out"
        style={{ 
          opacity: 0,
          transform: 'translateY(20px)',
          transition: 'opacity 0.5s ease-out, transform 0.5s ease-out'
        }}
      >
        {isEven ? (
          <>
            <div className="hidden md:block md:sticky md:top-0 self-start md:h-[calc(100vh-80px)] flex items-start">
              {renderImageContent(project)}
            </div>
            <div className="flex flex-col space-y-4 md:space-y-6">
              {renderProjectContent(project)}
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col space-y-4 md:space-y-6">
              {renderProjectContent(project)}
            </div>
            <div className="hidden md:block md:sticky md:top-0 self-start md:h-[calc(100vh-80px)] flex items-start">
              {renderImageContent(project)}
            </div>
          </>
        )}
      </div>
    );
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-black">
      {/* Main Heading Section */}
      <div className="w-full text-center py-4 px-4">
        <h1 className="text-2xl md:text-4xl font-bold text-[#ff0000] font-khand" id="#Projects">
          Unique Summer Projects
        </h1>
        <p className="text-white text-base md:text-lg mt-2">
          Learn & Develop a Level Of Project Which You Can't Find Anywhere – Internet / Google / Chatgpt
        </p>
      </div>

      <div className="container mx-auto max-w-6xl px-4">
        <div className="space-y-6 md:space-y-8">
          {data.projects.map((project, index) => renderProject(project, index))}
        </div>

        <div className="flex justify-center py-8 md:py-12">
          <Button
            size="lg"
            className={`${data.button.className} hover:bg-[#e00000] transform transition-all duration-300 hover:scale-105 px-6 md:px-8 py-2 md:py-3 rounded-full shadow-lg hover:shadow-xl text-sm md:text-base`}
            aria-label={data.button.text}
          >
            {data.button.text}
          </Button>
        </div>
      </div>

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }

        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #1a1a1a;
        }

        ::-webkit-scrollbar-thumb {
          background: #ff0000;
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #e00000;
        }

        .project-visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </div>
  );
}