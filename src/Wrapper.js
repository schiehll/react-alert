import React, { useMemo } from 'react'

export const getStyles = position => {
  const initialStyles = { position: 'fixed' }
  switch (position) {
    case 'top left':
      return {
        top: 0,
        left: 0,
        ...initialStyles
      }
    case 'top right':
      return {
        top: 0,
        right: 0,
        ...initialStyles
      }
    case 'top center':
      return {
        top: 0,
        left: '50%',
        transform: 'translate(-50%, 0%)',
        ...initialStyles
      }
    case 'middle left':
      return {
        bottom: '50%',
        left: 0,
        ...initialStyles
      }
    case 'middle right':
      return {
        bottom: '50%',
        right: 0,
        ...initialStyles
      }
    case 'middle': {
      return {
        bottom: '50%',
        left: '50%',
        transform: 'translate(-50%, 0%)',
        ...initialStyles
      }
    }
    case 'bottom left':
      return {
        bottom: 0,
        left: 0,
        ...initialStyles
      }
    case 'bottom right':
      return {
        right: 0,
        bottom: 0,
        ...initialStyles
      }
    case 'bottom center':
      return {
        bottom: 0,
        left: '50%',
        transform: 'translate(-50%, 0%)',
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
