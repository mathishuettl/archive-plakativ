import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import ReactHtmlParser from 'react-html-parser'
import { Button, Checkbox, Text } from 'src/components/Base'
import { v4 as uuid } from 'uuid'
import {cRow, cCheckboxCheck, cModal, cCookiesettings, cHeader, cHeading, cButtons, cButtonAccept, cBody, cFooter, cSave} from './styles.module.scss'

const CookieSettings = ({
  acceptAllCookies,
  toggleSettings,
  cookies,
  saveAndExitSettings,
  heading,
  text,
  acceptAllButtonText,
  saveButtonText,
  defaultCookiesText,
}) => {
  const defaults = cookies.map((cookie) => {
    return cookie.event
  })

  const [activeEvents, setActiveEvents] = useState(defaults)

  const isCheckboxChecked = (eventName) => {
    return activeEvents.includes(eventName)
  }

  const addActiveEvent = (event) => {
    if (!activeEvents.includes(event.target.value)) {
      setActiveEvents([...activeEvents, event.target.value])
    }
  }

  const removeActiveEvent = (event) => {
    setActiveEvents(activeEvents.filter((item) => item !== event.target.value))
  }

  const handleChange = (event) => {
    if (isCheckboxChecked(event.target.value)) {
      removeActiveEvent(event)
    } else {
      addActiveEvent(event)
    }
  }

  // NOTE: Remove - Debugging only
  useEffect(() => {

  }, [activeEvents])

  const cookiesMapped = cookies.map((cookie) => {
    return (
      <div key={uuid()} className={cRow}>
        <Text>
          <strong>{cookie.name}</strong>
        </Text>
        <Checkbox
          value={cookie.event}
          checked={() => isCheckboxChecked(cookie.event)}
          onChange={() => handleChange(event)}
          classNameChecked={cCheckboxCheck}
        />
      </div>
    )
  })

  return (
    <div className={cModal}>
      <div className={cCookiesettings}>
        <div className={cHeader}>
          <p className={cHeading}>{heading}</p>
          <Text>{ReactHtmlParser(text)}</Text>
          <div className={cButtons}>
            <Button
              className={cButtonAccept}
              color="primary"
              onClick={acceptAllCookies}
            >
              {acceptAllButtonText}
            </Button>
          </div>
        </div>

        <div className={cBody}>
          <div key={uuid()} className={cRow}>
            <Text>
              <strong>{defaultCookiesText}</strong>
            </Text>
            <Checkbox
              checked
              classNameChecked={cCheckboxCheck}
              disabled
            />
          </div>
          {cookiesMapped}
        </div>

        <div className={cFooter}>
          <Button
            className={cSave}
            color="secondary"
            onClick={() => saveAndExitSettings(activeEvents)}
          >
            {saveButtonText}
          </Button>
        </div>
      </div>
    </div>
  )
}

CookieSettings.propTypes = {
  acceptAllCookies: PropTypes.func.isRequired,
  toggleSettings: PropTypes.func.isRequired,
  saveAndExitSettings: PropTypes.func.isRequired,
  cookies: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      desc: PropTypes.string,
      event: PropTypes.string.isRequired,
    })
  ),
  heading: PropTypes.string,
  text: PropTypes.string,
  acceptAllButtonText: PropTypes.string,
  saveButtonText: PropTypes.string,
  defaultCookiesText: PropTypes.string,
}

CookieSettings.defaultProps = {
  cookies: [],
  heading: 'Cookie Settings',
  text: '',
  acceptAllButtonText: 'Accept all cookies',
  saveButtonText: 'Save and exit',
  defaultCookiesText: 'Functional cookies',
}

export default CookieSettings
