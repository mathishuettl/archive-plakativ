import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import {cAlert, cSuccess, cError} from './styles.module.scss'

const Alert = ({
  as: Component = 'div',
  className,
  children,
  color,
  ...props
}) => {
  const alertClasses = classNames({
    [cAlert]: true,
    [cSuccess]: color === 'success',
    [cError]: color === 'error',
    [className]: !!className,
  })

  return (
    <Component className={alertClasses} {...props}>
      {children}
    </Component>
  )
}

Alert.PropTypes = {
  as: PropTypes.elementType,
  className: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.node.isRequired,
}

Alert.defaultProps = {
  as: 'div',
  className: '',
  color: 'success',
}

export default Alert
