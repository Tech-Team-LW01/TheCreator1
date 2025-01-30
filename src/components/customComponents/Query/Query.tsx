"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Linkedin } from "lucide-react";

export default function Query() {
  const [isSwapped, setIsSwapped] = useState(false);

  const handleSwap = () => {
    setIsSwapped(!isSwapped);
  };

  return (
    <div className="min-h-full flex flex-col lg:flex-row overflow-hidden">
      {/* Left Side - Sign In Form */}
      <motion.div
        className="flex-1 flex flex-col items-center justify-center px-6 lg:px-16 py-12"
        initial={{ x: 0 }}
        animate={{ x: isSwapped ? "100%" : 0 }}
        transition={{ type: "tween", duration: 0.5 }}
      >
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="mb-8">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Pli8x9DOuwTY15uvCmswwA2AemCz33.png"
              alt="Diprella Logo"
              className="h-8 w-auto"
            />
          </div>

          {/* Sign In Header */}
          <h1 className="text-2xl font-semibold text-gray-900 mb-8">Have any Query ?</h1>

          {/* Social Login */}
          <div className="flex justify-center space-x-4 mb-8">
            <Button variant="outline" size="icon" className="rounded-full w-10 h-10">
              <Facebook className="h-5 w-5 text-[#1877F2]" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full w-10 h-10">
              <svg className="h-5 w-5" viewBox="0 0 24 24">
                <path
                  fill="#EA4335"
                  d="M5.266 9.765A7.077 7.077 0 0 1 12 4.909c1.69 0 3.218.6 4.418 1.582L19.91 3C17.782 1.145 15.055 0 12 0 7.27 0 3.198 2.698 1.24 6.65l4.026 3.115Z"
                />
                <path
                  fill="#34A853"
                  d="M16.04 18.013c-1.09.703-2.474 1.078-4.04 1.078a7.077 7.077 0 0 1-6.723-4.823l-4.04 3.067A11.965 11.965 0 0 0 12 24c2.933 0 5.735-1.043 7.834-3l-3.793-2.987Z"
                />
                <path
                  fill="#4A90E2"
                  d="M19.834 21c2.195-2.048 3.62-5.096 3.62-9 0-.71-.109-1.473-.272-2.182H12v4.637h6.436c-.317 1.559-1.17 2.766-2.395 3.558L19.834 21Z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.277 14.268A7.12 7.12 0 0 1 4.909 12c0-.782.125-1.533.357-2.235L1.24 6.65A11.934 11.934 0 0 0 0 12c0 1.92.445 3.73 1.237 5.335l4.04-3.067Z"
                />
              </svg>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full w-10 h-10">
              <Linkedin className="h-5 w-5 text-[#0A66C2]" />
            </Button>
          </div>

          <div className="text-center text-sm text-gray-500 mb-8">or use your email account</div>

          {/* Sign In Form */}
          <form className="space-y-6">
            <div>
              <Input type="email" placeholder="Email" className="bg-gray-50" />
            </div>
            <div>
              <Input type="password" placeholder="Password" className="bg-gray-50" />
            </div>
            <div className="text-right">
              <Button variant="link" className="text-sm text-gray-600">
                Forgot your password?
              </Button>
            </div>
            <Button
              type="button" // Prevent form submission
              className="w-full bg-[#40C7B5] hover:bg-[#3BB3A3] text-white"
              onClick={handleSwap}
            >
              SIGN IN
            </Button>
          </form>
        </div>
      </motion.div>

      {/* Right Side - Welcome Panel */}
      <motion.div
        className="flex-1 bg-[#40C7B5] text-white p-12 flex flex-col items-center justify-center relative overflow-hidden"
        initial={{ x: 0 }}
        animate={{ x: isSwapped ? "-100%" : 0 }}
        transition={{ type: "tween", duration: 0.5 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#40C7B5] to-[#34A599]" />

        {/* Decorative Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-[20%] left-[20%] w-16 h-16 rounded-full bg-white/10" />
          <div className="absolute bottom-[30%] right-[10%] w-24 h-24 rounded-full bg-white/10" />
          <div className="absolute top-[60%] left-[10%] w-32 h-32 rounded-full bg-white/10" />
        </div>

        <div className="relative z-10 text-center">
          <h2 className="text-4xl font-bold mb-6">Hello, Friend!</h2>
          <p className="mb-8 text-lg">
            Enter your personal details
            <br />
            and start journey with us
          </p>
          <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10">
            SIGN UP
          </Button>
        </div>
      </motion.div>
    </div>
  );
}