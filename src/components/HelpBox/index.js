import React from 'react'
import PropTypes from 'prop-types'
import {cHelpBox, cHeading, cLink, cIcon, cText} from './styles.module.scss'
import LinkIcon from 'src/assets/images/link.inline.svg'
import {Heading, Text} from 'src/components/Base'
import { v4 as uuid } from 'uuid'

const HelpBox = ({heading, links}) => (
  <div className={cHelpBox}>
    <Heading className={cHeading} as="h3" size={3}>{heading}</Heading>
    { links && links.map(({link}) => (
      <a key={uuid()} className={cLink} href={link.url}>
        <LinkIcon className={cIcon} />
        <Text className={cText}>{link.title}</Text>
      </a>
    ))}
  </div>
)

HelpBox.propTypes = {
  heading: PropTypes.string.isRequired,
  links: PropTypes.array
}

HelpBox.defaultProps = {
  links: []
}

export default HelpBox
