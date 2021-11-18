import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import {cText} from './styles.module.scss'

const Text = ({ as: Component = 'p', children, className, ...props }) => {
  const textClasses = classNames([className], [cText])

  return (
    <Component className={textClasses} {...props}>
      {children}
    </Component>
  )
}

Text.propTypes = {
  as: PropTypes.elementType,
  children: PropTypes.node.isRequired,
}

Text.defaultProps = {
  as: 'p',
}

export default Text
