import React from 'react'
import { Container, Link } from 'src/components/Base'
import LanguageSwitcher from 'src/components/LanguageSwitcher'
import Brand from 'src/assets/images/brand.inline.svg'
import {cHeader, cContainer, cList, cListElement, cLink, cActive, cTopBar} from './styles.module.scss'

const Navbar = ({currentLanguage, translation}) => {
  return (
    <header className={cHeader}>
      <Container className={cContainer}>
        <a>
          <Brand />
        </a>
        <nav>
          <div className={cTopBar}>
            <Link
              to="/"
              className={cLink}
              activeClassName={cActive}
            >
              Intern
            </Link>
            <LanguageSwitcher currentLanguage={currentLanguage} translation={translation} />
          </div>
          <ul className={cList}>
            <li className={cListElement}>
              <Link
                to="/"
                className={cLink}
                activeClassName={cActive}
              >
                Außen (Werbung)
              </Link>
            </li>
            <li className={cListElement}>
              <Link
                to="/components/"
                className={cLink}
                activeClassName={cActive}
              >
                Innen (Werbung)
              </Link>
            </li>
            <li className={cListElement}>
              <Link
                to="/components/"
                className={cLink}
                activeClassName={cActive}
              >
                Gebäude & Fahrzeuge
              </Link>
            </li>
            <li className={cListElement}>
              <Link
                to="/components/"
                className={cLink}
                activeClassName={cActive}
              >
                Events
              </Link>
            </li>
            <li className={cListElement}>
              <Link
                to="/components/"
                className={cLink}
                activeClassName={cActive}
              >
                Projekte
              </Link>
            </li>
            <li className={cListElement}>
              <Link
                to="/components/"
                className={cLink}
                activeClassName={cActive}
              >
                Kontakt
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Navbar
