import React, {useRef, useEffect} from 'react'
import PropTypes from 'prop-types'
import ReactHtmlParser from 'react-html-parser'
import classNames from 'classnames'
import { cCentered } from './styles.module.scss'
import './styles.scss'

const Wysiwyg = ({ children, className, isCentered, color }) => {

  const wysiwygRef = useRef(null)

  useEffect(() => {
    const headlines = wysiwygRef.current.querySelector("h2")
    if (headlines && headlines.style.textAlign === "center") {
      headlines.classList.add("is-centered")
    }
  }, [])

  const wysiwygClasses = classNames({
    wysiwyg: true,
    [cCentered]: isCentered,
    [className]: !!className,
  })

  return <div ref={wysiwygRef} className={wysiwygClasses}>{ReactHtmlParser(children)}</div>
}

Wysiwyg.propTypes = {
  children: PropTypes.node.isRequired,
  isCentered: PropTypes.bool,
}

Wysiwyg.defaultProps = {
  classNames: undefined,
  isCentered: false,
}

export default Wysiwyg
