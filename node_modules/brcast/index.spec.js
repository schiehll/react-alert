import test from 'tape'
import sinon from 'sinon'
import brcast from './index'

test('default export is a function', t => {
  t.ok(typeof brcast === 'function')
  t.end()
})

test('brcast().getState()', t => {
  const broadcast = brcast()
  t.equal(broadcast.getState(), undefined, 'works without initial state')
  broadcast.setState(2)
  t.equal(broadcast.getState(), 2, 'updates states accordingly')
  t.end()
})

test('brcast().setState()', t => {
  const handler = sinon.spy()
  const broadcast = brcast()
  broadcast.subscribe(handler)
  broadcast.setState(2)
  t.ok(
    handler.callCount === 1 && handler.calledWith(2),
    'the event handler is invoked with the state value as a parameter'
  )
  t.end()
})

test('brcast().subscribe()', t => {
  const handler = sinon.spy()
  const handler1 = sinon.spy()
  const broadcast = brcast(1)
  const subscription = broadcast.subscribe(handler)
  const subscription1 = broadcast.subscribe(handler1)
  t.ok(
    typeof subscription === 'function',
    'broadcast.subscribe(handler) returns a function'
  )
  subscription()
  broadcast.setState(2)
  broadcast.setState(3)
  t.ok(
    handler.callCount === 0,
    'when the unsubscribe function is invoked, the handler is not invoked anymore'
  )
  t.ok(handler1.callCount === 2, 'other handlers still get invoked')
  subscription1()
  t.end()
})
