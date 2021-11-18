import React from 'react'
import PropTypes from 'prop-types'
import { Section, Wysiwyg, FlexboxRow, FlexboxCol } from 'src/components/Base'
import {cLeftCol, cRightCol} from './styles.module.scss'

const TextLeftTextRight = ({hasBackground, smallPaddingBottom, smallPaddingTop, textLeft, textRight}) => {

  return (
    <Section smallPaddingTop={smallPaddingTop} smallPaddingBottom={smallPaddingBottom} hasBackground={hasBackground}>
      <FlexboxRow>
        <FlexboxCol className={cLeftCol} width={6}>
          <Wysiwyg>{textLeft}</Wysiwyg>
        </FlexboxCol>
        <FlexboxCol className={cRightCol} width={6}>
          <Wysiwyg>{textRight}</Wysiwyg>
        </FlexboxCol>
      </FlexboxRow>
    </Section>
  )
}

TextLeftTextRight.propTypes = {
  hasBackground: PropTypes.boolean,
  smallPaddingBottom: PropTypes.boolean,
  smallPaddingTop: PropTypes.boolean,
  textLeft: PropTypes.string,
  textRight: PropTypes.string
}

TextLeftTextRight.defaultProps = {
  hasBackground: false,
  smallPaddingBottom: false,
  smallPaddingTop: false,
  textLeft: undefined,
  textRight: undefined
}

export default TextLeftTextRight
