import React from 'react'
import PropTypes from 'prop-types'
import { Container } from 'src/components/Base'
import classNames from 'classnames'
import {cImageOverlay, cHasBackgroundImage, cSection, cHasBackground, cSmallPaddingBottom, cSmallPaddingTop} from './styles.module.scss'
import { getImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from 'gatsby-background-image'

const Section = ({ children, hasBackground, className, smallPaddingBottom, smallPaddingTop, isBoxed, backgroundImage }) => {

  let bgImage = null

  if (backgroundImage) {
    bgImage = convertToBgImage(getImage(backgroundImage.localFile.childImageSharp))
  }

  const sectionClasses = classNames({
    [cSection]: true,
    [cSmallPaddingBottom]: smallPaddingBottom,
    [cSmallPaddingTop]: smallPaddingTop,
    [cHasBackground]: hasBackground,
    [cHasBackgroundImage]: cHasBackgroundImage,
    [className]: !!className,
  })

  return (
    <>
      { !backgroundImage && (
        <section className={sectionClasses}>
          <Container isBoxed={isBoxed}>{children}</Container>
        </section>
      )}

      { backgroundImage && (
        <BackgroundImage className={sectionClasses} Tag="section" {...bgImage}>
          <div className={cImageOverlay}></div>
          <Container isBoxed={isBoxed}>{children}</Container>
        </BackgroundImage>
      )}
    </>
  )
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  hasBackground: PropTypes.bool,
  backgroundColor: PropTypes.string,
  isBoxed: PropTypes.bool,
  backgroundImage: PropTypes.object
}

Section.propTypes = {
  className: 'test',
  hasBackground: false,
  backgroundColor: "#FF0000",
  isBoxed: false,
  backgroundImage: undefined
}

export default Section
