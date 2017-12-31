class AlertContainer {
  listners = []
  alerts = []

  getAlerts = () => this.alerts

  add = alert => {
    this.alerts.push(alert)
    this.listners.forEach(listener => listener(this.alerts))
  }

  subscribe = listener => {
    this.listners.push(listener)
  }

  unsubscribe = listener => {
    this.listners = this.listners.filter(item => item !== listener)
  }
}

export default AlertContainer
