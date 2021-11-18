import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import {cCheckbox, cPrimary, cSecondary, cError, cDisabled, cCheckboxChecked, cLabel, cErrorMessage, cCheckboxInput} from './styles.module.scss'
import { v4 as uuid } from 'uuid'

const Checkbox = React.forwardRef(
  ({
    className,
    classNameChecked,
    classNameLabel,
    classNameError,
    label,
    color,
    checked,
    disabled,
    error,
    inputRef,
    ...props
  }) => {
    const uid = uuid()
    const [checkboxID] = useState(`checkbox-${uid}`)

    const checkboxClasses = classNames({
      [cCheckbox]: true,
      [cPrimary]: color === 'primary',
      [cSecondary]: color === 'secondary',
      [cError]: error,
      [cDisabled]: disabled,
      [className]: !!className,
    })

    const checkboxCheckedClasses = classNames({
      [cCheckboxChecked]: true,
      [cPrimary]: color === 'primary',
      [cSecondary]: color === 'secondary',
      [classNameChecked]: !!classNameChecked,
    })

    const labelClasses = classNames({
      [cLabel]: true,
      [classNameLabel]: !!classNameLabel,
    })

    const errorClasses = classNames({
      [cErrorMessage]: true,
      [classNameError]: !!classNameError,
    })

    return (
      <div className="wrapper">
        <div className={checkboxClasses}>
          {checked && (
            <svg className={checkboxCheckedClasses}>
              <path d="M15.2,0H4.8C2.2,0,0,2.1,0,4.8v10.4C0,17.8,2.2,20,4.8,20h10.4c2.6,0,4.8-2.2,4.8-4.8V4.8C20,2.1,17.8,0,15.2,0z M7.8,15.6L2.2,10l1.6-1.6l4,4L16.2,4l1.6,1.6L7.8,15.6z" />
            </svg>
          )}
          <input
            ref={inputRef}
            id={checkboxID}
            className={cCheckboxInput}
            type="checkbox"
            checked={checked}
            disabled={disabled}
            {...props}
          />
        </div>
        <label htmlFor={checkboxID} className={labelClasses}>
          {label}
        </label>
        {!!error && <p className={errorClasses}>{error}</p>}
      </div>
    )
  }
)

Checkbox.propTypes = {
  className: PropTypes.string,
  classNameChecked: PropTypes.string,
  label: PropTypes.string,
  color: PropTypes.string,
  checked: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  error: PropTypes.string,
  disabled: PropTypes.bool,
}

Checkbox.defaultProps = {
  className: '',
  classNameChecked: '',
  label: '',
  color: 'primary',
  checked: false,
  error: '',
  disabled: false,
}

export default Checkbox
