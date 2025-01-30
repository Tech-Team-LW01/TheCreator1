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
              src="/assets/Projects/Project1.jpg"
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
            <h2 className="text-2xl font-bold tracking-tight text-[#ff0000]">Develop Your Own Cloud</h2>
            <p>Develop Serverless Cloud Computing Using Container for Cloud-Native Applications to simplify development, deployment & management</p>
            <div className="space-y-4 text-gray-600">
              <h1 className="text-xl font-bold text-[#ff0000]">Cloud Computing : </h1>
              <p>
              AWS Cloud | AWS Services | AWS Lambda | Amazon API Gateway | AWS Step Functions | Amazon DynamoDB | Amazon S3 | Amazon SQS | Amazon SNS | AWS Serverless services | AWS Ec2 | AWS RDS | AWS Route 53 | AWS Cloud Front | Amazon API gateway & much more
              Operating System : RHELv9 (Red Hat Enterprise Linux) | Networking | Virtualization
                
              </p>
              <h1 className="text-xl font-bold text-[#ff0000]">Operating System : </h1>
              <p>RHELv9 (Red Hat Enterprise Linux) | Networking | Virtualization</p>
              <h1 className="text-xl font-bold text-[#ff0000]">Programming Language : </h1>
              <p>Python | Python TUI (Text-based User Interface)</p>
              <h1 className="text-xl font-bold text-[#ff0000]">Containerization: </h1>
              <p> Docker | Podman</p>
              <h1 className="text-xl font-bold text-[#ff0000]">Web & Mobile development : </h1>
              <p>Html | CSS | Javascript | Web Development Framework | Django OR Flask OR Nodejs  (Web App) | RestAPI | Flutter OR React Native  (Mobile App) </p>
              <h1 className="text-xl font-bold text-[#ff0000]">DataBase & Storage : </h1>
              <p> Mysql | MongoDB</p>
              <h1 className="text-xl font-bold text-[#ff0000]">Version Control: </h1>
              <p>Git | Github</p>
              
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