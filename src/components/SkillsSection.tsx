
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface SkillCategoryProps {
  title: string;
  skills: string[];
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills }) => {
  return (
    <Card className="border-none shadow-md hover:shadow-lg transition-all">
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-portfolio-navy mb-4">{title}</h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <Badge 
              key={index} 
              className="bg-blue-50 text-portfolio-blue hover:bg-blue-100 border-none py-1.5 px-3"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const SkillsSection: React.FC = () => {
  const skillCategories = [
    {
      title: "Languages & Scripting",
      skills: ["C#", "JavaScript", "Java", "C", "C++", "C#", ".net", "VB.net", "Python", "Bash", "VB"]
    },
    {
      title: "Frameworks & Libraries",
      skills: [".NET", "ASP.NET", "React.js", "jQuery", "Node.js", "Flask", "FastAPI", "Streamlit"]
    },
    {
      title: "Web & API Development",
      skills: ["REST APIs", "Web APIs", "Front End Web", "Back End", "HTML5", "CSS3", "Responsive Design"]
    },
    {
      title: "Databases & Tools",
      skills: ["SQL Server", "MySQL", "MongoDB", "NoSQL", "Data Driven Applications"]
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS", "EC2", "S3", "Lambda", "Docker", "GitHub Actions", "CI/CD", "Jenkins"]
    },
    {
      title: "Project Tools & Methodologies",
      skills: ["Agile", "Scrum", "Wireframing", "Prototyping", "Business Logic"]
    },
    {
      title: "AI & ML Tools",
      skills: ["ChatGPT", "Make.com", "bolt.new", "Lovable.ai", "TensorFlow", "PyTorch", "NLTK", "spaCy", "Transformers"]
    }
  ];

  return (
    <section id="skills" className="py-16 md:py-24 bg-white">
      <div className="section-container">
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-subtitle">
          My technical toolkit includes a diverse range of languages, frameworks, and technologies
        </p>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={index}
              title={category.title}
              skills={category.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
