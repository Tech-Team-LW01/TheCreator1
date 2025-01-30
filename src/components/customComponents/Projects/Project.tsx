import Image from "next/image";
import { Button } from "@/components/ui/button";
import { data } from "./data";

export default function Projets() {
  return (
    <div className="container  bg-gray-800 w-screen mx-auto relative min-h-full py-6 md:py-12">
      {/* Responsive Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-[1fr_2fr]">
        {/* Left Side - Sticky Image */}
        <div className="md:sticky md:top-20 md:h-[calc(100vh-80px)] flex items-center justify-center">
          <div className="w-full max-w-[400px] mx-auto">
            <Image
              src={data.image.src}
              alt={data.image.alt}
              width={data.image.width}
              height={data.image.height}
              className="w-full h-auto rounded-lg object-cover"
              priority={data.image.priority}
            />
          </div>
        </div>

        {/* Right Side - Scrollable Content */}
        <div className="flex flex-col space-y-6 p-4 md:p-8">
          {/* Render Projects */}
          {data.projects.map((project, index) => (
            <div key={index} className="space-y-4">
              <div className="space-y-4 bg-[#f2d5d5] p-4 rounded-lg">
                <h2 className="text-xl md:text-2xl font-bold tracking-tight text-[#ff0000]">
                  {project.title}
                </h2>
                <p className="text-sm md:text-base text-black">{project.description}</p>
              </div>
              {project.sections.map((section, idx) => (
                <div key={idx} className="text-gray-600">
                  <h3 className="text-lg md:text-xl font-bold text-[#ff0000]">
                    {section.heading}:
                  </h3>
                  <p className="text-sm md:text-base text-white">{section.content}</p>
                </div>
              ))}
            </div>
          ))}

          {/* Render Button */}
          <div className="flex justify-center md:justify-start">
            <Button size="lg" className="bg-[#ff0000] hover:bg-[#e00000] text-white">
              {data.button.text}
            </Button>
          </div>

          {/* Render Additional Sections */}
          {data.additionalSections.map((section, index) => (
            <section key={index} className="space-y-4">
              <h2 className="text-xl md:text-2xl font-bold tracking-tight text-[#ff0000]">
                {section.title}
              </h2>
              <div className="space-y-2 text-gray-600">
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
    </div>
  );
}