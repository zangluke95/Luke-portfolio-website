
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const AboutSection: React.FC = () => {
  const qualities = [
    { title: "Problem Solver", description: "Analytical approach to complex problems" },
    { title: "Passionate Educator", description: "Committed to knowledge sharing" },
    { title: "Cloud Expert", description: "Experience with AWS ecosystem" },
    { title: "Tech Enthusiast", description: "Always learning new technologies" }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full border-8 border-blue-300"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 rounded-full border-8 border-blue-300"></div>
        <div className="absolute top-1/2 left-1/3 w-20 h-20 rounded-full bg-blue-200"></div>
      </div>
      
      <div className="section-container relative z-10">
        <h2 className="section-title relative inline-block">
          About Me
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-portfolio-blue"></span>
        </h2>
        <p className="section-subtitle">
          Software engineer, educator, and cloud computing enthusiast with a passion for building scalable applications and sharing knowledge
        </p>
        
        <div className="mt-12">
          <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-r from-white to-blue-50">
            <CardContent className="p-8">
              <div className="prose max-w-none">
                <p className="mb-4 text-lg leading-relaxed">
                  I'm currently pursuing my <span className="highlight font-semibold">MS in Computer Engineering</span> at Wright State University, focused on software development, data structures, system architecture, and DevOps.
                </p>
                
                <p className="mb-4 text-lg leading-relaxed">
                  With experience as an <span className="highlight font-semibold">Assistant Professor</span> teaching subjects like Python, Java, Cloud Computing, and RDBMS, I combine theoretical knowledge with practical industry skills to create robust and efficient solutions.
                </p>

                <p className="mb-6 text-lg leading-relaxed">
                  I specialize in <span className="highlight font-semibold">cloud technologies</span>, <span className="highlight font-semibold">AI/ML</span>, and <span className="highlight font-semibold">full-stack development</span>, with a focus on creating scalable and maintainable applications. My background includes developing real-world projects with technologies like Docker, AWS, Python, and React.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
                  {qualities.map((quality, index) => (
                    <Card key={index} className="border-none bg-blue-50 hover:bg-blue-100 transition-colors duration-300">
                      <CardContent className="p-4 text-center">
                        <h3 className="font-bold text-lg text-portfolio-blue mb-1">{quality.title}</h3>
                        <p className="text-sm text-portfolio-gray">{quality.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="mt-8 p-5 border-l-4 border-portfolio-blue bg-blue-50 rounded">
                  <p className="text-lg italic text-portfolio-navy">
                    "I'm passionate about sharing my knowledge and continuously learning new technologies to solve complex problems with elegant solutions."
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
