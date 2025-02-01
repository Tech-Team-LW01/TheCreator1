import { Card, CardContent } from "@/components/ui/card";
import { Instagram } from "lucide-react";
import Link from "next/link";

export default function JazbaaStartupPlatform() {
  return (
    <div className="min-h-full max-w-6xl mx-auto px-4 bg-black">
      {/* Main Content Container */}
      <div className="container mx-auto px-4 py-12 relative">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-[#ff0000] mb-2">
            JAZBAA Start-up Platform
          </h1>
         
      
      
          <p className="text-gray-300 max-w-3xl mx-auto">
            An event which showcases the StartUps incubated by Engineering Students in 45 days during Summer Industrial
            Training Program.
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {/* Angel Investors Card */}
          <Card className="bg-gray-800">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  <svg
                    className="w-12 h-12 text-[#ff0000]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-white">65+ Top-Notch</h3>
                <p className="text-gray-300">
                  Angel Investors & Industry Experts from various cities namely Mumbai, Bangalore, Hyderabad, Gurgaon
                  were present at JAZBAA 2.0 & JAZBAA 3.0
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Startups Card */}
          <Card className="bg-[#ff0000] text-white">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  <svg
                    className="w-12 h-12 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">123+ Startups</h3>
                <p>
                  "Unbelievable" was the feedback from the investors to these 123+ Startups which were ideated, build
                  and showcased at JAZBAA 2.0 & JAZBAA 3.0
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Sectors Card */}
          <Card className="bg-gray-800">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  <svg
                    className="w-12 h-12 text-[#ff0000]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-white">10+ Sectors</h3>
                <p className="text-gray-300">
                  Healthcare, Education, Logistics & Transportation, Agriculture, Consumer Products & Services, Retail,
                  Human Resource and many more
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Background Decoration */}
        <div className="absolute top-0 right-0 -z-10 opacity-20">
          <div className="w-64 h-64 bg-red-900 transform rotate-45"></div>
        </div>
        <div className="absolute bottom-0 left-0 -z-10 opacity-20">
          <div className="w-64 h-64 bg-red-900 transform -rotate-45"></div>
        </div>
      </div>
    </div>
  );
}