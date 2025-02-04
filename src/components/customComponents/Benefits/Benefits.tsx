// import React from "react";
// import { Card, CardHeader, CardTitle, CardDescription, CardContent, } from "@/components/ui/card";

// const benefitsData = [
//   {
//     icon: "🎓",
//     title: "100% Sponsorship",
//     subtitle: "International Conferences & Summits",
//     detail: "Time to meet the Creators of the technologies",
//     description:
//       "Lifetime Opportunity to visit International conference where you meet the creators of different upcoming technologies, know the Future booming technical concepts, experience a different technical approach & also get unbelievable job opportunities.",
//   },
//   {
//     icon: "📚",
//     title: "Connect with",
//     subtitle: "Communities & Industry Experts",
//     detail: "Get Connected - Get Inspired",
//     description:
//       "An Opportunity to meet in person & get connected with many industry experts here during the Summer Program. Also know the path to contribute to major communities namely AWS Community, Docker Community, OpenSource Community & many more.",
//   },
//   {
//     icon: "💼",
//     title: "Build",
//     subtitle: "Interpersonal Skills",
//     detail: "Become Confident & Interview Ready",
//     description:
//       "Work on real-world projects that enhance your portfolio and give you practical experience in your field.",
//   },
//   {
//     icon: "🌟",
//     title: "Teamwork",
//     subtitle: "& Collaboration",
//     detail: "Exposure to real industry work culture",
//     description:
//       "Interns from PAN India Engineering Colleges participate in the Summer Program & while doing your projects you all will be working closely with each other which will help you learn team synergy, how to work collaboratively as a team & team building skills.",
//   },
  
//   {
//     icon: "🤝",
//     title: "Problem Based",
//     subtitle: "Learning Approach",
//     detail: "Develop Problem Solving Skills",
//     description:
//       "The problem-based project work @ THE CREATOR 2025 gives you a unique opportunity to acquire new knowledge and technical competences in an independent manner. You get to apply theory to practice when you work to solve real-life problems, and you will be well prepared for your future career.",
//   },
// ];


// export default function Benefits() {
//   return (
//     <section className="bg-[#000000] py-6">
//       <div className="max-w-6xl mx-auto px-2    ">
//         {/* Main Container Box */}
//         <div className="bg-[#111111] border border-gray-700 rounded-xl shadow-2xl p-8">
//           {/* Header Section */}
//           <div className="text-center mb-12">
//             <h1 className="text-3xl font-bold text-white mb-4">
//               Benefits of Summer Program 2025
//             </h1>
//             <h2 className="text-xl text-white mb-8">
//               Learn with Engineering students from Across India
//             </h2>
//           </div>

//           {/* Top Row Cards */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {benefitsData.slice(0, 3).map((benefit, index) => (
//               <Card 
//                 key={index} 
//                 className="bg-white border border-gray-700 hover:border-gray-500 transition-all"
//               >
//                 <CardHeader className="text-center">
//                   <span className="text-4xl">{benefit.icon}</span>
//                   <CardTitle className="text-2xl text-black">{benefit.title}</CardTitle>
//                   <CardDescription className="text-lg text-black">{benefit.subtitle}</CardDescription>
//                 </CardHeader>
//                 <CardContent className="text-center">
//                   <h3 className="text-black font-semibold">{benefit.detail}</h3>
//                   <p className="text-black mt-2">{benefit.description}</p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>

//           {/* Bottom Row Cards */}
//           <div className="flex flex-col md:flex-row justify-center gap-6 mt-6">
//             {benefitsData.slice(3).map((benefit, index) => (
//               <Card 
//                 key={index} 
//                 className="bg-white border border-gray-700 hover:border-gray-500 transition-all flex-1"
//               >
//                 <CardHeader className="text-center">
//                   <span className="text-4xl">{benefit.icon}</span>
//                   <CardTitle className="text-2xl text-black">{benefit.title}</CardTitle>
//                   <CardDescription className="text-lg text-gray-900">{benefit.subtitle}</CardDescription>
//                 </CardHeader>
//                 <CardContent className="text-center">
//                   <h3 className="text-black font-semibold">{benefit.detail}</h3>
//                   <p className="text-black mt-2">{benefit.description}</p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, } from "@/components/ui/card";

