"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { sendContactEmail } from "@/app/actions"
import { useToast } from "@/hooks/use-toast"
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const { toast } = useToast()

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)
    try {
      await sendContactEmail(formData)
      setIsSuccess(true)
      toast({
        title: "Message Sent",
        description: "Thank you for contacting us. We'll get back to you soon.",
        variant: "default",
      })
      // Reset the form
      const form = document.getElementById("contact-form") as HTMLFormElement
      form.reset()

      // Reset success state after 5 seconds
      setTimeout(() => {
        setIsSuccess(false)
      }, 5000)
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="pt-24 pb-16">
      <div
        className="relative bg-cover bg-center py-20 mb-12"
        style={{
          backgroundImage: 'url("/placeholder.svg?height=1080&width=1920")',
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="container relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Contact Us</h1>
          <p className="text-white/80 max-w-2xl mx-auto">
            Have questions or ready to start your project? Get in touch with our team.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Form */}
          <motion.div
            className="lg:col-span-7 bg-card rounded-lg shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="p-8 md:p-12">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

              {isSuccess ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Message Sent Successfully!</h3>
                  <p className="text-muted-foreground mb-6">
                    Thank you for reaching out. Our team will get back to you shortly.
                  </p>
                  <Button onClick={() => setIsSuccess(false)}>Send Another Message</Button>
                </div>
              ) : (
                <form id="contact-form" action={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Full Name <span className="text-primary">*</span>
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        required
                        className="border-muted-foreground/20 focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email Address <span className="text-primary">*</span>
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        required
                        className="border-muted-foreground/20 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        placeholder="+1 (555) 123-4567"
                        className="border-muted-foreground/20 focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject <span className="text-primary">*</span>
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="Project Inquiry"
                        required
                        className="border-muted-foreground/20 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message <span className="text-primary">*</span>
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your project..."
                      rows={6}
                      required
                      className="border-muted-foreground/20 focus:border-primary"
                    />
                  </div>

                  <Button type="submit" className="w-full group" disabled={isSubmitting} size="lg">
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        Send Message
                        <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="lg:col-span-5 space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-card p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Our Office</h3>
                    <p className="text-muted-foreground">
                      123 Engineering Blvd, <br />
                      Suite 456, <br />
                      Metro City, MC 12345
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Phone</h3>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    <p className="text-muted-foreground">+1 (555) 987-6543</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Email</h3>
                    <p className="text-muted-foreground">info@buildmaster.com</p>
                    <p className="text-muted-foreground">projects@buildmaster.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Working Hours</h3>
                    <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-muted-foreground">Saturday: 10:00 AM - 2:00 PM</p>
                    <p className="text-muted-foreground">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Follow Us</h2>
              <div className="flex gap-4">
                <a href="#" className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-primary"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="#" className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-primary"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
                <a href="#" className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-primary"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </a>
                <a href="#" className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-primary"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Map */}
        <motion.div
          className="mt-12 rounded-lg overflow-hidden shadow-lg h-[400px] relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="absolute inset-0 bg-black/10 pointer-events-none z-10 flex items-center justify-center">
            <div className="bg-card p-6 rounded-lg shadow-lg max-w-md text-center">
              <h3 className="text-xl font-bold mb-2">Visit Our Office</h3>
              <p className="text-muted-foreground mb-4">
                We'd love to meet you in person to discuss your project needs.
              </p>
              <p className="font-medium">123 Engineering Blvd, Suite 456, Metro City, MC 12345</p>
            </div>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1191%3A0x49f75d3281df052a!2s150%20Park%20Row%2C%20New%20York%2C%20NY%2010007%2C%20USA!5e0!3m2!1sen!2sus!4v1580331106806!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>
    </div>
  )
}
