import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import {cLink} from './styles.module.scss'

const Link = ({ children, className, ...props }) => {
  const linkClasses = classNames({
    [cLink]: true,
    [className]: !!className,
  })

  return (
    <AniLink
      cover
      duration={0.9}
      bg="#3f50b5"
      className={linkClasses}
      {...props}
    >
      {children}
    </AniLink>
  )
}

Link.PropTypes = {
  children: PropTypes.node.isRequired,
}

export default Link
