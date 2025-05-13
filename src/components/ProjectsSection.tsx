
import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { LinkIcon } from 'lucide-react';

interface ProjectProps {
  title: string;
  description: string[];
  technologies: string[];
  period: string;
  link?: string;
}

const ProjectCard: React.FC<ProjectProps> = ({ 
  title, 
  description, 
  technologies, 
  period,
  link 
}) => {
  return (
    <Card className="border-none shadow-md hover:shadow-lg transition-all h-full flex flex-col">
      <CardContent className="p-6 flex-grow">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-portfolio-navy">{title}</h3>
          <span className="time-period mt-2 md:mt-0">{period}</span>
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
            <Badge key={index} variant="outline" className="bg-blue-50 text-portfolio-gray border-none">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      
      {link && (
        <CardFooter className="px-6 pb-6 pt-0">
          <Button variant="outline" className="w-full" asChild>
            <a href={link} target="_blank" rel="noopener noreferrer">
              <LinkIcon className="mr-2 h-4 w-4" />View Project
            </a>
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

const ProjectsSection: React.FC = () => {
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
      link: "#"
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
      link: "#"
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
    <section id="projects" className="py-16 md:py-24 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">
          Showcasing some of my most significant technical projects and their impacts
        </p>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              period={project.period}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
