import React, { useContext } from 'react'
import Layout from './src/components/Layout'
import LanguageContext, {LanguageProvider} from './src/context/LanguageContext'
import { getLanguageFromUrl } from './src/utils/language'

const WrapLayout = ({ element, props }) => {
  const languageContext = useContext(LanguageContext)
  languageContext.setCurrentLanguage(getLanguageFromUrl())
  return <Layout currentLanguage={props.pageContext.language} translation={props.pageContext.translation}>{element}</Layout>
}

const WrapPageElement = ({ element, props }) => (
  <LanguageProvider>
    <WrapLayout element={element} props={props} />
  </LanguageProvider>
)

export default WrapPageElement
