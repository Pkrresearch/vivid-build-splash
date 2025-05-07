
import { Building, Construction, Home } from "lucide-react";

const services = [
  {
    icon: <Building className="h-10 w-10 text-hrd-red" />,
    title: "Commercial Construction",
    description: "Expert commercial building construction with attention to detail and adherence to timelines and budgets."
  },
  {
    icon: <Home className="h-10 w-10 text-hrd-blue" />,
    title: "Residential Projects",
    description: "Quality residential construction services creating beautiful, functional, and durable homes."
  },
  {
    icon: <Construction className="h-10 w-10 text-hrd-black" />,
    title: "Infrastructure Development",
    description: "Comprehensive infrastructure solutions including roads and public facilities."
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <div className="w-20 h-1 bg-hrd-red mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            We provide comprehensive construction services tailored to meet the unique needs of each client and project.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-md transition-transform hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
