import React from 'react'
import {Heading, Container, Button} from 'src/components/Base'
import {cSmall, cHeroSection, cHeadingWrapper, cFullHeight, cHeading, cFullHeightImage, cImageContainer, cTextContainer, cButton} from './styles.module.scss'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const Hero = ({heading, fullHeight, image, button}) => {

  const heroClasses = classNames({
    [cHeroSection]: true,
    [cFullHeight]: fullHeight,
    [cSmall]: !fullHeight
  })

  return (
    <div className={heroClasses}>
      <Container className={cTextContainer}>
        <div className={cHeadingWrapper}>
          <Heading as="h1" color="light" size={1} className={cHeading}>{heading}</Heading>
          {button && <Button className={cButton} color="white" outlined as="a" href={button.url}>{button.title}</Button>}
        </div>
      </Container>

      { fullHeight && (
        <Container className={cImageContainer}>
          <GatsbyImage
            className={cFullHeightImage}
            layout="fullWidth"
            image={getImage(
              image.localFile.childImageSharp
            )}
            alt=""
          />
        </Container>
      )}
    </div>
  )
}

Hero.propTypes = {
  heading: PropTypes.string.isRequired,
  fullHeight: PropTypes.boolean,
  image: PropTypes.object,
  button: PropTypes.object
}

Hero.defaultProps = {
  fullHeight: false,
  image: undefined,
  button: undefined
}

export default Hero
