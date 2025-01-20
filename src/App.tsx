import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { getImageUrl } from "./utils";
import { TypeAnimation } from 'react-type-animation';
import {
  Github,
  Linkedin,
  Mail,
  Download,
  ExternalLink,
  Code2,
  Briefcase,
  User,
  Home,
  GraduationCap
} from "lucide-react";

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'education' , 'skills', 'projects', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: "home", icon: Home, label: "Home" },
    { id: "about", icon: User, label: "About" },
    { id: "education", icon: GraduationCap, label: "Education" },
    { id: "skills", icon: Code2, label: "Skills" },
    { id: "projects", icon: Briefcase, label: "Projects" }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav className="fixed right-10 top-1/2 transform -translate-y-1/2 z-50">
        <div className="flex flex-col gap-6 bg-gray-800/50 backdrop-blur-sm p-4 rounded-full">
          {navItems.map(({ id, icon: Icon, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`p-2 rounded-full transition-all duration-300 ${
                activeSection === id
                  ? "bg-blue-500 text-white"
                  : "text-gray-400 hover:text-white hover:bg-gray-700"
              }`}
              title={label}
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl font-bold mb-4">Hi, I'm Sudhanshu Kumar</h1>
            <div className="text-3xl text-gray-300 mb-8 h-[60px]">
              <TypeAnimation
                sequence={[
                  "Front - End Developer",
                  2000,
                  "Problem Solver",
                  2000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
            <p className="text-xl text-gray-400 mb-8">
              I build exceptional and accessible digital experiences for the
              web.
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex space-x-6"
            >
              <a
                href="https://github.com/sudhanshu1512"
                className="hover:text-blue-400 transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/sudhanshu-kumar-b07c2002/"
                className="hover:text-blue-400 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:Sudhanshukumar.072002@gmail.com"
                className="hover:text-blue-400 transition-colors"
              >
                <Mail size={24} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-8">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-gray-300 mb-4">
                  I'm a passionate full-stack developer with expertise in
                  building modern web applications. I specialize in
                  JavaScript/TypeScript, React, Node.js, and modern web
                  technologies.
                </p>
                <p className="text-gray-300 mb-6">
                  Currently, I'm focused on building accessible, human-centered
                  products that make a difference.
                </p>
                <motion.a
                  href="https://drive.google.com/file/d/1xun80MRrVZ5ps5dB-8i2kmwO7g2S3Lav/view?usp=drive_link"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download size={20} className="mr-2" />
                  Download Resume
                </motion.a>
              </div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src={getImageUrl("profile2.jpg")}
                  alt="Profile"
                  className="rounded-lg shadow-xl"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
            <div className="space-y-8">
              {/* College Education */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-700/30 rounded-lg p-6 hover:bg-gray-700/40 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-blue-400">
                      Marwadi Education Foundation
                    </h3>
                    <p className="text-gray-300 mt-1">
                      Bachelor of Technology ( Information Technology )
                    </p>
                  </div>
                  <span className="text-gray-400">2021 - 2025</span>
                </div>
              </motion.div>

              {/* High School */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-gray-700/30 rounded-lg p-6 hover:bg-gray-700/40 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-blue-400">
                      Lyceum International School
                    </h3>
                    <p className="text-gray-300 mt-1">
                      Higher Secondary Education
                    </p>
                  </div>
                  <span className="text-gray-400">2019 - 2021</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-12 text-center">
              Skills & Technologies
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { name: "React", icon: "⚛️" },
                { name: "TypeScript", icon: "📘" },
                { name: "Node.js", icon: "🟢" },
                { name: "TailwindCSS", icon: "🎨" },
                { name: "MongoDB", icon: "🍃" }
              ].map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors"
                >
                  <span className="text-4xl mb-2">{skill.icon}</span>
                  <span className="text-sm font-medium">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
            <div className="grid gap-12">
              {[
                {
                  title: "Edusity",
                  description:
                    "This is a project made to learn and expand my understanding optimal user experience across devices.",
                  image: getImageUrl("project1.png"),
                  tech: ["React", "Tailwind CSS "],
                  github: "https://github.com/sudhanshu1512/Edu-web",
                  live: "https://edusity-b240.netlify.app/"
                },
                {
                  title: "Task Management App",
                  description:
                    "A collaborative task management application with real-time updates",
                  image: getImageUrl("image.png"),
                  tech: ["ReactJs", "Tailwind CSS", "Firebase"],
                  github: "https://github.com/sudhanshu1512/project",
                  live: "https://mytodos-0efb.netlify.app/"
                }
              ].map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="group relative bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700/80 transition-colors"
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-2/5">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="p-6 md:w-3/5">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-2xl font-bold">{project.title}</h3>
                        <div className="flex space-x-4">
                          <a
                            href={project.github}
                            className="hover:text-blue-400 transition-colors"
                          >
                            <Github size={20} />
                          </a>
                          <a
                            href={project.live}
                            className="hover:text-blue-400 transition-colors"
                          >
                            <ExternalLink size={20} />
                          </a>
                        </div>
                      </div>
                      <p className="text-gray-300 mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-gray-700 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              I'm currently looking for new opportunities. Whether you have a
              question or just want to say hi, I'll try my best to get back to
              you!
            </p>
            <motion.a
              href="mailto:Sudhanshukumar.072002@gmail.com.com"
              className="inline-flex items-center px-8 py-4 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={20} className="mr-2" />
              Say Hello
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-gray-400">
        <p>Created By Sudhanshu | 2025 All rights reserved</p>
      </footer>
    </div>
  );
}

export default App;