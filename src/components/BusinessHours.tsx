
import { Clock } from "lucide-react";

const BusinessHours = () => {
  return (
    <section id="business-hours" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Business Hours</h2>
          <div className="w-20 h-1 bg-hrd-red mx-auto mb-6"></div>
        </div>
        
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b pb-4">
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-hrd-red mr-3" />
                <span className="font-medium">Sunday - Friday</span>
              </div>
              <span>10:00 AM - 5:00 PM</span>
            </div>
            
            <div className="flex items-center justify-between pb-2">
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-hrd-red mr-3" />
                <span className="font-medium">Saturday</span>
              </div>
              <span className="font-medium text-hrd-red">Closed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessHours;
