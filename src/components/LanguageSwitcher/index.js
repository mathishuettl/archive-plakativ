import React from 'react'
import IconEn from 'src/assets/images/en.inline.svg'
import IconDe from 'src/assets/images/de.inline.svg'
import {cButton} from './styles.module.scss'
import {Link} from 'src/components/Base'

const LanguageSwitcher = ({currentLanguage, translation}) => {

  let fallback = "";
  if (currentLanguage === "de") {
    fallback = "/en/home-en"
  } else {
    fallback = "/de/home"
  }

  return (
    <Link
      to={translation || fallback}
      className={cButton}
    >
      { currentLanguage === "de" ? <IconDe /> : <IconEn /> }
    </Link>
  )
}

export default LanguageSwitcher
