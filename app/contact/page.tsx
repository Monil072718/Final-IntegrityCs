import ContactForm from "@/components/contact-form"
import { MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-muted-foreground">
            Have questions or ready to start your project? Get in touch with our team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 mb-16">
          <div className="lg:col-span-3">
            <div className="bg-card p-8 rounded-lg border h-full">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
          {/* <div className="lg:col-span-2">
            <div className="bg-card p-8 rounded-lg border h-full">
              <h2 className="text-2xl font-bold mb-6">Our Offices</h2>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">Headquarters</h3>
                    <p className="text-muted-foreground">
                      123 Engineering Blvd, <br />
                      Suite 456, <br />
                      Metro City, MC 12345
                    </p>
                    <p className="mt-2">
                      <span className="text-muted-foreground">Phone:</span> +1 (555) 123-4567
                    </p>
                    <p>
                      <span className="text-muted-foreground">Email:</span> info@buildmaster.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">Regional Office</h3>
                    <p className="text-muted-foreground">
                      456 Construction Ave, <br />
                      Floor 3, <br />
                      Harbor City, HC 67890
                    </p>
                    <p className="mt-2">
                      <span className="text-muted-foreground">Phone:</span> +1 (555) 987-6543
                    </p>
                    <p>
                      <span className="text-muted-foreground">Email:</span> regional@buildmaster.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-bold mb-4">Office Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

        <div className="rounded-lg overflow-hidden h-[400px] relative">
          <div className="absolute inset-0 bg-black/10 pointer-events-none z-10 flex items-center justify-center">
            <div className="bg-card p-6 rounded-lg shadow-lg max-w-md text-center">
              <h3 className="text-xl font-bold mb-2">Visit Our Office</h3>
              <p className="text-muted-foreground mb-4">
                We'd love to meet you in person to discuss your project needs.
              </p>
              <p className="font-medium">461, Laxmi Enclave 2, Opp. Gajera School, Katargam, Surat. 395004</p>
            </div>
          </div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.991892671654!2d72.83407277584514!3d21.232170080760067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04faadc8e6dc1%3A0x5e3eaf3bf2dd54e4!2sINTEGRITY%20CONSULTANCY%20SERVICES!5e0!3m2!1sen!2sin!4v1745849264679!5m2!1sen!2sin" width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  )
}
