
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    console.log("Form submitted:", formState);
    alert("Thanks for contacting us! We'll get back to you soon.");
    setFormState({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions or want to discuss how we can help secure your
            business? Reach out to our team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-2xl font-semibold mb-6">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-base">
                  Full Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="mt-1"
                  required
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-base">
                  Email Address
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="mt-1"
                  required
                />
              </div>
              <div>
                <Label htmlFor="subject" className="text-base">
                  Subject
                </Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  className="mt-1"
                  required
                />
              </div>
              <div>
                <Label htmlFor="message" className="text-base">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  className="mt-1 min-h-[120px]"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-primary-500 hover:bg-primary-600 text-white"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col justify-between">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <p className="text-gray-600 mb-8">
                Our team is here to help you with any questions or concerns. Feel free to reach out using any of the methods below.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary-100 mr-4">
                    <Mail className="h-5 w-5 text-primary-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Email Us</h4>
                    <a href="mailto:info@cybershield.com" className="text-gray-600 hover:text-primary-500 transition-colors">
                      info@cybershield.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary-100 mr-4">
                    <Phone className="h-5 w-5 text-primary-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Call Us</h4>
                    <a href="tel:+11234567890" className="text-gray-600 hover:text-primary-500 transition-colors">
                      +1 (123) 456-7890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary-100 mr-4">
                    <MapPin className="h-5 w-5 text-primary-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Visit Us</h4>
                    <address className="text-gray-600 not-italic">
                      123 Security Street<br />
                      San Francisco, CA 94105<br />
                      United States
                    </address>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Office Hours */}
            <div className="bg-gray-900 text-white p-8 rounded-lg mt-4">
              <h4 className="text-xl font-semibold mb-4">Office Hours</h4>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday:</span>
                  <span>10:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
