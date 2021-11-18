import React from 'react'
import { Section, Container, Wysiwyg, Text } from 'src/components/Base'
import classNames from 'classnames'
import { cWysiwygContainer, cAuthor, cAuthorText, cSlide, cPortrait, cQuote, cQuoteLeft, cQuoteRight, cSliderWrapper } from './styles.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import QuoteIcon from 'src/assets/images/quote.inline.svg'
import SwiperCore, { Navigation, Pagination } from 'swiper'
import 'swiper/scss';
require('swiper/scss/navigation')
require('swiper/scss/pagination')


const Reviews = ({smallPaddingTop, smallPaddingBottom, hasBackground, wysiwyg, repeater, portrait}) => {

  SwiperCore.use([Navigation, Pagination])

  const renderReviews = () => {
    const elements = []

    repeater.forEach(review => {
      elements.push(
        <SwiperSlide>
          <div className={cSlide}>
            <Text class="text-center">{review.text}</Text>
            <div className={cAuthor}>
              <GatsbyImage
                className={cPortrait}
                layout="fullWidth"
                image={getImage(
                  review.portrait.localFile.childImageSharp
                )}
                alt={review.portrait.altText}
              />
              <Text className={cAuthorText}>{review.author}</Text>
            </div>
          </div>
        </SwiperSlide>
      )
    });

    return elements
  }

  return (
    <Section className="reviews-element" smallPaddingTop={smallPaddingTop} smallPaddingBottom={smallPaddingBottom} hasBackground={hasBackground}>
      <Container className={cWysiwygContainer} isBoxed>
        <Wysiwyg>{wysiwyg}</Wysiwyg>
      </Container>

      <div className={cSliderWrapper}>
        <QuoteIcon className={classNames(cQuote, cQuoteLeft)} />
        <QuoteIcon className={classNames(cQuote, cQuoteRight)} />
        <Swiper
          navigation
          pagination
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {renderReviews()}
        </Swiper>
      </div>
    </Section>
  )
}

export default Reviews
