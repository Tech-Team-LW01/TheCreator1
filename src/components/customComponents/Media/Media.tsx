import React from "react";
import { Card, CardHeader, } from "@/components/ui/card";
import Image from "next/image"
const mediaData = [
  {
    source: "PR Newswire",
    backgroundImage: "/assets/media/graduation.jpeg",
    logo: "/assets/media/mu-journalist-barkha-dutt.media.webp"
  },
  {
    source: "Millennium Post",
    backgroundImage: "/assets/media/graduation.jpeg",
    logo: "/assets/media/mu-journalist-barkha-dutt.media.webp"
  },
  {
    source: "CXO Today",
    backgroundImage: "/assets/media/graduation.jpeg",
    logo: "/assets/media/mu-journalist-barkha-dutt.media.webp"
  },
  {
    source: "The Economic Times",
    backgroundImage: "/assets/media/graduation.jpeg",
    logo: "/assets/media/mu-journalist-barkha-dutt.media.webp"
  },
  {
    source: "Business India",
    backgroundImage: "/assets/media/graduation.jpeg",
    logo: "/assets/media/mu-journalist-barkha-dutt.media.webp"
  },
  {
    source: "Business India",
    backgroundImage: "/assets/media/graduation.jpeg",
    logo: "/assets/media/mu-journalist-barkha-dutt.media.webp"
  },
  {
    source: "Business India",
    backgroundImage: "/assets/media/graduation.jpeg",
    logo: "/assets/media/mu-journalist-barkha-dutt.media.webp"
  },
  {
    source: "Business India",
    backgroundImage: "/assets/media/graduation.jpeg",
    logo: "/assets/media/mu-journalist-barkha-dutt.media.webp"
  },
  {
    source: "Business India",
    backgroundImage: "/assets/media/graduation.jpeg",
    logo: "/assets/media/mu-journalist-barkha-dutt.media.webp"
  },
  {
    source: "Business India",
    backgroundImage: "/assets/media/graduation.jpeg",
    logo: "/assets/media/mu-journalist-barkha-dutt.media.webp"
  },
  {
    source: "Business India",
    backgroundImage: "/assets/media/graduation.jpeg",
    logo: "/assets/media/mu-journalist-barkha-dutt.media.webp"
  },
  {
    source: "Business India",
    backgroundImage: "/assets/media/graduation.jpeg",
    logo: "/assets/media/mu-journalist-barkha-dutt.media.webp"
  }

];


export default function MediaSection() {
  return (
    <section className="bg-[#000000] py-6">
      <div className="container mx-auto px-16">
        {/* Main Container Box - Reduced width using max-w-5xl */}
        <div className="bg-[#111111] border border-gray-600 rounded-xl shadow-2xl p-8 max-w-6xl px-4  mx-auto">
          {/* Header Section */}
          <div className="text-center mb-6">
            <span className="text-yellow-400 text-sm">✦ PIONEERING EDUCATION</span>
            <h1 className="text-3xl font-bold text-white mt-2">In the News</h1>
          </div>

          {/* Media Grid */}
          <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-6 gap-4">
            {mediaData.map((media, index) => (
              <Card 
                key={index} 
                className="relative h-44 overflow-hidden group cursor-pointer hover:-translate-y-1 transition-all duration-300 border border-gray-700 hover:border-gray-500"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${media.backgroundImage})` }}
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-all" />
                
                <CardHeader className="relative h-full flex flex-col justify-center items-center pt-4 pb-0 px-1">
                  <div className="relative z-10 w-full  h-full">
                    <Image 
                      src={media.logo}
                      alt={media.source}
                      width={300}
                      height={100}
                      className="object-contain w-full h-full px-1 pt-4 pb-0"
                      style={{
                        maxWidth: "100%",
                        maxHeight: "100%",
                        objectFit: "contain"
                      }}
                    />
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}