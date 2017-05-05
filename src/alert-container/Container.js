import glamorous from 'glamorous/dist/glamorous.es.tiny'

const Container = glamorous('div')({
  position: 'fixed',
  right: 0,
  bottom: 0,
  margin: '14px',
  zIndex: 999999
}, props => {
  let position = {}

  switch (props.glam.position) {
    case 'top left':
      position = {
        top: 0,
        right: 'auto',
        bottom: 'auto',
        left: 0
      }
      break
    case 'top right':
      position = {
        top: 0,
        right: 0,
        bottom: 'auto',
        left: 'auto'
      }
      break
    case 'bottom left':
      position = {
        top: 'auto',
        right: 'auto',
        bottom: 0,
        left: 0
      }
      break
    case 'bottom right':
      position = {
        top: 'auto',
        right: 0,
        bottom: 0,
        left: 'auto'
      }
  }

  return {
    margin: `${props.glam.offset}px`,
    top: position.top,
    right: position.right,
    bottom: position.bottom,
    left: position.left
  }
})

export default Container
