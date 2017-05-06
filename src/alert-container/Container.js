import glamorous from 'glamorous/dist/glamorous.cjs.tiny'

const Container = glamorous('div')({
  position: 'fixed',
  right: 0,
  bottom: 0,
  margin: '14px',
  zIndex: 999999
}, props => {
  switch (props.glam.position) {
    case 'top left':
      return {
        margin: `${props.glam.offset}px`,
        top: 0,
        right: 'auto',
        bottom: 'auto',
        left: 0
      }
    case 'top right':
      return {
        margin: `${props.glam.offset}px`,
        top: 0,
        right: 0,
        bottom: 'auto',
        left: 'auto'
      }
    case 'bottom left':
      return {
        margin: `${props.glam.offset}px`,
        top: 'auto',
        right: 'auto',
        bottom: 0,
        left: 0
      }
    case 'bottom right':
      return {
        margin: `${props.glam.offset}px`,
        top: 'auto',
        right: 0,
        bottom: 0,
        left: 'auto'
      }
  }
})

export default Container
