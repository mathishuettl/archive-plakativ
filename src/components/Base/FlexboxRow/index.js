import React from 'react'
import classNames from 'classnames'
import {cRow} from './styles.module.scss'

const FlexboxRow = ({ children, className, ...props }) => {
  const rowClasses = classNames({
    [cRow]: true,
    [className]: !!className,
  })

  return (
    <div className={rowClasses} {...props}>
      {children}
    </div>
  )
}

export default FlexboxRow
