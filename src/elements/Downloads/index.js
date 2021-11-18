import React from 'react'
import PropTypes from 'prop-types'
import {Section, Heading} from 'src/components/Base'
import {cHeading, cDownloads} from './styles.module.scss'
import DownloadCard from 'src/components/DownloadCard'

const Downloads = ({backgroundImage, heading, repeater}) => {

  const renderDownloads = () => {
    const elements = []

    repeater.forEach(download => {
      elements.push(
        <DownloadCard heading={download.heading} text={download.text} link={download.file.localFile.publicURL} alt={download.file.altText} />
      )
    });

    return elements
  }

  return (
    <Section backgroundImage={backgroundImage}>
      <div className="text-center">
        <Heading className={cHeading} as="h2" size={2} color="light">{heading}</Heading>
        <div className={cDownloads}>
          {renderDownloads()}
        </div>
      </div>
    </Section>
  )
}

Downloads.propTypes = {
  backgroundImage: PropTypes.object.isRequired,
  heading: PropTypes.string.isRequired,
  repeater: PropTypes.array
}

Downloads.defaultProps = {
  repeater: []
}

export default Downloads
