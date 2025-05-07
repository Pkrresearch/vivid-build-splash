import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-hrd-black text-white">
      <div className="container mx-auto px-4">
        <div className="pt-16 pb-8 border-b border-gray-800">
          <div className="grid md:grid-cols-4 gap-10">
            <div>
              <div className="mb-6">
                <div className="inline-block bg-white rounded-full p-3">
                  <img 
                    src="/lovable-uploads/9c05944a-2372-4d84-a1a4-ad9c5cc86521.png" 
                    alt="H.R.D. Construction" 
                    className="h-14"
                  />
                </div>
              </div>
              <p className="text-gray-400 mb-6">
                Delivering quality construction services across Nepal with a commitment to excellence and customer satisfaction.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="bg-gray-800 hover:bg-hrd-red p-2 rounded-full transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="bg-gray-800 hover:bg-hrd-red p-2 rounded-full transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="bg-gray-800 hover:bg-hrd-red p-2 rounded-full transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="bg-gray-800 hover:bg-hrd-red p-2 rounded-full transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a>
                </li>
                <li>
                  <a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a>
                </li>
                <li>
                  <a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6">Business Hours</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Clock className="h-5 w-5 text-hrd-red mr-3" />
                  <span className="text-gray-400">Monday - Friday: 10:00 AM - 5:00 PM</span>
                </li>
                <li className="flex items-start">
                  <Clock className="h-5 w-5 text-hrd-red mr-3 opacity-0" />
                  <span className="text-gray-400">Saturday: Closed</span>
                </li>
                <li className="flex items-start">
                  <Clock className="h-5 w-5 text-hrd-red mr-3 opacity-0" />
                  <span className="text-gray-400">Sunday: 10:00 AM - 5:00 PM</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-hrd-red mr-3" />
                  <span className="text-gray-400">Ratnanagar-9, Chitwan, Nepal</span>
                </li>
                <li className="flex items-start">
                  <Phone className="h-5 w-5 text-hrd-red mr-3" />
                  <span className="text-gray-400">+977 9856021924</span>
                </li>
                <li className="flex items-start">
                  <Mail className="h-5 w-5 text-hrd-red mr-3" />
                  <span className="text-gray-400">info@hrdc.com.np</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="py-6 text-center text-gray-400">
          <p>
            © {currentYear} H.R.D. Construction Pvt. Ltd. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
