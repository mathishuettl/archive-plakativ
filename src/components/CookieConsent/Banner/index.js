import React from 'react'
import PropTypes from 'prop-types'
import ReactHtmlParser from 'react-html-parser'
import { Button, Text } from 'src/components/Base'
import {cCookiebanner, cHeading, cText, cButtonAccept, cButtonSettings} from './styles.module.scss'

const CookieBanner = ({
  acceptAllCookies,
  toggleSettings,
  heading,
  text,
  buttonTextAccept,
  buttonTextSettings,
}) => (
  <div className={cCookiebanner}>
    <p className={cHeading}>{heading}</p>
    <Text className={cText}>{ReactHtmlParser(text)}</Text>
    <Button onClick={acceptAllCookies} className={cButtonAccept}>
      {buttonTextAccept}
    </Button>
    <Button
      color="secondary"
      onClick={toggleSettings}
      className={cButtonSettings}
    >
      {buttonTextSettings}
    </Button>
  </div>
)

CookieBanner.propTypes = {
  acceptAllCookies: PropTypes.func,
  toggleSettings: PropTypes.func,
}

export default CookieBanner
