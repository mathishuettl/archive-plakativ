import React from 'react'
import PropTypes from 'prop-types'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Link, Text } from 'src/components/Base'
import { cText, cLink } from './styles.module.scss'

const Tile = ({imageData, alt, link, text}) => {

  return (
    <Link className={cLink} to={link}>
      <GatsbyImage
        layout="fullWidth"
        image={getImage(
          imageData
        )}
        alt=""
      />
      { text && <Text className={cText}>{text}</Text> }
    </Link>
  )
}

Tile.propTypes = {
  imageData: PropTypes.object.isRequired,
  alt: PropTypes.string
}

Tile.defaultProps = {
  alt: ""
}

export default Tile
