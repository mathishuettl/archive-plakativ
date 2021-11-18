import React from 'react'
import PropTypes from 'prop-types'
import {Section, Heading, Button} from 'src/components/Base'
import {cHeading, cButton} from './styles.module.scss'

const CallToAction = ({backgroundImage, heading, showButton, button}) => (
  <Section backgroundImage={backgroundImage}>
    <div className="text-center">
      <Heading className={cHeading} as="h2" size={2} color="light">{heading}</Heading>
      { showButton && <Button className={cButton} as="a" href={button.url} target={button.target} color="white" outlined>{button.title}</Button> }
    </div>
  </Section>
)

CallToAction.propTypes = {
  backgroundImage: PropTypes.object.isRequired,
  heading: PropTypes.string.isRequired,
  showButton: PropTypes.boolean,
  button: PropTypes.object
}

CallToAction.defaultProps = {
  showButton: false,
  button: {}
}

export default CallToAction
