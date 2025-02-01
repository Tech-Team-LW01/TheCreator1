import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { data } from './data';
import { Project } from './types';

export default function Projects(): JSX.Element {
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = (): void => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      projectRefs.current.forEach((ref, index) => {
        if (
          ref &&
          ref.offsetTop <= scrollPosition &&
          (index === projectRefs.current.length - 1 ||
            (projectRefs.current[index + 1]?.offsetTop ?? 0) > scrollPosition)
        ) {
          // Handle active project logic here if needed
        }
      });
    };

    const debouncedScroll = () => {
      let timeout: NodeJS.Timeout;
      return () => {
        clearTimeout(timeout);
        timeout = setTimeout(() => handleScroll(), 100);
      };
    };

    window.addEventListener('scroll', debouncedScroll());
    return () => window.removeEventListener('scroll', debouncedScroll());
  }, []);

  const renderProjectContent = (project: Project): JSX.Element => (
    <div className="space-y-6 bg-[#202020] p-6 rounded-lg hover:shadow-xl transition-all duration-300">
      <h2 className="text-xl md:text-2xl font-bold tracking-tight text-[#ff0000]">
        {project.title}
      </h2>
      <p className="text-sm md:text-base text-white">{project.description}</p>
      <div className="space-y-4">
        {project.sections.map((section, idx) => (
          <div key={idx} className="text-white">
            <h3 className="text-lg md:text-xl font-bold text-[#ff0000] mb-2">
              {section.heading}
            </h3>
            <p className="text-sm md:text-base text-white">{section.content}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const renderImageContent = (): JSX.Element => (
    <div className="w-full max-w-[400px] mx-auto">
      <Image
        src={data.image.src}
        alt={data.image.alt}
        width={data.image.width}
        height={data.image.height}
        className={`${data.image.className} transition-transform duration-300 hover:scale-105`}
        priority={data.image.priority}
      />
    </div>
  );

  const renderProject = (project: Project, index: number): JSX.Element => {
    const isEven = index % 2 === 0;

    return (
      <div
        ref={(el) => { projectRefs.current[index] = el }}
        key={index}
        className="grid grid-cols-1 gap-8 md:grid-cols-2 min-h-screen items-center py-16"
      >
        {isEven ? (
          <>
            <div className="md:sticky md:top-20 md:h-[calc(100vh-80px)] flex items-center">
              {renderImageContent()}
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
            <div className="md:sticky md:top-20 md:h-[calc(100vh-80px)] flex items-center">
              {renderImageContent()}
            </div>
          </>
        )}
      </div>
    );
  };

  return (
    <div className="container mx-auto relative min-h-screen bg-black max-w-6xl px-4">
      {/* Render Projects */}
      {data.projects.map((project, index) => renderProject(project, index))}

      {/* Render Button */}
      <div className="flex justify-center py-12">
        <Button
          size="lg"
          className={`${data.button.className} hover:bg-[#e00000] transform transition-all duration-300 hover:scale-105`}
          aria-label={data.button.text}
        >
          {data.button.text}
        </Button>
      </div>

      {/* Render Additional Sections */}
      <div className="space-y-12 py-12">
        {data.additionalSections.map((section, index) => (
          <section key={index} className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold tracking-tight text-[#ff0000]">
              {section.title}
            </h2>
            <div className="space-y-2">
              {section.content.map((paragraph, idx) => (
                <p key={idx} className="text-sm md:text-base text-white">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}