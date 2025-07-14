import React, { useState } from 'react';
import { Github, Linkedin, Mail, Code, Award, BookOpen, Database, Palette } from 'lucide-react';

function App() {
  const [theme, setTheme] = useState('green');

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
    document.documentElement.className = `theme-${newTheme}`;
  };

  return (
    <div className={`min-h-screen bg-[#0a0a0a] text-white theme-${theme}`}>
      {/* Theme Switcher */}
      <div className="theme-switcher flex gap-2">
        <button
          onClick={() => handleThemeChange('green')}
          className="theme-option bg-[#00ff8c]"
          title="Green Theme"
        />
        <button
          onClick={() => handleThemeChange('purple')}
          className="theme-option bg-[#a855f7]"
          title="Purple Theme"
        />
        <button
          onClick={() => handleThemeChange('orange')}
          className="theme-option bg-[#f97316]"
          title="Orange Theme"
        />
      </div>

      {/* Hero Section */}
      <header className="relative container mx-auto px-4 py-20 overflow-hidden">
        <div className="absolute inset-0 hero-pattern"></div>
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
                Siddharth Singh
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 mb-8">
                Computer Science Engineering Student at LPU
              </p>
              <div className="flex gap-4">
                <a href="#contact" className="glow-button bg-[var(--primary-glow)] text-black px-6 py-3 rounded-lg font-medium">
                  Contact Me
                </a>
                <a href="#projects" className="glow-button bg-transparent border-2 border-[var(--primary-glow)] px-6 py-3 rounded-lg font-medium">
                  View Projects
                </a>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                alt="Programming"
                className="rounded-lg shadow-2xl animate-float"
                style={{ maxWidth: '400px' }}
              />
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="bg-[#111111] py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-400 leading-relaxed">
                I'm a Computer Science Engineering student at Lovely Professional University with a CGPA of 7.24. 
                I'm passionate about programming and data structures, with experience in C++, SQL, and R. 
                I've secured a Global Rank of 252 in Code Chef Starters among 21k+ participants.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">Skills</h3>
              <div className="flex flex-wrap gap-3">
                {['C++', 'SQL', 'R', 'HTML', 'CSS', 'MySQL', 'Tableau', 'DSA'].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-[#1a1a1a] rounded-full text-sm hover:bg-[var(--primary-glow)] hover:text-black transition-all duration-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 gradient-text">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#111111] rounded-lg overflow-hidden card-hover">
            <img
              src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              alt="Bookstore Management"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Bookstore Management System</h3>
              <p className="text-gray-400 mb-4">
                A comprehensive system using C++ with DSA for efficient data handling. Features include adding, updating, 
                deleting, and searching books with a user-friendly HTML/CSS interface.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {['C++', 'DSA', 'HTML', 'CSS'].map((tech) => (
                  <span key={tech} className="text-sm bg-[#1a1a1a] px-3 py-1 rounded-full hover:bg-[var(--primary-glow)] hover:text-black transition-all duration-300">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <Code size={16} className="text-[var(--primary-glow)]" />
                <span className="text-[var(--primary-glow)]">2 months duration</span>
              </div>
            </div>
          </div>

          <div className="bg-[#111111] rounded-lg overflow-hidden card-hover">
            <img
              src="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              alt="Game Demand Dashboard"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Game Demand Dashboard</h3>
              <p className="text-gray-400 mb-4">
                Developed a responsive dashboard visualizing game demand trends from 2010 to 2024 using 
                MS Excel, Tableau, and R for data mining and analysis.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {['MS Excel', 'Tableau', 'R', 'Data Mining'].map((tech) => (
                  <span key={tech} className="text-sm bg-[#1a1a1a] px-3 py-1 rounded-full hover:bg-[var(--primary-glow)] hover:text-black transition-all duration-300">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <Code size={16} className="text-[var(--primary-glow)]" />
                <span className="text-[var(--primary-glow)]">3 months duration</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="bg-[#111111] py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 gradient-text">Achievements</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#1a1a1a] p-6 rounded-lg card-hover">
              <div className="flex items-center gap-3 mb-4">
                <Award className="text-[var(--primary-glow)] w-8 h-8" />
                <h3 className="text-xl font-semibold">CodeChef Global Rank 252</h3>
              </div>
              <p className="text-gray-400">
                Secured impressive ranking among 21k+ participants in Code Chef Starters (July 2024)
              </p>
            </div>
            <div className="bg-[#1a1a1a] p-6 rounded-lg card-hover">
              <div className="flex items-center gap-3 mb-4">
                <Award className="text-[var(--primary-glow)] w-8 h-8" />
                <h3 className="text-xl font-semibold">Debate Competition Award</h3>
              </div>
              <p className="text-gray-400">
                Secured 2nd Rank in anti-drug campaign debate, recognized by CM Yogi Adityanath
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 gradient-text">Education</h2>
        <div className="space-y-8">
          <div className="bg-[#111111] p-6 rounded-lg card-hover">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="text-[var(--primary-glow)] w-6 h-6" />
              <div>
                <h3 className="text-xl font-semibold">Lovely Professional University</h3>
                <p className="text-gray-400">B.Tech in Computer Science and Engineering</p>
              </div>
            </div>
            <p className="text-[var(--primary-glow)]">CGPA: 7.24 | 2022-2026</p>
          </div>

          <div className="bg-[#111111] p-6 rounded-lg card-hover">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="text-[var(--primary-glow)] w-6 h-6" />
              <div>
                <h3 className="text-xl font-semibold">Don Bosco School</h3>
                <p className="text-gray-400">Intermediate</p>
              </div>
            </div>
            <p className="text-[var(--primary-glow)]">Percentage: 68% | 2021</p>
          </div>

          <div className="bg-[#111111] p-6 rounded-lg card-hover">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="text-[var(--primary-glow)] w-6 h-6" />
              <div>
                <h3 className="text-xl font-semibold">Surmount International School</h3>
                <p className="text-gray-400">Matriculation</p>
              </div>
            </div>
            <p className="text-[var(--primary-glow)]">Percentage: 77%</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-[#111111] py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 gradient-text">Get In Touch</h2>
          <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
            <a href="https://github.com/SidLPU" target="_blank" rel="noopener noreferrer" className="glow-button flex items-center gap-3 px-6 py-4 bg-[#1a1a1a] rounded-lg">
              <Github size={24} />
              <span>GitHub</span>
            </a>
            <a href="https://linkedin.com/in/siddharth-singh-rajput" target="_blank" rel="noopener noreferrer" className="glow-button flex items-center gap-3 px-6 py-4 bg-[#1a1a1a] rounded-lg">
              <Linkedin size={24} />
              <span>LinkedIn</span>
            </a>
            <a href="mailto:singhsiddharthgagha@gmail.com" className="glow-button flex items-center gap-3 px-6 py-4 bg-[#1a1a1a] rounded-lg">
              <Mail size={24} />
              <span>Email</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8">
        <p className="text-center text-gray-400">
          © {new Date().getFullYear()} Siddharth Singh. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;