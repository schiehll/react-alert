export default function createBroadcast (initialState) {
  let listeners = []
  let _state = initialState

  const getState = () => _state

  const setState = state => {
    _state = state
    listeners.forEach(listener => listener(_state))
  }

  const subscribe = listener => {
    listeners.push(listener)

    return function unsubscribe () {
      listeners = listeners.filter(item => item !== listener)
    }
  }

  return { getState, setState, subscribe }
}
