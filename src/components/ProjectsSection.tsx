
import { useState } from "react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    title: "Office Complex",
    category: "Commercial",
    description: "Modern office building with sustainable design features."
  },
  {
    image: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    title: "Luxury Residence",
    category: "Residential",
    description: "High-end residential project with premium finishes."
  },
  {
    image: "https://images.unsplash.com/photo-1524230572899-a752b3835840?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    title: "Community Center",
    category: "Infrastructure",
    description: "Multi-purpose community facility serving local residents."
  }
];

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const categories = ["All", "Commercial", "Residential", "Infrastructure"];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Projects</h2>
          <div className="w-20 h-1 bg-hrd-blue mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Explore our portfolio of completed projects showcasing our expertise and quality workmanship.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeFilter === category ? "default" : "outline"}
              className={activeFilter === category 
                ? "bg-hrd-blue hover:bg-blue-700" 
                : "text-hrd-blue border-hrd-blue hover:bg-hrd-blue hover:text-white"
              }
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all group"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-800 mb-3">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-700">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
