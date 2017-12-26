import glamorous from 'glamorous/dist/glamorous.cjs.tiny'

const Alert = glamorous('div')({
  width: '300px',
  minHeight: '50px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontSize: '11px',
  position: 'relative',
  '&.scale-enter': {
    transform: 'scale(0)'
  },
  '&.scale-enter.scale-enter-active': {
    transform: 'scale(1)',
    transition: 'all 250ms cubic-bezier(0, 0, 0.5, 1.5)'
  },
  '&.scale-leave': {
    transform: 'scale(1)'
  },
  '&.scale-leave.scale-leave-active': {
    transform: 'scale(0)',
    transition: 'all 250ms ease-in-out'
  },
  '&.fade-enter': {
    opacity: '0.1'
  },
  '&.fade-enter.fade-enter-active': {
    opacity: '1',
    transition: 'all 250ms ease-out'
  },
  '&.fade-leave': {
    opacity: '1'
  },
  '&.fade-leave.fade-leave-active': {
    opacity: '0.1',
    transition: 'all 250ms ease-in'
  }
}, props => ({
  backgroundColor: `${props.glam.dark ? '#333' : '#fff'}`,
  color: `${props.glam.dark ? '#fff' : '#333'}`,
  boxShadow: `${props.glam.boxShadow || '0 8px 12px 0 rgba(0,0,0,0.3)'}`,
  margin: `0 0 ${+(!props.glam.lastAlert)}px 0` 
}))

export default Alert
