import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Projets() {

  
  return (
    <div className="container bg-gray-800 w-full relative min-h-screen py-8 md:py-12">
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
          <div className="space-y-3">
            <div className=" space-y-6 bg-[#f2d5d5]">
               <h2 className="text-2xl font-bold tracking-tight text-[#ff0000]">1. Develop Your Own Cloud</h2>
               <p className="text-black">Develop Serverless Cloud Computing Using Container for Cloud-Native Applications to simplify development, deployment & management</p>
            </div>
            <div className=" text-gray-600">
              <h1 className="text-xl font-bold text-[#ff0000]">Cloud Computing : </h1>
              <p className="text-white">
              AWS Cloud | AWS Services | AWS Lambda | Amazon API Gateway | AWS Step Functions | Amazon DynamoDB | Amazon S3 | Amazon SQS | Amazon SNS | AWS Serverless services | AWS Ec2 | AWS RDS | AWS Route 53 | AWS Cloud Front | Amazon API gateway & much more
              Operating System : RHELv9 (Red Hat Enterprise Linux) | Networking | Virtualization
                
              </p>
              <h1 className="text-xl font-bold text-[#ff0000]">Operating System : </h1>
              <p className="text-white">RHELv9 (Red Hat Enterprise Linux) | Networking | Virtualization</p>
              <h1 className="text-xl font-bold text-[#ff0000]">Programming Language : </h1>
              <p className="text-white">Python | Python TUI (Text-based User Interface)</p>
              <h1 className="text-xl font-bold text-[#ff0000]">Containerization: </h1>
              <p className="text-white"> Docker | Podman</p>
              <h1 className="text-xl font-bold text-[#ff0000]">Web & Mobile development : </h1>
              <p className="text-white">Html | CSS | Javascript | Web Development Framework | Django OR Flask OR Nodejs  (Web App) | RestAPI | Flutter OR React Native  (Mobile App) </p>
              <h1 className="text-xl font-bold text-[#ff0000]">DataBase & Storage : </h1>
              <p className="text-white"> Mysql | MongoDB</p>
              <h1 className="text-xl font-bold text-[#ff0000]">Version Control: </h1>
              <p className="text-white">Git | Github</p>
                   
              <div className=" space-y-6 bg-[#f2d5d5]"></div>     
                    <h2 className="text-2xl font-bold tracking-tight text-[#ff0000]"> 2. Next Generation DevOps With Cloud Computing</h2>
                    <p className="text-white">Develop High-End Next Generation End to End DevOps Pipeline Managed Service in High Performance Cloud Computing Platform.</p>
                </div>
              <h1 className="text-xl font-bold text-[#ff0000]">DevOps/Infrastructure as Code : </h1>
              <p className="text-white">
              Pipeline as Code | Jenkins | Ansible | Terraform

              </p>
              <h1 className="text-xl font-bold text-[#ff0000]">Cloud Computing :  </h1>
              <p className="text-white">AWS Cloud</p>
              <h1 className="text-xl font-bold text-[#ff0000]">Operating System/Virtualization : </h1>
              <p className="text-white">RHELv9 (Red Hat Enterprise Linux) | Virtualization | Storage | Networking</p>
              <h1 className="text-xl font-bold text-[#ff0000]">Programming Languages: </h1>
              <p className="text-white"> Python | Javascript | Dart</p>
              <h1 className="text-xl font-bold text-[#ff0000]">Version Control : </h1>
              <p className="text-white">Git | Github </p>
              <h1 className="text-xl font-bold text-[#ff0000]">Containerization/Orchestration : </h1>
              <p className="text-white"> Docker | Podman | Openshift | Kubernetes</p>
              <h1 className="text-xl font-bold text-[#ff0000]">Web & Mobile development : </h1>
              <p className="text-white"> Html | CSS | Javascript | Django OR Flask OR Nodejs  (Web App) | RestAPI | Flutter OR React Native  (Mobile App) </p>
              <h1 className="text-xl font-bold text-[#ff0000]">Databases : </h1>
              <p className="text-white">Mysql | MongoDB</p>
              <h1 className="text-xl font-bold text-[#ff0000]">User Interface : </h1>
              <p className="text-white">Python TUI
              </p>
              <h1 className="text-xl font-bold text-[#ff0000]">Configuration Management :</h1>
              <p className="text-white">Ansible</p>
              <h1 className="text-xl font-bold text-[#ff0000]">Infrastructure as Code : </h1>
              <p className="text-white">Terraform</p>




              <div className=" space-y-6 bg-[#f2d5d5]">
                  <h2 className="text-2xl font-bold tracking-tight text-[#ff0000]"> 3. Create OWN Artificial Intelligence Platform App - ML/DL</h2>
                  <p className="text-white">Build Intelligence Platform using Machine Learning/Deep Learning Model Design, and Create Interactive App Integrated with Generative AI - ChatGPT API</p>
                </div>
              <h1 className="text-xl font-bold text-[#ff0000]">Python Libraries : </h1>
              <p className="text-white">
              Numpy | Pandas | Matplotlib | Seaborn


              </p>
              <h1 className="text-xl font-bold text-[#ff0000]">Deep Learning Frameworks:  </h1>
              <p className="text-white">TensorFlow | Pytorch | Keras
              </p>
              <h1 className="text-xl font-bold text-[#ff0000]">Machine Learning : </h1>
              <p className="text-white">Model tuning and performance analytics | Data preprocessing | Data Transformation | Data Reduction | Data Visualization | Exploratory Data Analysis | Classification | Clustering | Regression Models | Neural Networks | Image/Video Processing and Computer Vision</p>
              <h1 className="text-xl font-bold text-[#ff0000]">Advance Neural Network : </h1>
              <p className="text-white"> P CNN (Convolutional Neural Network) | RNN (Recurrent Neural Network) | GAN (Generative Adversarial Network)| LSTM (Long Short-Term Memory) | Transfer Learning | Reinforcement Learning</p>
              <h1 className="text-xl font-bold text-[#ff0000]">Generative AI : </h1>
              <p className="text-white">Artificial Intelligence to generate all kinds of data, including audio, code, images , text, simulations. (e.g., ChatGPT). </p>
              <h1 className="text-xl font-bold text-[#ff0000]">Text Analytics : </h1>
              <p className="text-white"> NLP (Natural Language Processing) | Speech Analytics | Model Deployment and Scalability</p>
              <h1 className="text-xl font-bold text-[#ff0000]">Data Mining : </h1>
              <p className="text-white"> Association Mining | Recommendation System
              </p>
              <h1 className="text-xl font-bold text-[#ff0000]">Databases : </h1>
              <p className="text-white">Mysql | MongoDB</p>
              <h1 className="text-xl font-bold text-[#ff0000]">Web & Mobile development : </h1>
              <p className="text-white"> Html | CSS | Javascript | Django OR Flask OR Nodejs  (Web App) | RestAPI | Flutter OR React Native  (Mobile App) 
              </p>
              <h1 className="text-xl font-bold text-[#ff0000]">Database Management :</h1>
              <p className="text-white">Mysql | MongoDB
              </p>
              <h1 className="text-xl font-bold text-[#ff0000]">Version Control : </h1>
              <p className="text-white"> Git | Github</p>
              <h1 className="text-xl font-bold text-[#ff0000]">Operating System: </h1>
              <p className="text-white"> RHELv9 (Red Hat Enterprise Linux)</p>
            





              <div className=" space-y-6 bg-[#f2d5d5]">

                <h2 className="text-2xl font-bold tracking-tight text-[#ff0000]"> 4.Create OWN Intelligence Metaverse Platform App : Using BlockChain</h2>
                <p className="text-white">Build a Personalized Intelligence Metaverse Platform App with Blockchain.</p>
              </div>
              <h1 className="text-xl font-bold text-[#ff0000]">Blockchain Technology  : </h1>
              <p className="text-white">
              Blockchain | Cryptography and Cryptocurrency | Blockchain Network Architecture | Distributed Ledger Technology (DLT)

              </p>
              <h1 className="text-xl font-bold text-[#ff0000]">Augmented Reality (AR) :   </h1>
              <p className="text-white">Components of Augmented Reality Systems | Augmented Reality in Architecture and Design</p>
              <h1 className="text-xl font-bold text-[#ff0000]">Decentralized Finance (DeFi) : </h1>
              <p className="text-white">Decentralized Finance (DeFi) protocols</p>
              <h1 className="text-xl font-bold text-[#ff0000]">Web Technologies : </h1>
              <p className="text-white"> Web3 Browsers | Distributed Applications (DApps) | Smart Contracts | NFT Tokens
              </p>
              <h1 className="text-xl font-bold text-[#ff0000]">Programming Languages: </h1>
              <p className="text-white">Python | Python TUI (Text-based User Interface) | Html | CSS | Javascript | Django OR Flask OR Nodejs  (Web App) | RestAPI | Flutter OR React Native  (Mobile App) 
              </p>
              <h1 className="text-xl font-bold text-[#ff0000]">Web & Mobile development: </h1>
              <p className="text-white"> Docker | Podman | Openshift | Kubernetes</p>
              <h1 className="text-xl font-bold text-[#ff0000]">Web & Mobile development : </h1>
              <p className="text-white"> Html | CSS | Javascript | Django | Flask (Web App) | Flutter (Mobile App) | Dart</p>
              <h1 className="text-xl font-bold text-[#ff0000]">Databases Management: </h1>
              <p className="text-white">Mysql | MongoDB</p>
              <h1 className="text-xl font-bold text-[#ff0000]">Version Control: </h1>
              <p className="text-white">Git|Github
              </p>
              <h1 className="text-xl font-bold text-[#ff0000]">Operating System:</h1>
              <p className="text-white">RHELv9 (Red Hat Enterprise Linux)</p>
            

            

                
              <div className=" space-y-6 bg-[#f2d5d5]">
                    <h2 className="text-2xl font-bold tracking-tight text-[#ff0000]"> 5. Create OWN Intelligence MLOps Platform App </h2>
                     <p className="text-white">Build Intelligence Platform using Machine Learning/Deep Learning Model Design, Build and Deploy using CI/CD Devops Automation Pipeline Integrated with Generative AI - ChatGPT API.</p>
                  </div>
              <h1 className="text-xl font-bold text-[#ff0000]">Python Libraries : </h1>
              <p className="text-white">
              Python | Numpy | Pandas | Matplotlib | Seaborn
              </p>
              <h1 className="text-xl font-bold text-[#ff0000]">Deep Learning Frameworks :  </h1>
              <p className="text-white">TensorFlow | Pytorch | Keras
              </p>
              <h1 className="text-xl font-bold text-[#ff0000]">Machine Learning : </h1>
              <p className="text-white">Model tuning and performance analytics | Data preprocessing | Data Transformation | Data Reduction | Data Visualization | Classification | Exploratory Data Analysis | Clustering | Regression Models</p>
              <h1 className="text-xl font-bold text-[#ff0000]">Neural Networks : </h1>
              <p className="text-white"> Neural Network | Simple Neural Networks | Advance Neural Network | CNN (Convolutional Neural Network) | RNN (Recurrent Neural Network) | GAN (Generative Adversarial Network) | LSTM (Long Short-Term Memory) | Filtering Methods | RBM | Advanced NN models | Transfer Learning | Reinforcement Learning</p>
            
              <h1 className="text-xl font-bold text-[#ff0000]">Image/Video Processing and Computer Vision  : </h1>
              <p className="text-white">OPENCV | PIL/Pillow | scikit-image</p>

              <h1 className="text-xl font-bold text-[#ff0000]">Data Science Tools  : </h1>
              <p className="text-white"> SQL (Analytics) | Model Deployment and Scalability
              </p>
              <h1 className="text-xl font-bold text-[#ff0000]">Infrastructure and DevOps : </h1>
              <p className="text-white"> RedHat Linux | Kubernetes | Terraform | Jenkins | Virtualization  (Web App) | RestAPI | Flutter OR React Native  (Mobile App) </p>
              <h1 className="text-xl font-bold text-[#ff0000]">Web & Mobile development : </h1>
              <p className="text-white"> Html | CSS | Javascript | Django OR Flask OR Nodejs  (Web App) | RestAPI | Flutter OR React Native  (Mobile App) </p>
             
              <h1 className="text-xl font-bold text-[#ff0000]"> Text Analytics and Speech Analytics : </h1>
              <p className="text-white"> Text Analytics | Speech Analytics </p>
              <h1 className="text-xl font-bold text-[#ff0000]">Databases : </h1>
              <p className="text-white">Mysql | MongoDB</p>
              <h1 className="text-xl font-bold text-[#ff0000]">Version Control : </h1>
              <p className="text-white">Git | Github </p>
              <h1 className="text-xl font-bold text-[#ff0000]">Operating System:</h1>
              <p className="text-white">RHELv9 (Red Hat Enterprise Linux)</p>
            




              <div className=" space-y-6 bg-[#f2d5d5]">
                  <h2 className="text-2xl font-bold tracking-tight text-[#ff0000]"> 6. Smarter World Using IoT Powered By AI (ML/DL) And Industry 4.0 </h2>
                  <p className="text-white">Create OWN Automation Edge Computing Platform - Develop and Build a High-Performance Application using Edge Computing, Microservices, and Containerization over Own Cloud Computing with AI Intelligence by Custom Machine/Deep Learning Model that deploys using DevOps Technology Integrated with Generative AI - ChatGPT API.</p>
              </div>
              <h1 className="text-xl font-bold text-[#ff0000]">Python Libraries : </h1>
              <p className="text-white">
              Python | Numpy | Pandas | Matplotlib | Seaborn
              </p>
              <h1 className="text-xl font-bold text-[#ff0000]">Deep Learning Frameworks :  </h1>
              <p className="text-white">TensorFlow | Pytorch | Keras
              </p>
              <h1 className="text-xl font-bold text-[#ff0000]">Machine Learning : </h1>
              <p className="text-white">Model tuning and performance analytics | Data preprocessing | Data Transformation | Data Reduction | Data Visualization | Classification | Exploratory Data Analysis | Clustering | Regression Models</p>
              <h1 className="text-xl font-bold text-[#ff0000]">Neural Networks : </h1>
              <p className="text-white"> Neural Network | Advance Neural Network | CNN (Convolutional Neural Network) | RNN (Recurrent Neural Network) | GAN (Generative Adversarial Network) | LSTM (Long Short-Term Memory) | Filtering Methods | RBM | Transfer Learning | Reinforcement Learning</p>
            
              <h1 className="text-xl font-bold text-[#ff0000]">Generative AI : </h1>
              <p className="text-white">Artificial Intelligence to generate all kinds of data, including audio, code, images, text, simulations. (Eg. ChatGPT) | Data Processing and Analytics | NLP – Text Analytics | Speech Analytics
              </p>

              <h1 className="text-xl font-bold text-[#ff0000]">AWS Cloud Services :  </h1>
              <p className="text-white"> AWS Cloud | Amazon SageMaker | Rekognition | Comprehend | Transcribe | Amazon Forecast | Personalize | Lex | Fraud Detector | Translate | Polly

              </p>
              <h1 className="text-xl font-bold text-[#ff0000]">DevOps Tools : </h1>
              <p className="text-white">  Pipeline as Code | Docker | Podman | Kubernetes | Openshift | Terraform | Jenkins</p>
              <h1 className="text-xl font-bold text-[#ff0000]">Web & Mobile development : </h1>
              <p className="text-white"> Html | CSS | Javascript | Django OR Flask OR Nodejs  (Web App) | RestAPI | Flutter OR React Native  (Mobile App) </p>
             
              <h1 className="text-xl font-bold text-[#ff0000]"> Text Analytics and Speech Analytics : </h1>
              <p className="text-white"> Text Analytics | Speech Analytics </p>
              <h1 className="text-xl font-bold text-[#ff0000]">Databases Management : </h1>
              <p className="text-white">Mysql | MongoDB</p>
              <h1 className="text-xl font-bold text-[#ff0000]">Version Control : </h1>
              <p className="text-white">Git | Github </p>
              <h1 className="text-xl font-bold text-[#ff0000]">Operating System:</h1>
              <p className="text-white">RHELv9 (Red Hat Enterprise Linux)</p>
            





              <div className=" space-y-6 bg-[#f2d5d5]">
                   <h2 className="text-2xl font-bold tracking-tight text-[#ff0000]"> 7. Create Your OWN Artificial Intelligence Platform Using ML/DL & Generative AI Integrated With DevOps Pipeline Along With Cloud Computing - Generative AIOps  </h2>
                   <p className="text-white">Develop Own Cloud Computing with AI Intelligence by Custom Machine/Deep Learning Model that deploy using DevOps Technology Integrated with Generative AI - ChatGPT API</p>
                  </div>
              <h1 className="text-xl font-bold text-[#ff0000]">Python Libraries : </h1>
              <p className="text-white">
              Python | Numpy | Pandas | Matplotlib | Seaborn
              </p>
              <h1 className="text-xl font-bold text-[#ff0000]">Deep Learning Frameworks :  </h1>
              <p className="text-white">TensorFlow | Pytorch | Keras
              </p>
              <h1 className="text-xl font-bold text-[#ff0000]">Machine Learning : </h1>
              <p className="text-white">Model tuning and performance analytics | Data preprocessing | Data Transformation | Data Reduction | Data Visualization | Classification | Exploratory Data Analysis | Clustering | Regression Models</p>
              <h1 className="text-xl font-bold text-[#ff0000]">Neural Networks : </h1>
              <p className="text-white"> Neural Network | Simple Neural Networks | Advance Neural Network | CNN (Convolutional Neural Network) | RNN (Recurrent Neural Network) | GAN (Generative Adversarial Network) | LSTM (Long Short-Term Memory) | Filtering Methods | RBM | Advanced NN models | Transfer Learning | Reinforcement Learning</p>
               
              <h1 className="text-xl font-bold text-[#ff0000]">Generative AI : </h1>
              <p className="text-white">Artificial Intelligence to generate all kinds of data, including audio, code, images, text, simulations. (Eg. ChatGPT) | Data Processing and Analytics | NLP – Text Analytics | Speech Analytics
              </p>

              <h1 className="text-xl font-bold text-[#ff0000]">NLP : </h1>
              <p className="text-white">Text Analytics | Speech Analytics | Model Deployment and Scalability:Association Mining | Recommendation System
              </p>
              <h1 className="text-xl font-bold text-[#ff0000]">AWS Cloud Services :  </h1>
              <p className="text-white"> AWS Cloud | Amazon SageMaker | Rekognition | Comprehend | Transcribe | Amazon Forecast | Personalize | Lex | Fraud Detector | Translate | Polly

              </p>
              <h1 className="text-xl font-bold text-[#ff0000]">DevOps Tools  : </h1>
              <p className="text-white"> Pipeline as Code | Docker | Podman | Kubernetes | Openshift | Terraform | Jenkins
              </p>
              <h1 className="text-xl font-bold text-[#ff0000]">Infrastructure and DevOps : </h1>
              <p className="text-white"> RedHat Linux | Kubernetes | Terraform | Jenkins | Virtualization  (Web App) | RestAPI | Flutter OR React Native  (Mobile App) </p>
              <h1 className="text-xl font-bold text-[#ff0000]">Web & Mobile development : </h1>
              <p className="text-white"> Html | CSS | Javascript | Django OR Flask OR Nodejs  (Web App) | RestAPI | Flutter OR React Native  (Mobile App) </p>
              <h1 className="text-xl font-bold text-[#ff0000]">Databases : </h1>
              <p className="text-white">Mysql | MongoDB</p>
              <h1 className="text-xl font-bold text-[#ff0000]">Version Control : </h1>
              <p className="text-white">Git | Github </p>
              <h1 className="text-xl font-bold text-[#ff0000]">Operating System:</h1>
              <p className="text-white">RHELv9 (Red Hat Enterprise Linux)</p>
            
            
            </div>
              <div>
                 <Button size="lg" className="bg-[#ff0000] text-white">
                   Enroll Now
                 </Button>
              </div>
            
          </div>
          

          {/* Add more sections to demonstrate scroll effect */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tight text[#ff0000]">Additional Features</h2>
            <div className="space-y-4 text-gray-600">
              <p className="text-white ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua.
              </p>
              <p className="text-white">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tight text[#ff0000]">Why Choose Us?</h2>
            <div className="space-y-4 text-gray-600">
              <p className="text-white">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
              <p className="text-white">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </section>
        </div>
      </div>
    // </div>
  )
}