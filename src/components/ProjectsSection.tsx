
import React, { useState } from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from 'lucide-react';

interface ProjectProps {
  title: string;
  description: string[];
  technologies: string[];
  period: string;
  link?: string;
  featured?: boolean;
}

const ProjectCard: React.FC<ProjectProps> = ({ 
  title, 
  description, 
  technologies, 
  period,
  link,
  featured = false
}) => {
  return (
    <Card className={`border-none ${featured ? 'shadow-xl ring-2 ring-blue-200' : 'shadow-md'} hover:shadow-lg transition-all h-full flex flex-col transform hover:-translate-y-1 duration-300 overflow-hidden`}>
      {featured && (
        <div className="bg-portfolio-blue text-white text-xs font-bold py-1 text-center">
          FEATURED PROJECT
        </div>
      )}
      <CardContent className="p-6 flex-grow">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-800">{title}</h3>
          <span className="time-period mt-2 md:mt-0 text-sm px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-medium">{period}</span>
        </div>
        
        <ul className="list-disc pl-5 space-y-2 mb-4">
          {description.map((point, index) => (
            <li key={index} className="text-portfolio-gray">
              {point}
            </li>
          ))}
        </ul>
        
        <div className="flex flex-wrap gap-2 mt-4">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="outline" className="bg-blue-50 text-blue-700 border-none transition-colors hover:bg-blue-100">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      
      {link && (
        <CardFooter className="px-6 pb-6 pt-0">
          <Button variant="outline" className="w-full bg-white hover:bg-blue-50 border-blue-500 text-blue-700" asChild>
            <a href={link} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />View Project
            </a>
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

const ProjectsSection: React.FC = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);
  
  const projects = [
    {
      title: "EzShopping: AI-Powered Shopping Assistant",
      period: "Jan '25 — May '25",
      description: [
        "Built a shopping assistant app with Streamlit and Python for personalized recommendations",
        "Designed REST APIs and ETL pipelines, reducing data processing time by 48%",
        "Integrated chatbot using NLTK, spaCy, and Transformers for NLP-based interactions"
      ],
      technologies: ["Python", "Poetry", "Docker", "ngrok", "Streamlit", "REST API", "Transformer Models", "Pillow python library", "Ultralytics Yolo v11", "Material for Mkdocs", "MongoDB DB", "CICD pipelines"],
      link: "#",
      featured: true
    },
    {
      title: "Xperi: Augmented Reality EdTech App",
      period: "Jan '24 — Apr '24",
      description: [
        "Developed interactive AR education platform with real-time 3D scene recognition",
        "Deployed object detection models on TPU, improving runtime by 30%"
      ],
      technologies: ["AR", "TensorFlow Lite", "Scene Capturing", "AI Object Detection", "Real-time 3D", "TPU"],
      link: "#"
    },
    {
      title: "Industrial: E-Commerce Platform",
      period: "Jan '21 — Apr '21",
      description: [
        "Created REST APIs and API Gateway authentication for an e-commerce platform",
        "Enabled secure user flows and modular backend architecture"
      ],
      technologies: ["E-commerce", "Vue.js", "REST APIs", "Authentication", "API Gateway"],
      link: "#",
      featured: true
    },
    {
      title: "IoT-Based Automatic Plant Watering System",
      period: "Mar '19 — Apr '19",
      description: [
        "Built moisture-sensing IoT system with real-time dashboard using MongoDB",
        "Automated irrigation logic cut water usage by 30%"
      ],
      technologies: ["IoT", "Arduino", "Python", "MongoDB", "Data Analytics", "Automation"],
      link: "#"
    },
    {
      title: "Cloud-Powered Online Examination System",
      period: "Mar '18 — Apr '18",
      description: [
        "Created a serverless exam platform using S3/Lambda with role-based access control",
        "Reduced system latency by 20% using event-driven cloud architecture"
      ],
      technologies: ["Cloud", "AWS S3", "Lambda", "Automation", "RBAC", "Event-driven architecture"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-12 md:py-16 bg-gradient-to-br from-blue-50 to-white relative">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233B82F6' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"}}></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="flex flex-col items-center mb-8">
          <h2 className="section-title mb-2">Featured Projects</h2>
          <div className="w-24 h-1 bg-portfolio-blue"></div>
          <p className="section-subtitle mt-4">
            Showcasing some of my most significant technical projects and their impacts
          </p>
        </div>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.slice(0, visibleProjects).map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              period={project.period}
              link={project.link}
              featured={project.featured}
            />
          ))}
        </div>
        
        {visibleProjects < projects.length && (
          <div className="mt-8 text-center">
            <Button 
              onClick={() => setVisibleProjects(projects.length)}
              className="bg-portfolio-blue hover:bg-blue-700 shadow-md hover:shadow-lg transition-all"
            >
              View All Projects
            </Button>
          </div>
        )}
        
        {visibleProjects === projects.length && visibleProjects > 3 && (
          <div className="mt-8 text-center">
            <Button 
              onClick={() => setVisibleProjects(3)}
              variant="outline"
              className="border-portfolio-blue text-portfolio-blue hover:bg-blue-50"
            >
              Show Less
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
