import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { data } from './data';
import { Project } from './types';

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
    <div className="space-y-6 bg-[#202020] p-6 rounded-lg hover:shadow-xl transition-all duration-300">
      <h2 className="text-xl md:text-2xl font-bold tracking-tight text-[#ff0000]">
        {project.title}
      </h2>
      <p className="text-sm md:text-base text-white leading-relaxed">
        {project.description}
      </p>
      <div className="space-y-6">
        {project.sections.map((section, idx) => (
          <div key={idx} className="text-white">
            <h3 className="text-lg md:text-xl font-bold text-[#ff0000] mb-2">
              {section.heading}
            </h3>
            <p className="text-sm md:text-base text-white leading-relaxed">
              {section.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );

  const renderImageContent = (project: Project): JSX.Element => (
    <div className="w-full max-w-[400px] mx-auto pt-24">
      <div className="relative group">
        <Image
          src={project.image.src}
          alt={project.image.alt}
          width={project.image.width}
          height={project.image.height}
          className={`${project.image.className} transition-transform duration-300 group-hover:scale-105`}
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
        className="grid grid-cols-1 gap-8 md:grid-cols-2 min-h-screen py-16 opacity-0 transform translate-y-4 transition-all duration-500 ease-out"
        style={{ 
          opacity: 0,
          transform: 'translateY(20px)',
          transition: 'opacity 0.5s ease-out, transform 0.5s ease-out'
        }}
      >
        {isEven ? (
          <>
            <div className="md:sticky md:top-0 self-start md:h-[calc(100vh-80px)] flex items-start">
              {renderImageContent(project)}
            </div>
            <div className="flex flex-col space-y-6">
              {renderProjectContent(project)}
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col space-y-6">
              {renderProjectContent(project)}
            </div>
            <div className="md:sticky md:top-0 self-start md:h-[calc(100vh-80px)] flex items-start">
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
      <div className="container mx-auto max-w-6xl px-4 pt-16">
        {/* Projects Section */}
        <div className="space-y-8">
          {data.projects.map((project, index) => renderProject(project, index))}
        </div>

        {/* Button Section */}
        <div className="flex justify-center py-12">
          <Button
            size="lg"
            className={`${data.button.className} hover:bg-[#e00000] transform transition-all duration-300 hover:scale-105 px-8 py-3 rounded-full shadow-lg hover:shadow-xl`}
            aria-label={data.button.text}
          >
            {data.button.text}
          </Button>
        </div>

        {/* Additional Sections */}
        <div className="space-y-12 py-12">
          {data.additionalSections.map((section, index) => (
            <section 
              key={index} 
              className="space-y-4 transform transition-all duration-300 hover:translate-x-2"
            >
              <h2 className="text-xl md:text-2xl font-bold tracking-tight text-[#ff0000]">
                {section.title}
              </h2>
              <div className="space-y-4">
                {section.content.map((paragraph, idx) => (
                  <p key={idx} className="text-sm md:text-base text-white leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
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