import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import {cInput, cError, cSuccess, cPrimary, cSecondary, cLabel, cErrorMessage} from './styles.module.scss'
const Input = ({
  as: Component = 'input',
  className,
  labelClassName,
  errorClassName,
  type,
  color,
  label,
  error,
  success,
  required,
  ...props
}) => {
  const [value, setValue] = useState('')

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  const buttonClasses = classNames({
    [cInput]: true,
    [cError]: !!error,
    [cSuccess]: !!success,
    [cPrimary]: color === 'primary',
    [cSecondary]: color === 'secondary',
    [className]: !!className,
  })

  const labelClasses = classNames({
    [cLabel]: true,
    [labelClassName]: !!labelClassName,
  })

  const errorClasses = classNames({
    [cErrorMessage]: true,
    [errorClassName]: !!errorClassName,
  })

  return (
    <>
      {!!label && (
        <label className={labelClasses} htmlFor="">
          {label}
          {required && <span> *</span>}
        </label>
      )}
      <Component
        className={buttonClasses}
        type={type}
        value={value}
        onChange={handleChange}
        required={required}
        {...props}
      />
      {!!error && <p className={errorClasses}>{error}</p>}
    </>
  )
}

Input.PropTypes = {
  as: PropTypes.elementType,
  className: PropTypes.string,
  labelClassName: PropTypes.string,
  errorClassName: PropTypes.string,
  type: PropTypes.string,
  color: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string,
  children: PropTypes.node.isRequired,
}

Input.defaultProps = {
  as: 'input',
  className: '',
  labelClassName: '',
  errorClassName: '',
  type: 'text',
  color: '',
  label: '',
  error: '',
  disabled: false,
}

export default Input
