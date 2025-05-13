
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          Software engineer, educator, and cloud computing enthusiast with a passion for building scalable applications and sharing knowledge
        </p>
        
        <div className="mt-12">
          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <div className="prose max-w-none">
                <p className="mb-4 text-lg">
                  I'm currently pursuing my <span className="highlight">MS in Computer Engineering</span> at Wright State University, focused on software development, data structures, system architecture, and DevOps.
                </p>
                
                <p className="mb-4 text-lg">
                  With experience as an <span className="highlight">Assistant Professor</span> teaching subjects like Python, Java, Cloud Computing, and RDBMS, I combine theoretical knowledge with practical industry skills to create robust and efficient solutions.
                </p>

                <p className="mb-4 text-lg">
                  I specialize in <span className="highlight">cloud technologies</span>, <span className="highlight">AI/ML</span>, and <span className="highlight">full-stack development</span>, with a focus on creating scalable and maintainable applications. My background includes developing real-world projects with technologies like Docker, AWS, Python, and React.
                </p>

                <p className="text-lg">
                  I'm passionate about sharing my knowledge and continuously learning new technologies to solve complex problems with elegant solutions.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
