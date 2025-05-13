
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-3/5 md:pr-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-portfolio-navy mb-4">
              Jankiben Parmar
            </h1>
            <h2 className="text-xl md:text-2xl text-portfolio-blue font-medium mb-6">
              MS in Computer Engineering
            </h2>
            <p className="text-portfolio-gray text-lg mb-8 max-w-lg">
              Full-stack developer and educator with expertise in cloud computing, AI/ML, and system architecture.
              Passionate about building innovative solutions and sharing knowledge.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-portfolio-blue hover:bg-blue-700">
                <a href="#contact">
                  Contact Me <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#projects">View Projects</a>
              </Button>
            </div>
            
            <div className="mt-8 flex items-center space-x-4">
              <a href="https://www.linkedin.com/in/jankiben-parmar" target="_blank" rel="noopener noreferrer" className="text-portfolio-gray hover:text-portfolio-blue transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                </svg>
              </a>
              <a href="https://github.com/jankiben-parmar" target="_blank" rel="noopener noreferrer" className="text-portfolio-gray hover:text-portfolio-blue transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                </svg>
              </a>
              <a href="mailto:parmar.29@wright.edu" className="text-portfolio-gray hover:text-portfolio-blue transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="md:w-2/5 mt-10 md:mt-0">
            <div className="w-64 h-64 md:w-80 md:h-80 mx-auto bg-portfolio-blue rounded-full overflow-hidden border-4 border-white shadow-xl">
              {/* Placeholder for profile image - replace with actual image if available */}
              <div className="w-full h-full bg-gradient-to-br from-portfolio-blue to-portfolio-lightBlue flex items-center justify-center text-white text-6xl font-bold">
                JP
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default HeroSection;
