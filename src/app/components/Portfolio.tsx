"use client"
import { useState, useEffect } from 'react'
import { ArrowRight, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react'
import { motion } from 'framer-motion'
import { FaFigma, FaCode, FaReact, FaNodeJs, FaGitAlt, FaPython, FaDatabase, FaAws } from 'react-icons/fa';

export default function Portfolio() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 text-gray-800">
      {/* Header */}
      <header className={`fixed w-full transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 cursor-pointer"
              onClick={() => window.location.reload()}
            >
              Niranjan
            </motion.div>
            <nav className="hidden md:block">
              <ul className="flex space-x-6">
                {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <a href={`#${item.toLowerCase()}`} className="hover:text-purple-600 transition-colors duration-300 relative group">
                      {item}
                      <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>
            <button onClick={toggleMenu} className="md:hidden">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <motion.nav 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg"
          >
            <ul className="py-2">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <li key={item} className="px-4 py-2">
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="block hover:text-purple-600 transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6">
        <div className="container mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600"
          >
            Web Designer, Frontend & Web Developer
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl mb-8"
          >
            I design and code beautifully simple things, and I love what I do.
          </motion.p>
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            src="/avatar.png"
            alt="Niranjan"
            className="w-32 h-32 sm:w-48 sm:h-48 mx-auto rounded-full mb-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
          />
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            href="#projects"
            className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 sm:px-8 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
          >
            Check out my work
          </motion.a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600"
          >
            Hi, I'm Niranjan. Nice to meet you.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl text-center max-w-3xl mx-auto"
          >
            In the past year, I've embarked on an exciting journey as a freelance designer, taking on diverse projects that have shaped my professional growth. I've had the opportunity to work remotely with agencies, provide consultations for startups, and collaborate with skilled professionals to develop digital solutions for various business and consumer needs. My approach is characterized by a quiet confidence, an innate curiosity, and a constant drive to enhance my skills by tackling each design challenge as a unique learning opportunity.
          </motion.p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600"
          >
            My Skills
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center p-6 sm:p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 max-w-3xl mx-auto"
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-purple-600">Full-Stack Developer & Designer</h3>
            <p className="mb-4 sm:mb-6 text-base sm:text-lg">I specialize in creating seamless, user-centric experiences from concept to deployment. My passion lies in crafting elegant solutions that bridge design and functionality.</p>
            <div className="mb-4 sm:mb-6">
              <h4 className="font-semibold mb-2 sm:mb-3 text-pink-600">Areas of Expertise:</h4>
              <p>UX/UI Design, Web Development, Mobile Apps, Branding, Frontend & Backend Technologies</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 sm:mb-3 text-pink-600">Tech Stack & Tools:</h4>
              <ul className="flex flex-wrap justify-center gap-2 sm:gap-4">
                <li className="flex items-center text-sm sm:text-base"><FaFigma className="mr-1 sm:mr-2" /> Figma</li>
                <li className="flex items-center text-sm sm:text-base"><FaCode className="mr-1 sm:mr-2" /> VS Code</li>
                <li className="flex items-center text-sm sm:text-base"><FaReact className="mr-1 sm:mr-2" /> React</li>
                <li className="flex items-center text-sm sm:text-base"><FaNodeJs className="mr-1 sm:mr-2" /> Node.js</li>
                <li className="flex items-center text-sm sm:text-base"><FaGitAlt className="mr-1 sm:mr-2" /> Git</li>
                <li className="flex items-center text-sm sm:text-base"><FaPython className="mr-1 sm:mr-2" /> Python</li>
                <li className="flex items-center text-sm sm:text-base"><FaDatabase className="mr-1 sm:mr-2" /> SQL</li>
                <li className="flex items-center text-sm sm:text-base"><FaAws className="mr-1 sm:mr-2" /> AWS</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600"
          >
            My Recent Work
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Techy Portfolio",
                description: "Created a portfolio website using Next.js, Tailwind CSS, and Framer Motion.",
                image: "/techy-portfolio.png",
                link: "https://portfolioo-peach.vercel.app/"
              },
              {
                title: "Grampreneur",
                description: "Created a website for a startup using Next.js, SCSS, and Framer Motion.",
                image: "/grampreneur.png",
                link: "https://grampreneur.vercel.app/"
              },
              {
                title: "SuperGigs",
                description: "A FullStack platform for connecting freelancers with clients especially in India",
                image: "/supergigs_logo.png",
                link: "https://github.com/Niranjan753/Giggers2"
              }
            ].map((project, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-purple-600">{project.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4">{project.description}</p>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 transition-colors inline-flex items-center group text-sm sm:text-base">
                    View Project <ArrowUpRight className="ml-1 sm:ml-2 h-4 w-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600"
          >
            Interested in collaborating with me?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl mb-8 sm:mb-12"
          >
            I'm always open to discussing product design work or partnership opportunities.
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            href="mailto:niranjanr753@gmail.com"
            className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 sm:px-8 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
          >
            Start a conversation
          </motion.a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-purple-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="mb-8 sm:mb-0 text-center sm:text-left">
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">Niranjan</h2>
              <p className="text-sm sm:text-base mb-4">Web Designer, Frontend Developer & Web Developer</p>
              <p className="text-xs sm:text-sm text-gray-400">Crafting digital experiences with passion and precision</p>
            </div>
            <div className="flex flex-col items-center sm:items-end">
              <div className="flex space-x-6 mb-6">
                {[
                  { Icon: Github, href: "https://github.com/Niranjan753", label: "GitHub" },
                  { Icon: Linkedin, href: "https://www.linkedin.com/in/niranjan-06861a216/", label: "LinkedIn" },
                  { Icon: Mail, href: "mailto:niranjanr753@gmail.com", label: "Email" }
                ].map(({ Icon, href, label }, index) => (
                  <motion.a 
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-gray-400 group-hover:text-purple-400 transition-colors duration-300" />
                    <span className="mt-1 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">{label}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

        </div>
      </footer>
    </div>
  )
}