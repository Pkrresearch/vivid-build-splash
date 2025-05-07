
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
              Established as a leading construction company in Nepal, H.R.D. Construction Pvt. Ltd. has been delivering exceptional construction services since its inception. We pride ourselves on our commitment to quality, innovation, and client satisfaction.
            </p>
            
            <p className="text-gray-700 mb-6">
              Our team of experienced professionals brings expertise across various construction disciplines, ensuring that each project is completed to the highest standards of excellence.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-bold text-lg text-hrd-red mb-2">License No:</h4>
                <p>070/71-13</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-bold text-lg text-hrd-red mb-2">Regd no:</h4>
                <p>123517/70/71</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-bold text-lg text-hrd-red mb-2">PAN No:</h4>
                <p>601875207</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-bold text-lg text-hrd-red mb-2">Established:</h4>
                <p>2014</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
