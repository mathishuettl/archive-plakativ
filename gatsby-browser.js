import React from 'react'
import WrapPageElement from './wrap'

export const wrapPageElement = ({ element, props }) => {
  return (
    <WrapPageElement element={element} props={props} />
  )
}
