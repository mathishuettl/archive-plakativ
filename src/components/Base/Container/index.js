import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import {cContainer, cIsBoxed, cAlignedLeft} from './styles.module.scss'

const Container = ({
  as: Component = 'div',
  children,
  className,
  isBoxed,
  alignment,
  ...props
}) => {
  const containerClasses = classNames({
    [cContainer]: true,
    [cIsBoxed]: isBoxed,
    [className]: !!className,
    [cAlignedLeft]: alignment === "left"
  })

  return (
    <Component className={containerClasses} {...props}>
      {children}
    </Component>
  )
}

Container.propTypes = {
  as: PropTypes.elementType,
  children: PropTypes.node.isRequired,
  isBoxed: PropTypes.bool
}

Container.defaultProps = {
  as: 'div',
  isBoxed: false
}

export default Container
