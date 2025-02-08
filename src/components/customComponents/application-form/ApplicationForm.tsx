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
import { Loader2 } from "lucide-react"

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
  otherProgram: z.string().optional(),
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
  const [showOtherProgram, setShowOtherProgram] = useState(false)
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
      otherProgram: "",
      tentativeDates: "",
      referenceName: "",
      source: "",
      query: "",
    },
  })

  const handleProgramChange = (value: string) => {
    form.setValue('applyingFor', value)
    setShowOtherProgram(value === 'others')
    if (value !== 'others') {
      form.setValue('otherProgram', '')
    }
  }

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    try {
      // Prepare the final submission data
      const submissionData = {
        ...values,
        // If "Others" is selected, use the otherProgram value as the program name
        applyingFor: values.applyingFor === 'others' ? values.otherProgram : values.applyingFor
      }

      const response = await fetch('/api/submit-application', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
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
      setShowOtherProgram(false)
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
          BECOME A PART OF ONE & ONLY RESEARCH BASED The SUMMER PROGRAM OF INDIA
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Previous form fields remain the same until applyingFor */}
          
          <FormField
            control={form.control}
            name="applyingFor"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Applying For *</FormLabel>
                <Select 
                  onValueChange={handleProgramChange}
                  defaultValue={field.value}
                  disabled={isSubmitting}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select program" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="cloud">Cloud Computing</SelectItem>
                    <SelectItem value="fullstack">FullStack Development</SelectItem>
                    <SelectItem value="ml">Machine Learning(AI)</SelectItem>
                    <SelectItem value="genai">Generative AI Ops</SelectItem>
                    <SelectItem value="clouddevops">Cloud + DevOps</SelectItem>
                    <SelectItem value="mldevops">ML + DevOps</SelectItem>
                    <SelectItem value="others">Others</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {showOtherProgram && (
            <FormField
              control={form.control}
              name="otherProgram"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Specify Other Program *</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Please specify the program you're interested in"
                      {...field}
                      disabled={isSubmitting}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          {/* Rest of the form fields remain the same */}

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
        <span className="font-bold">+91-9351009002</span> or email us at{" "}
        <span className="text-red-600">Preeti@lwindia.com</span>
      </p>
      <Toaster />
    </div>
  )
}

export default ApplicationForm