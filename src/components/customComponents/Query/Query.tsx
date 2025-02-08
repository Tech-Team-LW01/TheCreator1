"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Toaster, toast } from "react-hot-toast"; // Add Toaster import

import { Poppins } from 'next/font/google'
const poppins = Poppins({
   subsets: ['latin'],
   weight: ['400']
})

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  query: string;
}

export default function Query(): JSX.Element {
  const [loading, setLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    query: ''
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = (): boolean => {
    if (!formData.fullName || !formData.email || !formData.phone || !formData.query) {
      toast.error("All fields are required");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email");
      return false;
    }

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      toast.error("Please enter a valid 10-digit phone number");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
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
      console.log('Response:', data); // Debug log

      if (response.ok) {
        toast.success("Query submitted successfully!");
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          query: ''
        });
      } else {
        toast.error(data.message || "Something went wrong!");
      }
    } catch (error) {
      console.error('Error:', error); // Debug log
      toast.error("Failed to submit query");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-6">
      <Toaster position="top-center" /> {/* Add Toaster component */}
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden flex flex-col lg:flex-row">
        {/* Left Side - Form Section */}
        <div className="flex-1 flex flex-col items-center justify-center px-6 lg:px-16 py-12">
          <div className="w-full max-w-md">
            <h1 className="text-2xl font-semibold text-gray-900 mb-8">
              Have any Query?
            </h1>

            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                type="text"
                name="fullName"
                placeholder="Full Name"
                className="bg-gray-50"
                value={formData.fullName}
                onChange={handleInputChange}
              />
              <Input
                type="email"
                name="email"
                placeholder="Email"
                className="bg-gray-50"
                value={formData.email}
                onChange={handleInputChange}
              />
              <Input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="bg-gray-50"
                value={formData.phone}
                onChange={handleInputChange}
              />
              <Textarea
                name="query"
                placeholder="Your Query"
                className="bg-gray-50 min-h-[100px]"
                value={formData.query}
                onChange={handleInputChange}
              />
              <Button
                type="submit"
                className="w-full bg-[#ff0000] hover:bg-[#6f6f6f] text-white"
                disabled={loading}
              >
                {loading ? "Submitting..." : "SUBMIT"}
              </Button>
            </form>
          </div>
        </div>

        {/* Right Side - Welcome Panel */}
        <div
          className="flex-1 p-16 flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/assets/Projects/form.jpg')"
          }}
        >
          <h2 className="text-4xl font-bold mb-6 text-white font-khand">Hello, Friend!</h2>
          <p className={`mb-8 text-lg text-white ${poppins.className}`}>
            We're here to help! Send us your query and we'll get back to you soon.
          </p>
        </div>
      </div>
    </div>
  );
}