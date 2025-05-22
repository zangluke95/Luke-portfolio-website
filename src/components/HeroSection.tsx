import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Twitter, Linkedin } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Hey, I'm Janki Parmar 👋
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            I'm a software engineer specializing in building exceptional digital experiences.
            Currently focused on building scalable applications and teaching the next generation of developers.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button 
              className="bg-black hover:bg-gray-800 text-white px-8 py-6 text-lg"
              asChild
            >
              <a href="#projects">
                View My Work <ArrowRight className="ml-2" />
              </a>
            </Button>
            <Button 
              variant="outline"
              className="border-2 border-black hover:bg-gray-100 px-8 py-6 text-lg"
              asChild
            >
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6">
            <a 
              href="https://github.com/76jankihere" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black transition-colors"
            >
              <Github className="h-8 w-8" />
              <span className="sr-only">GitHub</span>
            </a>
            <a 
              href="https://twitter.com/jankiben_parmar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black transition-colors"
            >
              <Twitter className="h-8 w-8" />
              <span className="sr-only">Twitter</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/janki-parmar-b1466b176" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black transition-colors"
            >
              <Linkedin className="h-8 w-8" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;