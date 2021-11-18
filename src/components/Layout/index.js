import React from 'react'
import PropTypes from 'prop-types'
import Navbar from 'src/components/Navbar'
import CookieConsent from 'src/components/CookieConsent'
import Footer from 'src/components/Footer'
import 'normalize.css'
import './styles.scss'

import 'src/theme/theme.scss'

const Layout = ({ children, translation, currentLanguage }) => {

  return (
    <>
      <Navbar currentLanguage={currentLanguage} translation={translation} />
      <CookieConsent
        cookieBannerHeading="Cookie Hinweis"
        cookieBannerText='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet felis ut nunc bibendum, at posuere felis lacinia. Aenean commodo felis sit amet ultricies mattis. Donec cursus felis dui, nec rhoncus enim tristique vulputate. Sed maximus odio eget enim blandit blandit. Sed nunc mauris, elementum sit amet dolor eget, faucibus efficitur orci. <a href="/impressum/" target="_blank">Impressum</a>'
        cookieBannerButtonTextAccept="Alle Cookies akzeptieren"
        cookieBannerButtonTextSettings="Mehr erfahren und anpassen"
        cookieSettingsHeading="Cookie Einstellungen"
        cookieSettingsText="Über die nachfolgende Kontrollfläche können Sie Ihre Einwilligungspräferenzen anpassen, für jegliche Tracking Technologie, die uns hilft, die unten beschriebenen Funktionen und Aktivitäten zu erreichen. Näheres zu solchen Technologien und zu deren Funktionsweise entnehmen Sie den <a href='/impressum/' target='_blank'>Cookie-Richtlinien</a>. Ihre Auswahl können Sie jederzeit überprüfen und ändern."
        cookieSettingsAcceptAllText="Alle Cookies akzeptieren"
        cookieSettingsSaveText="Speichern und weitersurfen"
        cookieSettingsDefaultCookieText="Essentielle Cookies"
        gtmTriggers={[
          {
            name: 'Tracking Cookies',
            desc: 'Test Desc',
            event: 'trackingCookieAccepted',
          },
          {
            name: 'Marketing Cookies',
            event: 'marketingCookieAccepted',
          },
        ]}
      />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
