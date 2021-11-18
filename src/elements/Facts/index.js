import React from 'react'
import PropTypes from 'prop-types'
import {Section, Container, Wysiwyg, Text} from 'src/components/Base'
import {cFactBoxWhite, cFactWrapper, cFactBox, cFactLabel, cFactText} from './styles.module.scss'
import classNames from 'classnames'

const Facts = ({factCategory, factCompetences, factCustomer, factDate, factProjectmanager, hasBackground, smallPaddingTop, smallPaddingBottom, wysiwyg}) => {

  const factClasses = classNames({
    [cFactBox]: true,
    [cFactBoxWhite]: hasBackground
  })

  const createFactBox = (label, text) => {
    return (
      <div className={factClasses}>
        <Text className={cFactLabel}>{label}</Text>
        <Text className={cFactText}>{text}</Text>
      </div>
    )
  }

  return (
    <Section smallPaddingTop={smallPaddingTop} smallPaddingBottom={smallPaddingBottom} hasBackground={hasBackground}>
      <Container className="wysiwyg-container" isBoxed><Wysiwyg>{wysiwyg}</Wysiwyg></Container>
      <div className={cFactWrapper}>
        { factCustomer && createFactBox("Customer", factCustomer) }
        { factDate && createFactBox("Date", factDate) }
        { factCategory && createFactBox("Category", factCategory) }
        { factProjectmanager && createFactBox("Project Manager", factProjectmanager) }
        { factCompetences && createFactBox("Competences", factCompetences) }
      </div>
    </Section>
  )
}


Facts.propTypes = {
  factCategory: PropTypes.string,
  factCompetences: PropTypes.string,
  factCustomer: PropTypes.string,
  factDate: PropTypes.string,
  factProjectmanager: PropTypes.string,
  hasBackground: PropTypes.boolean,
  smallPaddingBottom: PropTypes.boolean,
  smallPaddingTop: PropTypes.boolean,
  wysiwyg: PropTypes.string,
}

Facts.defaultProps = {
  factCategory: "",
  factCompetences: "",
  factCustomer: "",
  factDate: "",
  factProjectmanager: "",
  hasBackground: false,
  smallPaddingBottom: false,
  smallPaddingTop: false,
  wysiwyg: undefined,
}

export default Facts
