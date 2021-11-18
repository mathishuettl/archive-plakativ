import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Cookies from 'js-cookie'
import CookieBanner from './Banner'
import CookieSettings from './Settings'
import { triggerTagManagerEvent } from 'src/utils/gtm.js'

const CookieConsent = ({
  cookieName,
  cookieBannerHeading,
  cookieBannerText,
  cookieBannerButtonTextAccept,
  cookieBannerButtonTextSettings,
  cookieSettingsHeading,
  cookieSettingsText,
  cookieSettingsAcceptAllText,
  cookieSettingsSaveText,
  cookieSettingsDefaultCookieText,
  gtmTriggers,
}) => {
  const [isBannerVisible, setBannerVisible] = useState(!Cookies.get(cookieName))
  const [isSettingVisible, setSettingVisible] = useState(false)

  const init = () => {
    Cookies.set(cookieName, true, { expires: 14 })
    Cookies.set('gatsby-gdpr-google-tagmanager', true)
  }

  const acceptAllCookies = () => {
    init()
    Cookies.set(`${cookieName}-events`, ['allCookiesAccepted'], { expires: 14 })
    hideUI()
  }

  const saveAndExitSettings = (events) => {
    init()
    Cookies.set(`${cookieName}-events`, events, { expires: 14 })
    hideUI()
  }

  const triggerEvents = (events) => {
    events.forEach((event) => {
      triggerTagManagerEvent(event)
    })
  }

  const toggleSettings = () => {
    setBannerVisible(false)
    setSettingVisible(!isSettingVisible)
  }

  const hideUI = () => {
    setSettingVisible(false)
    setBannerVisible(false)
  }

  const checkCookie = () => {
    const events = Cookies.get(`${cookieName}-events`)
    if (events) {
      triggerEvents(JSON.parse(events))
    }
  }

  useEffect(() => {
    checkCookie()
  })

  return (
    <>
      {isBannerVisible && (
        <CookieBanner
          acceptAllCookies={acceptAllCookies}
          toggleSettings={toggleSettings}
          heading={cookieBannerHeading}
          text={cookieBannerText}
          buttonTextAccept={cookieBannerButtonTextAccept}
          buttonTextSettings={cookieBannerButtonTextSettings}
        />
      )}
      {isSettingVisible && (
        <CookieSettings
          acceptAllCookies={acceptAllCookies}
          toggleSettings={toggleSettings}
          cookies={gtmTriggers}
          saveAndExitSettings={saveAndExitSettings}
          heading={cookieSettingsHeading}
          text={cookieSettingsText}
          acceptAllButtonText={cookieSettingsAcceptAllText}
          saveButtonText={cookieSettingsSaveText}
          defaultCookiesText={cookieSettingsDefaultCookieText}
        />
      )}
    </>
  )
}

CookieConsent.propTypes = {
  cookieName: PropTypes.string,
  gtmTriggers: PropTypes.array,
}

CookieConsent.defaultProps = {
  cookieName: 'cookie-banner',
  gtmTriggers: [],
}

export default CookieConsent
