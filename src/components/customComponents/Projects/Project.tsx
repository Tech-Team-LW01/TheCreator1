import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Projets() {
  return (
    <div className="container relative min-h-screen py-8 md:py-12">
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
        {/* Left side - Sticky Image */}
        <div className="md:sticky md:top-20 md:h-[calc(100vh-80px)]">
          <div className="flex h-full items-center justify-center">
            <Image
              src="https://cdn.prod.website-files.com/62a8969da1ab561666c8c408/64e4603b768b6be8f6aa5e07_Career%20Page%20-%20KodeKloud%20and%20Devops%20Logo.webp"
              alt="KodeKloud Technology Diagram"
              width={400}
              height={400}
              className="rounded-[32px] h-auto w-auto object-contain"
              priority
            />
          </div>
        </div>

        {/* Right side - Scrollable Content */}
        <div className="flex flex-col space-y-6 p-8">
          {/* Add multiple sections to create scrollable content */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tight">How Does It Work?</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                KodeKloud&apos;s purpose is to help you build DevOps domain expertise, literacy, and Cloud comprehension
                simultaneously. Be it Kubernetes, AWS, Azure, or among any of hundreds of applications, we can arm you with
                the knowledge to grow.
              </p>
              <p>
                We offer bite-sized learning that fits into your day with the appropriate level of detail, KodeKloud ensures
                your time is spent learning skills that will drive your DevOps and Cloud maturity.
              </p>
            </div>
            <div>
              <Button size="lg" className="bg-[#ff0000] text-white">
                Enroll Now
              </Button>
            </div>
          </section>

          {/* Add more sections to demonstrate scroll effect */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tight">Additional Features</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua.
              </p>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tight">Why Choose Us?</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}