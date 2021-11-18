import React from 'react'
import PropTypes from 'prop-types'
import {cInternListCard, cLink, cLeft, cRight, cHeading, cText, cIcon} from './styles.module.scss'
import {Heading, Text} from 'src/components/Base'
import DownloadIcon from 'src/assets/images/download.inline.svg'
import classNames from 'classnames'

const InternListCard = ({title, text, downloads, className}) => {
  const cardClasses = classNames({
    [cInternListCard]: true,
    [className]: !!className,
  })

  const renderDownloads = () => {
    const elements = []

    downloads.forEach(({file}) => {
      elements.push(
        <a className={cLink} href={file.localFile.publicURL} alt={file.altText} target="_blank" download>
          <DownloadIcon className={cIcon} />
          <Text className={cText} as="span">{file.title}</Text>
        </a>
      )
    });

    return elements
  }

  return (
    <div className={cardClasses}>
      <div className={cLeft}>
        <Heading className={cHeading} as="h3" size={3}>{title}</Heading>
        <Text className={cText}>{text}</Text>
      </div>
      <div className={cRight}>
        {downloads && renderDownloads()}
      </div>
    </div>
  )
}

InternListCard.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  downloads: PropTypes.array
}

InternListCard.defaultProps = {
  title: "",
  text: "",
  downloads: []
}

export default InternListCard
