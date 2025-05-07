
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for your message. We'll get back to you soon!",
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <div className="w-20 h-1 bg-hrd-blue mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Get in touch with us for inquiries, quotes, or to discuss your construction needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="border-gray-300 focus-visible:ring-hrd-red"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="border-gray-300 focus-visible:ring-hrd-red"
                    required
                  />
                </div>
                <div>
                  <Input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="border-gray-300 focus-visible:ring-hrd-red"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    className="border-gray-300 focus-visible:ring-hrd-red h-32 resize-none"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="bg-hrd-red hover:bg-red-700 text-white w-full"
                  size="lg"
                >
                  Send Message
                </Button>
              </div>
            </form>
          </div>
          
          <div>
            <div className="bg-white p-8 rounded-lg shadow-md mb-6">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-gray-100 p-3 rounded-full">
                    <Phone className="h-5 w-5 text-hrd-red" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-lg">Phone</h4>
                    <p className="text-gray-700">+977 9856021924</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-gray-100 p-3 rounded-full">
                    <Mail className="h-5 w-5 text-hrd-blue" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-lg">Email</h4>
                    <p className="text-gray-700">info@hrdc.com.np</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-gray-100 p-3 rounded-full">
                    <MapPin className="h-5 w-5 text-hrd-black" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-lg">Address</h4>
                    <p className="text-gray-700">Ratnanagar-9, Chitwan, Nepal</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6">Business Hours</h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span className="font-medium">Monday - Friday</span>
                  <span>9:00 AM - 5:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Saturday</span>
                  <span>10:00 AM - 2:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Sunday</span>
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

export default ContactSection;
