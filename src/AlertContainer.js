class AlertContainer {
  constructor (defaultOptions) {
    this.defaultOptions = defaultOptions
    this.listners = []
    this.alerts = []
  }

  show = (message = '', options = {}) => {
    const id = new Date().getTime()
    const alertOptions = {
      ...this.defaultOptions,
      ...options
    }

    const alert = {
      id,
      message,
      options: alertOptions
    }

    alert.close = () => this.remove(alert)

    if (alert.options.timeout) {
      setTimeout(() => {
        this.remove(alert)
      }, alert.options.timeout)
    }

    this.alerts.push(alert)
    this._broadcastToFirstListner()

    return alert
  }

  remove = alert => {
    const lengthBeforeRemove = this.alerts.length
    this.alerts = this.alerts.filter(a => a.id !== alert.id)

    if (lengthBeforeRemove > this.alerts.length) {
      this._broadcastToFirstListner()
      alert.options.onClose && alert.options.onClose()
    }
  }

  success = (message = '', options = {}) => {
    options.type = 'success'
    return this.show(message, options)
  }

  error = (message = '', options = {}) => {
    options.type = 'error'
    return this.show(message, options)
  }

  info = (message = '', options = {}) => {
    options.type = 'info'
    return this.show(message, options)
  }

  _getAlerts = () => this.alerts

  _broadcastToFirstListner = () => {
    this.listners.length && this.listners[0](this.alerts)
  }

  _subscribe = listener => {
    this.listners.push(listener)
  }

  _unsubscribe = listener => {
    this.listners = this.listners.filter(item => item !== listener)
  }
}

export default AlertContainer
