import React from 'react'
import PropTypes from 'prop-types'
import { Text, Heading } from 'src/components/Base'
import DownloadIcon from 'src/assets/images/download.inline.svg'
import {cDownloadCard, cLeft, cDownloadLink, cHeading, cText} from './styles.module.scss'

const DownloadCard = ({heading, text, link, alt}) => (
  <div className={cDownloadCard}>
    <div className={cLeft}>
      <Heading className={cHeading} as="h3" size={3}>{heading}</Heading>
      <Text className={cText}>{text}</Text>
    </div>
    <a className={cDownloadLink} href={link} alt={alt} target="_blank" download>
      <DownloadIcon />
    </a>
  </div>
)

DownloadCard.propTypes = {
  heading: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  text: PropTypes.string,
  alt: PropTypes.string
}

DownloadCard.defaultProps = {
  text: "",
  alt: ""
}

export default DownloadCard
