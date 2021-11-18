import React from 'react'
import PropTypes from 'prop-types'
import { Section, Wysiwyg } from 'src/components/Base'

const TextElement = ({hasBackground, smallPaddingBottom, smallPaddingTop, wysiwyg}) => {

  return (
    <Section isBoxed smallPaddingTop={smallPaddingTop} smallPaddingBottom={smallPaddingBottom} hasBackground={hasBackground}>
      <Wysiwyg>{wysiwyg}</Wysiwyg>
    </Section>
  )
}

TextElement.propTypes = {
  hasBackground: PropTypes.boolean,
  smallPaddingBottom: PropTypes.boolean,
  smallPaddingTop: PropTypes.boolean,
  wysiwyg: PropTypes.string
}

TextElement.defaultProps = {
  hasBackground: false,
  smallPaddingBottom: false,
  smallPaddingTop: false,
  wysiwyg: undefined
}

export default TextElement
