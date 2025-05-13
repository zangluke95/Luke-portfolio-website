
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin } from 'lucide-react';

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
    <div className="mb-12 last:mb-0 group">
      <div className="timeline-dot bg-portfolio-blue group-hover:scale-125 transition-all duration-300"></div>
      <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1 overflow-hidden">
        <div className="bg-gradient-to-r from-blue-400 to-portfolio-blue h-1"></div>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
            <div>
              <div className="flex items-center mb-2">
                <Briefcase className="h-5 w-5 text-portfolio-blue mr-2" />
                <h3 className="text-xl font-bold text-portfolio-navy">{title}</h3>
              </div>
              <p className="text-portfolio-gray flex items-center">
                <MapPin className="h-4 w-4 text-portfolio-gray mr-2" />
                {company} | {location}
              </p>
            </div>
            <span className="time-period mt-2 md:mt-0 flex items-center">
              <Calendar className="h-3 w-3 mr-1" />
              {period}
            </span>
          </div>
          
          <ul className="list-disc pl-5 space-y-2 mb-4 marker:text-portfolio-blue">
            {responsibilities.map((responsibility, index) => (
              <li key={index} className="text-portfolio-gray">
                {responsibility}
              </li>
            ))}
          </ul>
          
          <div className="flex flex-wrap gap-2 mt-4">
            {skills.map((skill, index) => (
              <Badge key={index} variant="secondary" className="bg-blue-50 text-portfolio-blue border-none hover:bg-blue-100 transition-colors">
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
    <section id="experience" className="py-16 md:py-24 bg-gradient-to-br from-gray-100 to-gray-50 relative">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234b5563' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"}}></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="flex items-center justify-center mb-8">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
            <Briefcase className="h-8 w-8 text-portfolio-blue" />
          </div>
          <h2 className="section-title mb-0">Professional Experience</h2>
        </div>
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
