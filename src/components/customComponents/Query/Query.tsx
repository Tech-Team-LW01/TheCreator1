"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Linkedin, Loader2 } from "lucide-react";
import toast, { Toaster } from 'react-hot-toast';

import { Inter, Poppins } from 'next/font/google';


import localFont from "next/font/local";
const khandFont = localFont({
    src: '../../../app/fonts/Khand-SemiBold.woff',
    weight: '100 900',
});

const poppins = Poppins({
   subsets: ['latin'],
   weight: ['400']
});

// Form data interface
interface FormData {
  fullName: string;
  email: string;
  phone: string;
  query: string;
  college: string;
}

const initialFormData: FormData = {
  fullName: "",
  email: "",
  phone: "",
  query: "",
  college: ""
};

export default function Query() {
  // State management
  const [isSwapped, setIsSwapped] = useState(false);
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  // const [college, setCollege] = useState("");
  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Form validation
  const validateForm = () => {
    if (!formData.fullName.trim()) {
      toast.error("Please enter your full name");
      return false;
    }

    if (!formData.college.trim()) {
      toast.error("Please enter your full name");
      return false;
    }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return false;
    }
    if (!formData.phone.trim() || !/^\d{10}$/.test(formData.phone)) {
      toast.error("Please enter a valid 10-digit phone number");
      return false;
    }
    if (!formData.query.trim()) {
      toast.error("Please enter your query");
      return false;
    }
    return true;
  };

  // Form submission handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("click on submit")
    if (!validateForm()) return;
    
    setLoading(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      console.log(data)
      if (response.ok) {
        toast.success("Query submitted successfully!");
        setFormData(initialFormData);
      } else {
        console.error('Error:', data.message);
        toast.error(data.message || "Something went wrong!");
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error("Failed to submit query");
    } finally {
      setLoading(false);
    }
  };

  // Handle swap between forms
  const handleSwap = () => {
    setIsSwapped(!isSwapped);
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-6" id="#query">
    <Toaster
  position="top-center"
  reverseOrder={false}
/>
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden flex flex-col lg:flex-row">
        {/* Left Side - Form Section */}
        <motion.div
          className="flex-1 flex flex-col items-center justify-center px-6 lg:px-16 py-12"
          initial={{ x: 0 }}
          animate={{ x: isSwapped ? "100%" : 0 }}
          transition={{ type: "tween", duration: 0.5 }}
        >
          

            {/* <div className="flex justify-center space-x-4 mb-8">
              <Button variant="outline" size="icon" className="rounded-full w-10 h-10">
                <Facebook className="h-5 w-5 text-[#1877F2]" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full w-10 h-10">
                <Linkedin className="h-5 w-5 text-[#0A66C2]" />
              </Button>
            </div> */}

            {/* <div className="text-center text-sm text-gray-500 mb-8">
              or use your email account
            </div> */}

            {isSignInForm ? (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <Input 
                  type="text" 
                  name="fullName"
                  placeholder="Full Name" 
                  value={formData.fullName}
                  onChange={handleChange}
                  className="bg-gray-50" 
                  disabled={loading}
                />
                <Input 
                  type="email" 
                  name="email"
                  placeholder="Email" 
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-gray-50"
                  disabled={loading}
                />
                <Input 
                  type="tel" 
                  name="phone"
                  placeholder="Phone" 
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-gray-50"
                  disabled={loading}
                  maxLength={10}
                />

<Input 
                  type="text" 
                  name="college"
                  placeholder="College Name" 
                  value={formData.college}
                  onChange={handleChange}
                  className="bg-gray-50"
                  disabled={loading}
                  maxLength={10}
                />
                <Input 
                  type="textarea" 
                  name="query"
                  placeholder="Query" 
                  value={formData.query}
                  onChange={handleChange}
                  className="bg-gray-50"
                  disabled={loading}
                />
                <Button
                  type="submit"
                  className="w-full bg-[#ff0000] hover:bg-[#6f6f6f] text-white"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    'Submit'
                  )}
                </Button>
              </form>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <Input 
                  type="text" 
                  name="fullName"
                  placeholder="Full Name" 
                  value={formData.fullName}
                  onChange={handleChange}
                  className="bg-gray-50" 
                  disabled={loading}
                />
                <Input 
                  type="email" 
                  name="email"
                  placeholder="Email" 
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-gray-50"
                  disabled={loading}
                />
                <Input 
                  type="tel" 
                  name="phone"
                  placeholder="Phone" 
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-gray-50"
                  disabled={loading}
                  maxLength={10}
                />

<Input 
                  type="text" 
                  name="college"
                  placeholder="College Name" 
                  value={formData.college}
                  onChange={handleChange}
                  className="bg-gray-50"
                  disabled={loading}
                  maxLength={10}
                />
                <Input 
                  type="textarea" 
                  name="query"
                  placeholder="Query" 
                  value={formData.query}
                  onChange={handleChange}
                  className="bg-gray-50"
                  disabled={loading}
                />
                <Button
                  type="submit"
                  className="w-full bg-[#ff0000] hover:bg-[#6f6f6f] text-white"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    'Submit'
                  )}
                </Button>
              </form>
            )}
         
        </motion.div>

        {/* Right Side - Welcome Panel */}
        <motion.div
          className="flex-1 p-16 flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/assets/Projects/form.jpg')"
          }}
          initial={{ x: 0 }}
          animate={{ x: isSwapped ? "-100%" : 0 }}
          transition={{ type: "tween", duration: 0.5 }}
        >
          <h2 className={`text-4xl font-bold mb-6 text-white ${khandFont.className}`}>
            Hello, Friend!
          </h2>
          <p className={`mb-8 text-lg text-white ${poppins.className}`}>
  {isSignInForm ? (
    <>
      I am looking for <strong>Offline Summer</strong> Industrial Training where I can meet Engineering students from across India & work together as a team 😊
    </>
  ) : (
    "I know I will miss all the Offline Benefits of Summer Program & attend JAZBAA but still want to attend Online Training 😔"
  )}
</p>

          <Button
            variant="outline"
            className="border-2 border-white bg-[#ff0000] text-white hover:bg-white/10"
            onClick={handleSwap}
          >
            {isSignInForm 
              ? "No, I am looking for Online Summer Program" 
              : "No, I think I should attend Offline Summer Program"}
          </Button>
        </motion.div>

        <div className="w-full max-w-md">
            <h1 className="text-4xl font-bold text-[#ff0000] mb-2">
              Lets Talk

            </h1>

            <h1 className="text-xl  text-gray-900 mb-8">
            Our Summer Executive will connect in next 24 hours

              
            </h1>
            </div>
      </div>
    </div>
  );
}