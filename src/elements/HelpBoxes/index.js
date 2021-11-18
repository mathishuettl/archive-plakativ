import React from 'react'
import PropTypes from 'prop-types'
import { Section, FlexboxRow, FlexboxCol } from 'src/components/Base'
import {cHelpBoxes, cHelpBox} from './styles.module.scss'
import HelpBox from 'src/components/HelpBox'

const HelpBoxes = ({smallPaddingTop, smallPaddingBottom, hasBackground, boxes}) => {
  const renderHelpBoxes = () => {
    const elements = []

    boxes.forEach(({heading, links}) => {
      elements.push(<FlexboxCol className={cHelpBox} width={4}><HelpBox heading={heading} links={links} /></FlexboxCol>)
    })

    return elements
  }

  return (
    <Section smallPaddingTop={smallPaddingTop} smallPaddingBottom={smallPaddingBottom} hasBackground={hasBackground}>
      <FlexboxRow className={cHelpBoxes}>
        {renderHelpBoxes()}
      </FlexboxRow>
    </Section>
  )
}

HelpBoxes.propTypes = {
  hasBackground: PropTypes.boolean,
  smallPaddingBottom: PropTypes.boolean,
  smallPaddingTop: PropTypes.boolean,
  boxes: PropTypes.array
}

HelpBoxes.defaultProps = {
  hasBackground: false,
  smallPaddingBottom: false,
  smallPaddingTop: false,
  boxes: []
}

export default HelpBoxes
