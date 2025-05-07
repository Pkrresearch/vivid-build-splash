
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-hrd-red opacity-20 rounded-lg"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-hrd-blue opacity-20 rounded-lg"></div>
              <img 
                src="https://images.unsplash.com/photo-1433832597046-4f10e10ac764?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="About H.R.D. Construction" 
                className="w-full h-auto rounded-lg shadow-lg relative z-10"
              />
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About H.R.D. Construction</h2>
            <div className="w-20 h-1 bg-hrd-red mb-6"></div>
            
            <p className="text-gray-700 mb-6">
              H.R.D. Construction Pvt. Ltd. is a reputable construction company based in Ratnanagar-9, Chitwan, Nepal. Initially established with a primary focus on road safety works, the company has steadily expanded its scope and expertise over the years. With a solid foundation in infrastructure development, H.R.D. Construction has made significant contributions to a variety of projects across the region.
            </p>
            
            <p className="text-gray-700 mb-6">
              From its early days, the company has been actively involved in numerous road construction initiatives, helping to enhance transportation networks and improve connectivity. Its commitment to quality and safety has earned it a trusted name in the industry.
            </p>
            
            <p className="text-gray-700 mb-6">
              In addition to its road-related work, H.R.D. Construction Pvt. Ltd. has also played an important role in the construction of government buildings, contributing to public infrastructure and administrative facilities. Furthermore, the company has extended its services to the private sector, participating in the development of residential and commercial buildings.
            </p>
            
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-bold text-lg text-hrd-red mb-2">Established:</h4>
              <p>2014</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
