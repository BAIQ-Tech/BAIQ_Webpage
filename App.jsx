import React, { useState, useEffect } from 'react'
import { Button } from './src/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './src/components/ui/card.jsx'
import { Input } from './src/components/ui/input.jsx'
import { Textarea } from './src/components/ui/textarea.jsx'
import { Brain, Shield, Zap, Menu, X, ChevronRight, Mail, Phone } from 'lucide-react'
import { LanguageProvider } from './src/contexts/LanguageContext.jsx'
import { useTranslation } from './src/hooks/useTranslation.js'
import LanguageToggle from './src/components/LanguageToggle.jsx'
import './App.css'

function AppContent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const { t } = useTranslation()

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
          <nav className="hidden md:flex space-x-8 items-center">
            <button onClick={() => scrollToSection('home')} className="text-white hover:text-cyan-400 transition-colors">{t('nav.home')}</button>
            <button onClick={() => scrollToSection('technologies')} className="text-white hover:text-cyan-400 transition-colors">{t('nav.technologies')}</button>
            <button onClick={() => scrollToSection('solutions')} className="text-white hover:text-cyan-400 transition-colors">{t('nav.solutions')}</button>
            <button onClick={() => scrollToSection('about')} className="text-white hover:text-cyan-400 transition-colors">{t('nav.about')}</button>
            <button onClick={() => scrollToSection('contact')} className="text-white hover:text-cyan-400 transition-colors">{t('nav.contact')}</button>
            <LanguageToggle />
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
              <button onClick={() => scrollToSection('home')} className="text-white hover:text-cyan-400 transition-colors text-left">{t('nav.home')}</button>
              <button onClick={() => scrollToSection('technologies')} className="text-white hover:text-cyan-400 transition-colors text-left">{t('nav.technologies')}</button>
              <button onClick={() => scrollToSection('solutions')} className="text-white hover:text-cyan-400 transition-colors text-left">{t('nav.solutions')}</button>
              <button onClick={() => scrollToSection('about')} className="text-white hover:text-cyan-400 transition-colors text-left">{t('nav.about')}</button>
              <button onClick={() => scrollToSection('contact')} className="text-white hover:text-cyan-400 transition-colors text-left">{t('nav.contact')}</button>
              <div className="pt-2">
                <LanguageToggle />
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {t('hero.title')}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              {t('hero.subtitle')}
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            {t('hero.description')}
          </p>
          <Button 
            onClick={() => scrollToSection('solutions')}
            className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-3 text-lg"
          >
            {t('hero.cta')}
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
            {t('technologies.title')}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <CardHeader className="text-center">
                <Brain className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                <CardTitle className="text-white text-xl">{t('technologies.ai.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 text-center">
                  {t('technologies.ai.description')}
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <CardHeader className="text-center">
                <Shield className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                <CardTitle className="text-white text-xl">{t('technologies.blockchain.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 text-center">
                  {t('technologies.blockchain.description')}
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:border-teal-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <CardHeader className="text-center">
                <Zap className="w-16 h-16 text-teal-400 mx-auto mb-4" />
                <CardTitle className="text-white text-xl">{t('technologies.quantum.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 text-center">
                  {t('technologies.quantum.description')}
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
            {t('solutions.title')}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-gradient-to-br from-cyan-900/50 to-slate-800/50 border-cyan-500/30 hover:border-cyan-400 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-cyan-400">{t('solutions.aiAnalytics.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  {t('solutions.aiAnalytics.description')}
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-900/50 to-slate-800/50 border-purple-500/30 hover:border-purple-400 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-purple-400">{t('solutions.blockchainSecurity.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  {t('solutions.blockchainSecurity.description')}
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-teal-900/50 to-slate-800/50 border-teal-500/30 hover:border-teal-400 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-teal-400">{t('solutions.quantumResearch.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  {t('solutions.quantumResearch.description')}
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-indigo-900/50 to-slate-800/50 border-indigo-500/30 hover:border-indigo-400 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-indigo-400">{t('solutions.consulting.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  {t('solutions.consulting.description')}
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{t('about.title')}</h2>
              <p className="text-gray-300 text-lg mb-6">
                {t('about.description1')}
              </p>
              <p className="text-gray-300 text-lg mb-6">
                {t('about.description2')}
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">{t('about.features.innovation')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-300">{t('about.features.research')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                  <span className="text-gray-300">{t('about.features.solutions')}</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">BAIQ</span>
                  </div>
                  <p className="text-white text-lg">{t('about.tagline')}</p>
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
            {t('contact.title')}
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">{t('contact.info')}</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="text-cyan-400" size={20} />
                  <span className="text-gray-300">shin@baiq.tech</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="text-cyan-400" size={20} />
                  <span className="text-gray-300">+81 (090) 9376-3519</span>
                </div>
              </div>
              <p className="text-gray-300 mt-6">
                {t('contact.description')}
              </p>
            </div>
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">{t('contact.form.title')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input 
                  placeholder={t('contact.form.name')} 
                  className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400"
                />
                <Input 
                  type="email" 
                  placeholder={t('contact.form.email')} 
                  className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400"
                />
                <Textarea 
                  placeholder={t('contact.form.message')} 
                  rows={4}
                  className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400"
                />
                <Button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600">
                  {t('contact.form.send')}
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
            {t('footer.tagline')}
          </p>
          <p className="text-gray-500 text-sm">
            {t('footer.copyright')}
          </p>
        </div>
      </footer>
    </div>
  )
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  )
}

export default App

