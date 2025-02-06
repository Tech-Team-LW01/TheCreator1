import React from 'react';
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

import { Inter,Poppins } from 'next/font/google'
const poppins = Poppins({
   subsets: ['latin'],
   weight: ['400']
})


const technologies = [
  {
      name: "Machine Learning",
      image:"/assets/TechStackLogo/8618881.png",
      category: "Frontend Framework",
  },
  {
    name: "Cloud Computing",
    image:"/assets/TechStackLogo/cloud computing.png",
    category: "Database",
  },
  {
    name: "Python Programming",
    image: "/assets/TechStackLogo/Python-Emblem.png",
    category: "Programming Language",
  },
  
  {
    name: "RedHat Linux",
    image:"/assets/TechStackLogo/linux7.png",
    category: "IDE",
  },
  {
    name: "Mobile App Development",
    image: "/assets/TechStackLogo/5738031.png",
    category: "Database",
  },
  {
    name: "FullStack Development",
    image:"/assets/TechStackLogo/11096817.png",
    category: "Cloud Platform",
  },
  {
    name: "GenerativeAI ",
    image:"/assets/TechStackLogo/ChatGPT-Logo.svg.png",
    category: "Version Control",
  },
  {
    name: "DevOps",
    image:"assets/TechStackLogo/devops.png",
    category: "Web Server",
  },
  {
    name: "Blockchain",
    image: "/assets/TechStackLogo/blockchain.png",
    category: "Containerization",
  },
  {
    name: "MetaVerse",
    image: "/assets/TechStackLogo/10551606.png",
    category: "Container Orchestration",
  },
  {
    name: "Web 3.0",
    image:"/assets/TechStackLogo/web3.0.png",
    category: "Backend Platform",
  },
 
  {
    name: "IoT",
    image:"/assets/TechStackLogo/IOT.png",
    category: "Web Server",
  },
  
  
 
 
 
  
  
  
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function TechStack() {
  return (
    <section className="container bg-black mx-auto px-4 py-6">
      <div className="grid mx-auto gap-8 lg:grid-cols-2 lg:gap-12 items-center max-w-6xl">
        <div className="space-y-4">
          <h1 className="text-4xl text-[#ff0000] font-bold tracking-tight lg:text-4xl ">
            Learn, Research, Integrate & Build Industry Live Summer Project
          </h1>
          <p className={`text-muted-foreground text-3xl text-base text-white ${poppins.className}`}>
            Master modern technologies through hands-on experience with industry-standard tools and frameworks.
          </p>
        </div>

        <motion.div
       className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-6 gap-4 md:gap-x-14 lg:gap-x-14 sm:gap-y-2 w-full"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {technologies.map((tech) => (
            <motion.div key={tech.name} variants={item}>
              <Card className="group relative  w-24 space-y-4 overflow-hidden p-4 transition-all hover:shadow-lg">
                <div className="flex flex-col items-center space-y-2">
                  <div className="aspect-square relative flex items-center p-0 justify-center">
                    <img
                      src={tech.image || "/placeholder.svg"}
                      alt={`${tech.name} logo`}
                      className="w-12 h-12 object-contain transition-transform group-hover:scale-110"
                    />
                    {/* <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity group-hover:opacity-100 flex items-center justify-center">
                      <div className="text-center px-1">
                        <p className="text-white/80 text-[10px]">{tech.category}</p>
                      </div>
                    </div> */}
                  </div>
                  <p className="text-center text-sm font-medium">{tech.name}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}