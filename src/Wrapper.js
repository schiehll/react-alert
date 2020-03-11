import React, { useMemo } from 'react'
import { positions } from './options'

export const getStyles = position => {
  const initialStyles = {
    left: 0,
    position: 'fixed',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
    pointerEvents: 'none'
  }

  switch (position) {
    case positions.TOP_LEFT:
      return {
        ...initialStyles,
        top: 0,
        alignItems: 'flex-start'
      }
    case positions.TOP_CENTER:
      return {
        ...initialStyles,
        top: 0
      }
    case positions.TOP_RIGHT:
      return {
        ...initialStyles,
        top: 0,
        alignItems: 'flex-end'
      }
    case positions.MIDDLE_LEFT:
      return {
        ...initialStyles,
        top: '50%',
        alignItems: 'flex-start'
      }
    case positions.MIDDLE: {
      return {
        ...initialStyles,
        top: '50%'
      }
    }
    case positions.MIDDLE_RIGHT:
      return {
        ...initialStyles,
        top: '50%',
        alignItems: 'flex-end'
      }

    case positions.BOTTOM_LEFT:
      return {
        ...initialStyles,
        bottom: 0,
        alignItems: 'flex-start'
      }
    case positions.BOTTOM_CENTER:
      return {
        ...initialStyles,
        bottom: 0
      }
    case positions.BOTTOM_RIGHT:
      return {
        ...initialStyles,
        bottom: 0,
        alignItems: 'flex-end'
      }

    default: {
      return initialStyles
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
    children.length > 0 && (
      <div style={{ ...styles, ...containerStyle }} {...props}>
        {children}
      </div>
    )
  )
}

export default Wrapper
