import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import * as styles from './styles.module.scss'

const FlexboxCol = ({ children, className, width, offset, sm, ...props }) => {
  const smClasses = new Array(12).map((elem, index) => {
    return {
      [styles.sm + index]: sm === index,
    }
  })

  const colClasses = classNames({
    [styles.col]: true,
    [styles.width1]: width === 1,
    [styles.width2]: width === 2,
    [styles.width3]: width === 3,
    [styles.width4]: width === 4,
    [styles.width5]: width === 5,
    [styles.width6]: width === 6,
    [styles.width7]: width === 7,
    [styles.width8]: width === 8,
    [styles.width9]: width === 9,
    [styles.width10]: width === 10,
    [styles.width11]: width === 11,
    [styles.width12]: width === 12,
    [styles.offset3]: offset === 3,
    smClasses,
    [className]: !!className,
  })

  return (
    <div className={colClasses} {...props}>
      {children}
    </div>
  )
}

FlexboxCol.propTypes = {
  width: PropTypes.number,
  offset: PropTypes.number,
  sm: PropTypes.number,
}

FlexboxCol.defaultProps = {
  width: 1,
  offset: 0,
  sm: 12,
}

export default FlexboxCol
