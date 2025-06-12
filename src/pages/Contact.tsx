
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({ name: "", email: "", company: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Shuttle Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 z-0"></div>

        {/* Modern Geometric Shapes */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-black/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-black/3 rounded-full blur-3xl"></div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 grid-background z-10 opacity-30"></div>

        <div className="container mx-auto px-4 md:px-20 relative z-20">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block mb-4 px-4 py-1 bg-black/5 backdrop-blur-sm rounded-full">
              <span className="text-sm font-medium text-black/70">
                Get In Touch
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Contact <span className="text-primary-500">Our Team</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Ready to secure your business? Let's discuss how our cybersecurity solutions can protect your digital assets.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="border-black/10 shadow-lg hover-lift">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">Send us a message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your company name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your cybersecurity needs..."
                        className="min-h-[120px]"
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-primary-500 hover:bg-primary-500/90 text-white button-glow"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Get in touch</h2>
                <p className="text-gray-600 mb-8">
                  We're here to help you secure your digital future. Reach out to us through any of the channels below.
                </p>
              </div>

              <div className="grid gap-6">
                <Card className="border-black/10 hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary-500/10 p-3 rounded-lg">
                        <Mail className="h-6 w-6 text-primary-500" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Email</h3>
                        <p className="text-gray-600">info@softwaroid.com</p>
                        <p className="text-gray-600">support@softwaroid.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-black/10 hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary-500/10 p-3 rounded-lg">
                        <Phone className="h-6 w-6 text-primary-500" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Phone</h3>
                        <p className="text-gray-600">+1 (555) 123-4567</p>
                        <p className="text-gray-600">+1 (555) 987-6543</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-black/10 hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary-500/10 p-3 rounded-lg">
                        <MapPin className="h-6 w-6 text-primary-500" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Office</h3>
                        <p className="text-gray-600">123 Security Boulevard</p>
                        <p className="text-gray-600">Tech District, TC 12345</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-black/10 hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary-500/10 p-3 rounded-lg">
                        <Clock className="h-6 w-6 text-primary-500" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Business Hours</h3>
                        <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p className="text-gray-600">24/7 Emergency Support Available</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Response Time Section */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-gray-50 to-white"></div>
        <div className="container mx-auto px-4 md:px-20 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Quick Response, Expert Solutions
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              Our dedicated team is committed to providing rapid responses to your cybersecurity inquiries.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-500 mb-2">&lt;1hr</div>
                <div className="text-gray-600">Emergency Response</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-500 mb-2">&lt;24hr</div>
                <div className="text-gray-600">General Inquiries</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-500 mb-2">100%</div>
                <div className="text-gray-600">Response Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
