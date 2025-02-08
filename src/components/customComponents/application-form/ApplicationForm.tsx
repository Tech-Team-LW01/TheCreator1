// components/ApplicationForm.tsx
"use client"

import { useState } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Toaster } from "@/components/ui/toaster"
import { Loader2 } from "lucide-react" // For loading spinner

const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
  whatsappNo: z.string().min(10, {
    message: "WhatsApp number must be at least 10 digits.",
  }),
  emailAddress: z.string().email({
    message: "Please enter a valid email address.",
  }),
  collegeName: z.string().min(2, {
    message: "College name must be at least 2 characters.",
  }),
  branch: z.string().min(2, {
    message: "Branch must be at least 2 characters.",
  }),
  currentSemester: z.string().min(1, {
    message: "Please select your current semester.",
  }),
  applyingFor: z.string().min(1, {
    message: "Please select what you're applying for.",
  }),
  tentativeDates: z.string().min(1, {
    message: "Please select tentative dates.",
  }),
  referenceName: z.string().optional(),
  source: z.string().min(1, {
    message: "Please select how you found us.",
  }),
  query: z.string().optional(),
})

export function ApplicationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      whatsappNo: "",
      emailAddress: "",
      collegeName: "",
      branch: "",
      currentSemester: "",
      applyingFor: "",
      tentativeDates: "",
      referenceName: "",
      source: "",
      query: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/submit-application', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })

      if (!response.ok) {
        throw new Error('Failed to submit application')
      }

      toast({
        title: "Application Submitted Successfully!",
        description: "We'll get back to you soon.",
        variant: "default",
      })
      
      form.reset()
    } catch (error) {
      console.error('Submission error:', error)
      toast({
        title: "Submission Failed",
        description: "Please try again later or contact support.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-red-600">Summer Application Form</h1>
        <p className="text-sm text-red-600">
          BECOME A PART OF ONE & ONLY RESEARCH BASED THE SUMMER PROGRAM OF INDIA
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name *</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Enter your full name" 
                    {...field} 
                    disabled={isSubmitting}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="whatsappNo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>WhatsApp No *</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Enter your WhatsApp number" 
                    {...field} 
                    disabled={isSubmitting}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="emailAddress"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address *</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Enter your email address" 
                    type="email" 
                    {...field} 
                    disabled={isSubmitting}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="collegeName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>College Name *</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Enter your college name" 
                    {...field} 
                    disabled={isSubmitting}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="branch"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Which Degree you Pursuing? *</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Enter your branch" 
                    {...field} 
                    disabled={isSubmitting}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="currentSemester"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Year of Passing Out *</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Enter your WhatsApp number" 
                    {...field} 
                    disabled={isSubmitting}
                  />
                </FormControl>
                {/* <Select 
                  onValueChange={field.onChange} 
                  defaultValue={field.value}
                  disabled={isSubmitting}
                  
                > */}
                  {/* <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select semester" />
                    </SelectTrigger>
                  </FormControl> */}
                  {/* <SelectContent>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
                      <SelectItem key={sem} value={sem.toString()}>
                        Semester {sem}
                      </SelectItem>
                    ))}
                  </SelectContent> */}
                {/* </Select> */}
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="applyingFor"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Applying For *</FormLabel>
                <Select 
                  onValueChange={field.onChange} 
                  defaultValue={field.value}
                  disabled={isSubmitting}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select program" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="aws">Cloud Computing</SelectItem>
                    <SelectItem value="web">FullStack Development</SelectItem>
                    <SelectItem value="ai">Machine Learning(AI)</SelectItem>
                    <SelectItem value="data">Generative AI Ops</SelectItem>
                    <SelectItem value="web">Cloud + DevOps</SelectItem>
                    <SelectItem value="web">ML + DevOps</SelectItem>
                    <SelectItem value="web">Others</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="tentativeDates"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tentative Training Dates *</FormLabel>
                <Select 
                  onValueChange={field.onChange} 
                  defaultValue={field.value}
                  disabled={isSubmitting}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select dates" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="may2024">May 2025</SelectItem>
                    <SelectItem value="june2024">June 2025</SelectItem>
                    <SelectItem value="july2024">July 2025</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="referenceName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Reference Name</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Enter reference name (optional)" 
                    {...field} 
                    disabled={isSubmitting}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="source"
            render={({ field }) => (
              <FormItem>
                <FormLabel>From where did you get to know about us? *</FormLabel>
                <Select 
                  onValueChange={field.onChange} 
                  defaultValue={field.value}
                  disabled={isSubmitting}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select source" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="youtube">YouTube</SelectItem>
                    <SelectItem value="facebook">Facebook</SelectItem>
                    <SelectItem value="instagram">Instagram</SelectItem>
                    <SelectItem value="friend">Friend</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="query"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Any query</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Type your query here (optional)"
                    className="resize-none"
                    {...field}
                    disabled={isSubmitting}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button 
            type="submit" 
            className="w-full bg-red-600 hover:bg-red-700"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              "Submit Application"
            )}
          </Button>
        </form>
      </Form>

      <p className="text-sm text-center mt-6 text-gray-600">
        Note: In case of any query or issue feel free to connect with us on{" "}
        <span className="font-bold">+91-</span> or email us at{" "}
        <span className="text-red-600">Preeti@lwindia.com</span>
      </p>
      <Toaster />
    </div>
  )
}

export default ApplicationForm