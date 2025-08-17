import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { Button } from './ui/button'

const LanguageToggle = () => {
  const { language, changeLanguage } = useLanguage()

  return (
    <div className="flex items-center space-x-2">
      <Button
        variant={language === 'en' ? 'default' : 'outline'}
        size="sm"
        onClick={() => changeLanguage('en')}
        className={`text-xs px-3 py-1 ${
          language === 'en' 
            ? 'bg-cyan-500 hover:bg-cyan-600 text-white' 
            : 'bg-transparent border-cyan-500 text-cyan-400 hover:bg-cyan-500/10'
        }`}
      >
        EN
      </Button>
      <Button
        variant={language === 'ja' ? 'default' : 'outline'}
        size="sm"
        onClick={() => changeLanguage('ja')}
        className={`text-xs px-3 py-1 ${
          language === 'ja' 
            ? 'bg-cyan-500 hover:bg-cyan-600 text-white' 
            : 'bg-transparent border-cyan-500 text-cyan-400 hover:bg-cyan-500/10'
        }`}
      >
        日本語
      </Button>
    </div>
  )
}

export default LanguageToggle
