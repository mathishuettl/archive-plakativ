import React, { createContext, useState } from 'react'

const defaults = {
  language: "de"
}

const LanguageContext = createContext(defaults)

export const LanguageProvider = ({children}) => {
  const [currentLanguage, setCurrentLanguage] = useState(defaults.language)

  return (
    <LanguageContext.Provider value={{currentLanguage, setCurrentLanguage}}>
      {children}
    </LanguageContext.Provider>
  )
}

export default LanguageContext
