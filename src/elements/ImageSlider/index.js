import React from 'react'
import PropTypes from 'prop-types'
import { Section, Wysiwyg, Container } from 'src/components/Base'
import {cImage} from './styles.module.scss'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import SwiperCore, { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
require('swiper/scss/navigation')
require('swiper/scss/pagination')

const ImageSlider = ({hasBackground, smallPaddingBottom, smallPaddingTop, wysiwyg, images}) => {
  SwiperCore.use([Navigation, Pagination])

  const renderSlides = () => {
    const elements = []

    images.forEach(image => {
      elements.push(
        <SwiperSlide>
          <GatsbyImage
            className={cImage}
            layout="fullWidth"
            image={getImage(
              image.localFile.childImageSharp
            )}
            alt={image.altText}
          />
        </SwiperSlide>
      )
    });

    return elements
  }

  return (
    <Section className="imageslider-element" smallPaddingTop={smallPaddingTop} smallPaddingBottom={smallPaddingBottom} hasBackground={hasBackground}>
      <Container className="wysiwyg-container" isBoxed><Wysiwyg>{wysiwyg}</Wysiwyg></Container>
        <Swiper
          navigation
          pagination
        >
          {renderSlides()}
        </Swiper>
    </Section>
  )
}

ImageSlider.propTypes = {
  hasBackground: PropTypes.boolean,
  smallPaddingBottom: PropTypes.boolean,
  smallPaddingTop: PropTypes.boolean,
  wysiwyg: PropTypes.string,
  images: PropTypes.array
}

ImageSlider.defaultProps = {
  hasBackground: false,
  smallPaddingBottom: false,
  smallPaddingTop: false,
  wysiwyg: undefined,
  images: []
}

export default ImageSlider
