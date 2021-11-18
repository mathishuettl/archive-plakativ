import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import {cButton, cDisabled, cPrimary, cSecondary, cCta, cPrimaryOutlined, cWhiteOutlined, cCtaOutlined} from './styles.module.scss'
const Button = ({
  as: Component = 'button',
  className,
  children,
  color,
  outlined,
  disabled,
  ...props
}) => {
  const buttonClasses = classNames({
    [cButton]: true,
    [cDisabled]: disabled,
    [cPrimary]: !outlined && color === 'primary',
    [cSecondary]: !outlined && color === 'secondary',
    [cCta]: !outlined && color === 'cta',
    [cPrimaryOutlined]: outlined && color === 'primary',
    [cWhiteOutlined]: outlined && color === 'white',
    [cCtaOutlined]: outlined && color === 'cta',
    [className]: !!className,
  })

  return (
    <Component className={buttonClasses} disabled={cDisabled} {...props}>
      {children}
    </Component>
  )
}

Button.PropTypes = {
  as: PropTypes.elementType,
  color: PropTypes.string,
  outlined: PropTypes.boolean,
  disbaled: PropTypes.boolean,
  children: PropTypes.node.isRequired,
}

Button.defaultProps = {
  as: 'button',
  color: 'primary',
  outlined: false,
  disabled: false,
}

export default Button
