import React from 'react'
import PropTypes from 'prop-types'
import { Section, Wysiwyg, Container } from 'src/components/Base'
import InternListCard from 'src/components/InternListCard'
import {cCard} from './styles.module.scss'

const InternList = ({hasBackground, smallPaddingBottom, smallPaddingTop, wysiwyg, boxes}) => {

  const renderInternList = () => {
    const elements = []

    boxes.forEach(({heading, text, downloads}) => {
      elements.push(
        <InternListCard className={cCard} title={heading} text={text} downloads={downloads} />
      )
    })

    return elements
  }

  return (
    <Section smallPaddingTop={smallPaddingTop} smallPaddingBottom={smallPaddingBottom} hasBackground={hasBackground}>
      <Container className="wysiwyg-container"><Wysiwyg>{wysiwyg}</Wysiwyg></Container>
      <div>
        {renderInternList()}
      </div>
    </Section>
  )
}

InternList.propTypes = {
  hasBackground: PropTypes.boolean,
  smallPaddingBottom: PropTypes.boolean,
  smallPaddingTop: PropTypes.boolean,
  wysiwyg: PropTypes.string,
  boxes: PropTypes.array
}

InternList.defaultProps = {
  hasBackground: false,
  smallPaddingBottom: false,
  smallPaddingTop: false,
  wysiwyg: undefined,
  boxes: []
}

export default InternList
