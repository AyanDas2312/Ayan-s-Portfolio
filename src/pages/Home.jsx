import { ThemeToggle } from '../components/ThemeToggle';
import { StarBackground } from '@/components/StarBackground';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
// import { Footer } from '@/components/Footer';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';
import React from 'react';


export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

      {/*Theme Toggle*/}
    <ThemeToggle />

      {/*Background Effects*/}
    <StarBackground />

      {/*Navbar*/}

    <Navbar />
      {/*Main Content*/}
    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />



    </main>

      {/*Footer*/}
    <Footer />


    </div>
  )
}