const benefitsData = [
  {
    icon: "🎓",
    title: "100% Sponsorship",
    subtitle: "International Conferences & Summits",
    detail: "Time to meet the Creators of the technologies",
    description:
      "Lifetime Opportunity to visit International conference where you meet the creators of different upcoming technologies, know the Future booming technical concepts, experience a different technical approach & also get unbelievable job opportunities.",
    bgImage: "/assets/benefits/1.jpg"
  },
  {
    icon: "📚",
    title: "Connect with",
    subtitle: "Communities & Industry Experts",
    detail: "Get Connected - Get Inspired",
    description:
      "An Opportunity to meet in person & get connected with many industry experts here during the Summer Program. Also know the path to contribute to major communities namely AWS Community, Docker Community, OpenSource Community & many more.",
    bgImage: "/assets/benefits/industryexperts.png"
  },
  {
    icon: "💼",
    title: "Build",
    subtitle: "Interpersonal Skills",
    detail: "Become Confident & Interview Ready",
    description:
      "Work on real-world projects that enhance your portfolio and give you practical experience in your field.",
    bgImage:"/assets/benefits/skills.png"
  },
  {
    icon: "🌟",
    title: "Teamwork",
    subtitle: "& Collaboration",
    detail: "Exposure to real industry work culture",
    description:
      "Interns from PAN India Engineering Colleges participate in the Summer Program & while doing your projects you all will be working closely with each other which will help you learn team synergy, how to work collaboratively as a team & team building skills.",
    bgImage:"/assets/benefits/teamwork.png" // Add your image
  },
  {
    icon: "🤝",
    title: "Problem Based",
    subtitle: "Learning Approach",
    detail: "Develop Problem Solving Skills",
    description:
      "The problem-based project work @ THE CREATOR 2025 gives you a unique opportunity to acquire new knowledge and technical competences in an independent manner. You get to apply theory to practice when you work to solve real-life problems, and you will be well prepared for your future career.",
    bgImage:"/assets/benefits/learningapproach.png" // Add your image
  },
];

export default function Benefits() {
  return (
    <section className="bg-[#000000] py-6">
      <div className="max-w-6xl mx-auto px-2">
        <div className="bg-[#111111] border border-gray-700 rounded-xl shadow-2xl p-8">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-white mb-4">
              Benefits of Summer Program 2025
            </h1>
            <h2 className="text-xl text-white mb-8">
              Learn with Engineering students from Across India
            </h2>
          </div>

          {/* Top Row Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefitsData.slice(0, 3).map((benefit, index) => (
              <Card 
                key={index} 
                className="relative overflow-hidden group min-h-[450px]"
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                  style={{
                    backgroundImage: `url(${benefit.bgImage})`,
                  }}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80" />
                
                {/* Content */}
                <div className="relative z-10">
                  <CardHeader className="text-center">
                    <span className="text-4xl">{benefit.icon}</span>
                    <CardTitle className="text-2xl text-white">{benefit.title}</CardTitle>
                    <CardDescription className="text-lg text-gray-200">
                      {benefit.subtitle}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <h3 className="text-white font-semibold">{benefit.detail}</h3>
                    <p className="text-gray-200 mt-2">{benefit.description}</p>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>

          {/* Bottom Row Cards - Now with same styling as top cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {benefitsData.slice(3).map((benefit, index) => (
              <Card 
                key={index} 
                className="relative overflow-hidden group min-h-[350px]"
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                  style={{
                    backgroundImage: `url(${benefit.bgImage})`,
                  }}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80" />
                
                {/* Content */}
                <div className="relative z-10">
                  <CardHeader className="text-center">
                    <span className="text-4xl">{benefit.icon}</span>
                    <CardTitle className="text-2xl text-white">{benefit.title}</CardTitle>
                    <CardDescription className="text-lg text-gray-200">
                      {benefit.subtitle}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <h3 className="text-white font-semibold">{benefit.detail}</h3>
                    <p className="text-gray-200 mt-2">{benefit.description}</p>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}