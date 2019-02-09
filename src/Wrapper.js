import React, { useMemo } from 'react'

export const getStyles = position => {
  switch (position) {
    case 'top left':
      return {
        position: 'fixed',
        top: 0,
        right: 'auto',
        bottom: 'auto',
        left: 0
      }
    case 'top right':
      return {
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 'auto',
        left: 'auto'
      }
    case 'bottom left':
      return {
        position: 'fixed',
        top: 'auto',
        right: 'auto',
        bottom: 0,
        left: 0
      }
    case 'bottom right':
      return {
        position: 'fixed',
        top: 'auto',
        right: 0,
        bottom: 0,
        left: 'auto'
      }
    case 'top center':
      return {
        position: 'fixed',
        top: 0,
        right: 'auto',
        bottom: 'auto',
        left: '50%',
        transform: 'translate(-50%, 0%)'
      }
    case 'bottom center':
      return {
        position: 'fixed',
        top: 'auto',
        right: 'auto',
        bottom: 0,
        left: '50%',
        transform: 'translate(-50%, 0%)'
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
