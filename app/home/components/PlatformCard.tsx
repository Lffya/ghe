import { useState } from "react";
import { ExternalLink, ArrowRight, LucideIcon } from "lucide-react";
import type { StaticImageData } from "next/image";

interface PlatformCardProps {
  title: string;
  image: StaticImageData | string;
  description: string;
  link: string;
  gradient: string;
  accentColor: string;
  icon: LucideIcon;
}

export const PlatformCard = ({ title, image, description, link, gradient, accentColor, icon }: PlatformCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative overflow-hidden rounded-3xl bg-card shadow-card hover:shadow-elevated transition-all duration-500 transform hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image */}
      <div className="relative h-80 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className={`absolute inset-0 ${gradient} opacity-80 mix-blend-overlay`} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        {/* Floating Icon */}
        <div className={`absolute top-6 right-6 w-12 h-12 ${accentColor} rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-500 ${isHovered ? 'scale-110 rotate-12' : ''}`}>
          <ExternalLink className="w-5 h-5 text-white" />
        </div>
      </div>

      {/* Content */}
      <div className="relative p-8">
        <div className="absolute -top-6 left-8 right-8">
          <div className="bg-card/90 backdrop-blur-sm rounded-2xl p-6 border border-border/50 shadow-lg">
            <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary-glow transition-colors duration-300">
              {title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {description}
            </p>
          </div>
        </div>
        
        <div className="mt-20">
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-3 px-8 py-4 ${gradient} text-white font-semibold rounded-2xl transition-all duration-300 hover:shadow-glow group-hover:translate-x-1 hover:scale-105`}
          >
            <span>Explore Platform</span>
            <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
          </a>
        </div>
      </div>

      {/* Animated Border */}
      <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${gradient} p-[2px]`}>
        <div className="w-full h-full bg-card rounded-3xl" />
      </div>
    </div>
  );
};