
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ExperienceProps {
  title: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
  skills: string[];
}

const ExperienceItem: React.FC<ExperienceProps> = ({ 
  title, 
  company, 
  location, 
  period, 
  responsibilities,
  skills 
}) => {
  return (
    <div className="mb-12 last:mb-0">
      <div className="timeline-dot"></div>
      <Card className="border-none shadow-md hover:shadow-lg transition-all">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-portfolio-navy">{title}</h3>
              <p className="text-portfolio-gray">{company} | {location}</p>
            </div>
            <span className="time-period mt-2 md:mt-0">{period}</span>
          </div>
          
          <ul className="list-disc pl-5 space-y-2 mb-4">
            {responsibilities.map((responsibility, index) => (
              <li key={index} className="text-portfolio-gray">
                {responsibility}
              </li>
            ))}
          </ul>
          
          <div className="flex flex-wrap gap-2 mt-4">
            {skills.map((skill, index) => (
              <Badge key={index} variant="secondary" className="bg-blue-50 text-portfolio-blue border-none">
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const ExperienceSection: React.FC = () => {
  const experiences = [
    {
      title: "Facilities Management Worker",
      company: "Wright State University",
      location: "Dayton, United States",
      period: "Mar '24 — Present",
      responsibilities: [
        "Working part-time in campus facilities management, assisting with maintenance coordination and developing strong time management and teamwork skills."
      ],
      skills: ["Facilities Management", "Time Management", "Teamwork", "Maintenance Coordination"]
    },
    {
      title: "Assistant Professor",
      company: "Charotar University of Science & Technology",
      location: "Gujarat, India",
      period: "Jun '22 — Dec '23",
      responsibilities: [
        "Delivered industry-relevant courses in Python, Java, Cloud Computing, and RDBMS.",
        "Led AI/ML student research, contributing to peer-reviewed publications.",
        "Designed real-world cloud projects using Docker, CI/CD, and AWS.",
        "Conducted workshops and hands-on coding sessions to boost student engagement."
      ],
      skills: ["Cloud Computing", "DevOps", "AI Research", "Machine Learning", "AWS", "Teaching", "Mentoring"]
    },
    {
      title: "Assistant Professor",
      company: "St. Stephen Institute of Business Management & Technology",
      location: "Gujarat, India",
      period: "Aug '21 — Mar '22",
      responsibilities: [
        "Taught Data Science, C Programming, and Android Development.",
        "Mentored students in coding competitions and technical interviews.",
        "Integrated IoT and Cloud in interdisciplinary projects to enhance practical learning."
      ],
      skills: ["Data Science", "C Programming", "Competitive Programming", "IoT", "Cloud Computing", "Career Coaching"]
    },
  ];

  return (
    <section id="experience" className="py-16 md:py-24 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title">Professional Experience</h2>
        <p className="section-subtitle">
          My journey through academic and industry roles, building expertise in teaching, research, and practical application development
        </p>
        
        <div className="mt-16 timeline-container">
          {experiences.map((experience, index) => (
            <ExperienceItem
              key={index}
              title={experience.title}
              company={experience.company}
              location={experience.location}
              period={experience.period}
              responsibilities={experience.responsibilities}
              skills={experience.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
