
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-100 to-white pt-16"
    >
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center opacity-10"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="animate-fade-right">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="text-hrd-red">Building</span> Excellence, 
              <span className="text-hrd-blue"> Delivering</span> Trust
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              H.R.D. Construction is committed to quality construction services, innovative solutions, and client satisfaction across Nepal.
            </p>
            <div className="flex space-x-4">
              <Button 
                className="bg-hrd-red hover:bg-red-700 text-white"
                size="lg"
              >
                Our Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                className="border-hrd-blue text-hrd-blue hover:bg-hrd-blue hover:text-white"
                size="lg"
              >
                Contact Us
              </Button>
            </div>
          </div>
          <div className="hidden md:block animate-fade-in">
            <img 
              src="/lovable-uploads/c4d054e5-d508-4133-b627-284655bdb8b0.png" 
              alt="H.R.D. Construction Logo" 
              className="max-w-md mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
