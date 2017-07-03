import glamorous from 'glamorous/dist/glamorous.cjs.tiny'

const Close = glamorous('div')({
  width: '50px',
  height: '100%',
  borderRadius: '0 2px 2px 0',
  cursor: 'pointer',
  position: 'absolute',
  top: 0,
  right: 0,
  ':hover': {
    opacity: '0.5'
  }
}, props => ({
  background: `url('data:image/svg+xml;utf8,<svg fill="${props.glam.dark ? '%23fff' : '%23333'}" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 0 48 48" width="48"><path d="M38 12.83l-2.83-2.83-11.17 11.17-11.17-11.17-2.83 2.83 11.17 11.17-11.17 11.17 2.83 2.83 11.17-11.17 11.17 11.17 2.83-2.83-11.17-11.17z"/><path d="M0 0h48v48h-48z" fill="none"/></svg>') no-repeat`,
  backgroundPosition: '50%',
  backgroundSize: '25px',
  backgroundColor: `${props.glam.dark ? '#444' : '#f3f3f3'} !important`
}))

export default Close
