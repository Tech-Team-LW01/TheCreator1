import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Projets() {
  return (
    <div className="container grid min-h-[400px] grid-cols-1 gap-2 py-8 md:grid-cols-2 md:py-12">
      {/* Left side - Image */}
      <div className="flex items-center justify-center">
        <Image
          src="https://cdn.prod.website-files.com/62a8969da1ab561666c8c408/64e4603b768b6be8f6aa5e07_Career%20Page%20-%20KodeKloud%20and%20Devops%20Logo.webp"
          alt="KodeKloud Technology Diagram"
          width={500}
          height={500}
          className="rounded-[32px] h-full"
          priority
        />
      </div>

      {/* Right side - Content */}
      <div className="flex flex-col justify-center space-y-6 p-8">
        <h2 className="text-2xl font-bold tracking-tight">How Does It Work?</h2>
        <div className="space-y-4 text-gray-600">
          <p>
            KodeKloud's purpose is to help you build DevOps domain expertise, literacy, and Cloud comprehension
            simultaneously. Be it Kubernetes, AWS, Azure, or among any of hundreds of applications, we can arm you with
            the knowledge to grow.
          </p>
          <p>
            We offer bite-sized learning that fits into your day with the appropriate level of detail, KodeKloud ensures
            your time is spent learning skills that will drive your DevOps and Cloud maturity.
          </p>
        </div>
        <div>
          <Button size="lg" className="bg-[#ff0000] text-white ">
            Enroll Now
          </Button>
        </div>
      </div>
    </div>
  )
}

