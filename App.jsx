import React, { useState, useEffect } from 'react'
import { Button } from './src/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './src/components/ui/card.jsx'
import { Input } from './src/components/ui/input.jsx'
import { Textarea } from './src/components/ui/textarea.jsx'
import { Brain, Shield, Zap, Menu, X, ChevronRight, Mail, Phone } from 'lucide-react'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-slate-900/95 backdrop-blur-sm' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-white">
            <span className="text-cyan-400">BAI</span>Q
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-white hover:text-cyan-400 transition-colors">Home</button>
            <button onClick={() => scrollToSection('technologies')} className="text-white hover:text-cyan-400 transition-colors">Technologies</button>
            <button onClick={() => scrollToSection('solutions')} className="text-white hover:text-cyan-400 transition-colors">Solutions</button>
            <button onClick={() => scrollToSection('about')} className="text-white hover:text-cyan-400 transition-colors">About</button>
            <button onClick={() => scrollToSection('contact')} className="text-white hover:text-cyan-400 transition-colors">Contact</button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-sm">
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className="text-white hover:text-cyan-400 transition-colors text-left">Home</button>
              <button onClick={() => scrollToSection('technologies')} className="text-white hover:text-cyan-400 transition-colors text-left">Technologies</button>
              <button onClick={() => scrollToSection('solutions')} className="text-white hover:text-cyan-400 transition-colors text-left">Solutions</button>
              <button onClick={() => scrollToSection('about')} className="text-white hover:text-cyan-400 transition-colors text-left">About</button>
              <button onClick={() => scrollToSection('contact')} className="text-white hover:text-cyan-400 transition-colors text-left">Contact</button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Pioneering the Future with
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              AI, Blockchain & Quantum
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            BAIQ is at the forefront of technological innovation, combining artificial intelligence, 
            blockchain security, and quantum computing to create solutions for tomorrow's challenges.
          </p>
          <Button 
            onClick={() => scrollToSection('solutions')}
            className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-3 text-lg"
          >
            Explore Our Solutions
            <ChevronRight className="ml-2" size={20} />
          </Button>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-500/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-purple-500/20 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-teal-500/20 rounded-full animate-ping"></div>
      </section>

      {/* Technologies Section */}
      <section id="technologies" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
            Our Core Technologies
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <CardHeader className="text-center">
                <Brain className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                <CardTitle className="text-white text-xl">Artificial Intelligence</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 text-center">
                  Advanced machine learning algorithms and neural networks that adapt, learn, and evolve 
                  to provide intelligent solutions for complex problems.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <CardHeader className="text-center">
                <Shield className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                <CardTitle className="text-white text-xl">Blockchain</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 text-center">
                  Decentralized, secure, and transparent systems that ensure data integrity, 
                  trust, and immutable record-keeping across distributed networks.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:border-teal-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <CardHeader className="text-center">
                <Zap className="w-16 h-16 text-teal-400 mx-auto mb-4" />
                <CardTitle className="text-white text-xl">Quantum Computing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 text-center">
                  Revolutionary computing power that leverages quantum mechanics to solve 
                  problems exponentially faster than traditional computers.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
            Innovative Solutions for Tomorrow
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-gradient-to-br from-cyan-900/50 to-slate-800/50 border-cyan-500/30 hover:border-cyan-400 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-cyan-400">AI-Powered Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  Transform your data into actionable insights with our advanced AI analytics platform.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-900/50 to-slate-800/50 border-purple-500/30 hover:border-purple-400 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-purple-400">Blockchain Security</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  Secure your digital assets and transactions with our enterprise blockchain solutions.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-teal-900/50 to-slate-800/50 border-teal-500/30 hover:border-teal-400 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-teal-400">Quantum Research</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  Cutting-edge quantum computing research and development for next-generation applications.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-indigo-900/50 to-slate-800/50 border-indigo-500/30 hover:border-indigo-400 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-indigo-400">Technology Consulting</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  Expert guidance on integrating AI, blockchain, and quantum technologies into your business.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">About BAIQ</h2>
              <p className="text-gray-300 text-lg mb-6">
                BAIQ stands at the intersection of three revolutionary technologies: Artificial Intelligence, 
                Blockchain, and Quantum Computing. Our mission is to harness the power of these cutting-edge 
                technologies to create innovative solutions that address the world's most complex challenges.
              </p>
              <p className="text-gray-300 text-lg mb-6">
                Founded by a team of visionary technologists and researchers, BAIQ is committed to pushing 
                the boundaries of what's possible. We believe that the convergence of AI, blockchain, and 
                quantum computing will define the next era of technological advancement.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Innovation-driven approach</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-300">Cutting-edge research</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                  <span className="text-gray-300">Future-focused solutions</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">BAIQ</span>
                  </div>
                  <p className="text-white text-lg">Shaping Tomorrow's Technology</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
            Get in Touch
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="text-cyan-400" size={20} />
                  <span className="text-gray-300">contact@baiq.tech</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="text-cyan-400" size={20} />
                  <span className="text-gray-300">+1 (555) 123-4567</span>
                </div>
              </div>
              <p className="text-gray-300 mt-6">
                Ready to explore the future of technology? Get in touch with our team to discuss 
                how BAIQ can help transform your business with AI, blockchain, and quantum solutions.
              </p>
            </div>
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Send us a message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input 
                  placeholder="Your Name" 
                  className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400"
                />
                <Input 
                  type="email" 
                  placeholder="Your Email" 
                  className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400"
                />
                <Textarea 
                  placeholder="Your Message" 
                  rows={4}
                  className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400"
                />
                <Button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600">
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="text-2xl font-bold text-white mb-4">
            <span className="text-cyan-400">BAI</span>Q
          </div>
          <p className="text-gray-400 mb-4">
            Pioneering the future with AI, Blockchain & Quantum Technologies
          </p>
          <p className="text-gray-500 text-sm">
            © 2025 BAIQ. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

