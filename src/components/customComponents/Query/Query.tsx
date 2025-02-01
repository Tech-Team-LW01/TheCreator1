"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Linkedin } from "lucide-react";

export default function Query() {
  const [isSwapped, setIsSwapped] = useState(false);
  const [isSignInForm, setIsSignInForm] = useState(true);

  const handleSwap = () => {
    setIsSwapped(!isSwapped);
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-6">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden flex flex-col lg:flex-row">
        {/* Left Side - Form Section */}
        <motion.div
          className="flex-1 flex flex-col items-center justify-center px-6 lg:px-16 py-12"
          initial={{ x: 0 }}
          animate={{ x: isSwapped ? "100%" : 0 }}
          transition={{ type: "tween", duration: 0.5 }}
        >
          <div className="w-full max-w-md">
            {/* <div className="mb-8">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Pli8x9DOuwTY15uvCmswwA2AemCz33.png"
                alt="Diprella Logo"
                className="h-8 w-auto"
              />
            </div> */}

            <h1 className="text-2xl font-semibold text-gray-900 mb-8">
              {isSignInForm ? "Have any Query?" : "Create an Account"}
            </h1>

            <div className="flex justify-center space-x-4 mb-8">
              <Button variant="outline" size="icon" className="rounded-full w-10 h-10">
                <Facebook className="h-5 w-5 text-[#1877F2]" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full w-10 h-10">
                <Linkedin className="h-5 w-5 text-[#0A66C2]" />
              </Button>
            </div>

            <div className="text-center text-sm text-gray-500 mb-8">or use your email account</div>

            {isSignInForm ? (
              <form className="space-y-6">
                <Input type="email" placeholder="Email" className="bg-gray-50" />
                <Input type="password" placeholder="Password" className="bg-gray-50" />
                <Button
                  type="button"
                  className="w-full bg-[#ff0000] hover:bg-[#6f6f6f] text-white"
                  onClick={handleSwap}
                >
                  SIGN IN
                </Button>
              </form>
            ) : (
              <form className="space-y-6">
                <Input type="text" placeholder="Full Name" className="bg-gray-50" />
                <Input type="email" placeholder="Email" className="bg-gray-50" />
                <Input type="password" placeholder="Password" className="bg-gray-50" />
                <Button
                  type="button"
                  className="w-full bg-[#ff0000] hover:bg-[#6f6f6f] text-white"
                  onClick={handleSwap}
                >
                  SIGN UP
                </Button>
              </form>
            )}
          </div>
        </motion.div>

        {/* Right Side - Welcome Panel */}
        <motion.div
          className="flex-1 bg-[#ff0000] text-white p-16 flex flex-col items-center justify-center"
          initial={{ x: 0 }}
          animate={{ x: isSwapped ? "-100%" : 0 }}
          transition={{ type: "tween", duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-6">Hello, Friend!</h2>
          <p className="mb-8 text-lg">Enter your personal details and start journey with us</p>
          <Button
            variant="outline"
            className="border-2 border-white bg-[#ff0000] text-white hover:bg-white/10"
            onClick={handleSwap}
          >
            {isSignInForm ? "SIGN UP" : "SIGN IN"}
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
