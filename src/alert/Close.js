import glamorous from 'glamorous/dist/glamorous.cjs.tiny'

const fillColor = props.glam.dark ? '%23fff' : '%23333';

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
  // background: `url("data:image/svg+xml;charset=utf8,%3Csvg%20fill%3D%22%24%7Bprops.glam.dark%20%3F%20%27%2523fff%27%20%3A%20%27%2523333%27%7D%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20height%3D%2248%22%20viewBox%3D%220%200%2048%2048%22%20width%3D%2248%22%3E%3Cpath%20d%3D%22M38%2012.83l-2.83-2.83-11.17%2011.17-11.17-11.17-2.83%202.83%2011.17%2011.17-11.17%2011.17%202.83%202.83%2011.17-11.17%2011.17%2011.17%202.83-2.83-11.17-11.17z%22%2F%3E%3Cpath%20d%3D%22M0%200h48v48h-48z%22%20fill%3D%22none%22%2F%3E%3C%2Fsvg%3E") no-repeat`,
  background: `url("data:image/svg+xml;charset=utf8,%3Csvg%20fill%3D%22%24%7BfillColor%7D%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20height%3D%2248%22%20viewBox%3D%220%200%2048%2048%22%20width%3D%2248%22%3E%3Cpath%20d%3D%22M38%2012.83l-2.83-2.83-11.17%2011.17-11.17-11.17-2.83%202.83%2011.17%2011.17-11.17%2011.17%202.83%202.83%2011.17-11.17%2011.17%2011.17%202.83-2.83-11.17-11.17z%22%2F%3E%3Cpath%20d%3D%22M0%200h48v48h-48z%22%20fill%3D%22none%22%2F%3E%3C%2Fsvg%3E") no-repeat`,
  backgroundPosition: '50%',
  backgroundSize: '25px',
  backgroundColor: `${props.glam.dark ? '#444' : '#f3f3f3'} !important`
}))

export default Close
