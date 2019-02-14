import React, { useMemo } from 'react'
import { positions } from './options'

export const getStyles = position => {
  const initialStyles = { position: 'fixed' }
  switch (position) {
    case positions.TOP_LEFT:
      return {
        top: 0,
        left: 0,
        ...initialStyles
      }
    case positions.TOP_CENTER:
      return {
        top: 0,
        left: '50%',
        transform: 'translate(-50%, 0%)',
        ...initialStyles
      }
    case positions.TOP_RIGHT:
      return {
        top: 0,
        right: 0,
        ...initialStyles
      }
    case positions.MIDDLE_LEFT:
      return {
        bottom: '50%',
        left: 0,
        ...initialStyles
      }
    case positions.MIDDLE: {
      return {
        bottom: '50%',
        left: '50%',
        transform: 'translate(-50%, 0%)',
        ...initialStyles
      }
    }
    case positions.MIDDLE_RIGHT:
      return {
        bottom: '50%',
        right: 0,
        ...initialStyles
      }

    case positions.BOTTOM_LEFT:
      return {
        bottom: 0,
        left: 0,
        ...initialStyles
      }
    case positions.BOTTOM_CENTER:
      return {
        bottom: 0,
        left: '50%',
        transform: 'translate(-50%, 0%)',
        ...initialStyles
      }
    case positions.BOTTOM_RIGHT:
      return {
        right: 0,
        bottom: 0,
        ...initialStyles
      }
  }
}

const Wrapper = ({
  children,
  options: { position, containerStyle },
  ...props
}) => {
  const styles = useMemo(() => getStyles(position), [position])

  return (
    <div style={{ ...styles, ...containerStyle }} {...props}>
      {children}
    </div>
  )
}

export default Wrapper
