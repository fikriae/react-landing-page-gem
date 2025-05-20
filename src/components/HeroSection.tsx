
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-r from-brand-700 to-brand-900 text-white">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,white,transparent)]"></div>
      </div>
      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center py-20 md:py-32">
          <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
            <h1 className="heading-1 animate-fade-in">
              Build Your Next Idea Even Faster
            </h1>
            <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto lg:mx-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Our landing page template helps you showcase your product beautifully 
              and effectively, giving you the best chance to convert visitors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <Button className="btn btn-primary flex items-center gap-2">
                Get Started <ArrowRight size={16} className="ml-1" />
              </Button>
              <Button variant="outline" className="btn btn-secondary bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20">
                Learn More
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 mt-16 lg:mt-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-500 to-brand-300 rounded-lg blur-lg opacity-75"></div>
              <div className="relative bg-white rounded-lg shadow-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MTx8c2VhcmNofDF8fHdvcmslfGVufDB8fHx8MTYyMzg5MTYyM3w&auto=format&fit=crop&w=800&h=500" 
                  alt="Hero image" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default HeroSection;
