import React, {useRef, useEffect} from 'react'
import PropTypes from 'prop-types'
import { Section, Wysiwyg, FlexboxRow, FlexboxCol, Button } from 'src/components/Base'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import {cCol, cRightCol, cLeftCol, cTextCol, cImageCol, cButton} from './styles.module.scss'
import classNames from 'classnames'
import { useBreakpoint } from 'gatsby-plugin-breakpoints';

const TextAndImageElement = ({hasBackground, smallPaddingBottom, smallPaddingTop, wysiwyg, image, swap, showButton, button}) => {
  const breakpoints = useBreakpoint()

  const imageColRef = useRef(null)
  const imageRef = useRef(null)
  const wysiwygRef = useRef(null)

  useEffect(() => {
    if (wysiwygRef) {
      if (breakpoints.sm) {
        const headline = wysiwygRef.current.querySelector("h2")

        if (headline) {
          headline.after(imageRef.current)
        }
      } else if (breakpoints.xl) {
        imageColRef.current.appendChild(imageRef.current)
      }
    }
  }, [breakpoints])

  const getTextElement = () => {
    return (
        <div ref={wysiwygRef}>
          <Wysiwyg>{wysiwyg}</Wysiwyg>
          { showButton && (
            <Button className={cButton} as="a" href={button.url}>{button.title}</Button>
          )}
        </div>
    )
  }

  const getImageElement = () => {
    return (
      <div ref={imageRef}>
        <GatsbyImage
          layout="fullWidth"
          image={getImage(
            image.localFile.childImageSharp
          )}
          alt={image.altText}
        />
      </div>
    )
  }

  const leftColClasses = classNames({
    [cCol]: true,
    [cLeftCol]: true,
    [cImageCol]: swap,
    [cTextCol]: !swap
  })
  const rightColClasses = classNames({
    [cCol]: true,
    [cRightCol]: true,
    [cImageCol]: !swap,
    [cTextCol]: swap
  })

  return (
    <Section smallPaddingTop={smallPaddingTop} smallPaddingBottom={smallPaddingBottom} hasBackground={hasBackground}>
      <FlexboxRow>
        <FlexboxCol width={6} className={leftColClasses}>
         { !swap ? getTextElement() : <div ref={imageColRef}>{getImageElement()}</div> }
        </FlexboxCol>
        <FlexboxCol width={6} className={rightColClasses}>
          { !swap ? <div ref={imageColRef}>{getImageElement()}</div> : getTextElement() }
        </FlexboxCol>
      </FlexboxRow>
    </Section>
  )
}

TextAndImageElement.propTypes = {
  hasBackground: PropTypes.boolean,
  smallPaddingBottom: PropTypes.boolean,
  smallPaddingTop: PropTypes.boolean,
  wysiwyg: PropTypes.string,
  image: PropTypes.object,
  swap: PropTypes.boolean,
  showButton: PropTypes.boolean,
  button: PropTypes.object
}

TextAndImageElement.defaultProps = {
  hasBackground: false,
  smallPaddingBottom: false,
  smallPaddingTop: false,
  wysiwyg: undefined,
  image: undefined,
  swap: false,
  showButton: false,
  button: undefined
}

export default TextAndImageElement
