import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import {cHeading, cH1, cH2, cH3, cH4, cH5, cH6, cDark, cLight} from './styles.module.scss'

const Heading = ({
  as: Component = 'h1',
  children,
  className,
  size,
  color,
  ...props
}) => {
  const headingClasses = classNames({
    [cHeading]: true,
    [cH1]: size === 1,
    [cH2]: size === 2,
    [cH3]: size === 3,
    [cH4]: size === 4,
    [cH5]: size === 5,
    [cH6]: size === 6,
    [cDark]: color === 'dark',
    [cLight]: color === 'light',
    [className]: !!className,
  })

  return (
    <Component className={headingClasses} {...props}>
      {children}
    </Component>
  )
}

Heading.propTypes = {
  as: PropTypes.elementType,
  size: PropTypes.number,
  children: PropTypes.node.isRequired,
}

Heading.defaultProps = {
  as: 'h1',
  size: 1,
}

export default Heading
