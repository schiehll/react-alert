import React from 'react';
import EventEmitter from 'events';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import AlertMessage from './AlertMessage';

class AlertContainer extends React.Component {
  constructor(props){
    super(props);
    global.reactAlertEvents = new EventEmitter();
    this.state = {
      alerts: []
    };
    this.style = this._setStyle();
    this.theme = this._setTheme();
    this._eventListners();
  }
  /**
   * Show the alert in the page with success type
   * @param  {string} message 
   * @param  {Object} options 
   * @return {void}         
   */
  success(message, options = {}){
    options.type = 'success';
    this.show(message, options);
  }
  /**
   * Show the alert in the page with error type
   * @param  {string} message 
   * @param  {Object} options 
   * @return {void}
   */
  error(message, options = {}){
    options.type = 'error';
    this.show(message, options);
  }
  /**
   * Show the alert in the page with info type 
   * @param  {string} message
   * @param  {Object} options
   * @return {void}
   */
  info(message, options = {}){
    options.type = 'info';
    this.show(message, options);
  }
  /**
   * Show the alert in the page
   * @param  {string} message
   * @param  {Object} options
   * @return {void}
   */
  show(message, options = {}){
    let alert = {};
    alert.message = message;
    alert = Object.assign(alert, options);
    this.setState({alerts: this._addAlert(alert)});
  }
  /**
   * Remove all tasks from the page
   * @return {void}
   */
  removeAll(){
    this.setState({alerts: []});
  }
  /**
   * Add an alert
   * @param {Object} alert
   */
  _addAlert(alert){
    alert.uniqueKey = this._genUniqueKey();
    alert.style = this.theme;
    if(!alert.hasOwnProperty('time')){
      alert.time = this.props.time;
    };
    alert.closeIconClass = 'close-' + this.props.theme;
    this.state.alerts.push(alert);
    return this.state.alerts;
  }
  /**
   * Generate a key
   * @return {string}
   */
  _genUniqueKey(){
    return new Date().getTime().toString() + Math.random().toString(36).substr(2, 5);
  }
  /**
   * Remove an AlertMessage from the container
   * @param  {AlertMessage} alert
   * @return {void}
   */
  _removeAlert(alert){
    return this.state.alerts.filter((a) => {
      return a.uniqueKey != alert.props.uniqueKey;
    });
  }
  /**
   * Listen to alert events
   * @return {void}
   */
  _eventListners(){
    reactAlertEvents.on('ALERT.REMOVE', (alert) => {
      this.setState({alerts: this._removeAlert(alert)});
    });
  }
  /**
   * Set the alert position on the page
   */
  _setStyle(){
    let position = {};
    switch(this.props.position){
      case 'top left':
        position = {
          top: 0,
          right: 'auto',
          bottom: 'auto',
          left: 0
        }
        break;
      case 'top right':
        position = {
          top: 0,
          right: 0,
          bottom: 'auto',
          left: 'auto'
        }
        break;
      case 'bottom left':
        position = {
          top: 'auto',
          right: 'auto',
          bottom: 0,
          left: 0
        }
        break;
      default:
        position = {
          top: 'auto',
          right: 0,
          bottom: 0,
          left: 'auto'
        }
        break;
    }

    return {
      margin: this.props.offset + 'px',
      top: position.top,
      right: position.right,
      bottom: position.bottom,
      left: position.left,
    };
  }
  /**
   * Set the style of the alert based on the chosen theme
   */
  _setTheme(){
    let theme = {};
    switch(this.props.theme){
      case 'light':
        theme = {
          alert: {
            backgroundColor: '#fff',
            color: '#333'
          },
          closeButton: {
            bg: '#f3f3f3'
          }
        }
        break;
      default:
        theme = {
          alert: {
            backgroundColor: '#333',
            color: '#fff'
          },
          closeButton: {
            bg: '#444'
          }
        }
        break;
    }

    return theme;
  }

  componentDidUpdate(){
    this.style = this._setStyle();
    this.theme = this._setTheme();
  }

  render(){
    return(
      <div style={this.style} className="react-alerts">
        <ReactCSSTransitionGroup 
          transitionName={this.props.transition} 
          transitionEnterTimeout={250} 
          transitionLeaveTimeout={250}>
          {this.state.alerts.map((alert, index) => {
            return <AlertMessage key={alert.uniqueKey} {...alert} />
          })}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

AlertContainer.defaultProps = {
  offset: 14,
  position: 'bottom left',
  theme: 'dark',
  time: 5000,
  transition: 'scale'
}

AlertContainer.propTypes = {
  offset: React.PropTypes.number,
  position: React.PropTypes.oneOf([
    'bottom left', 
    'bottom right', 
    'top right',
    'top left',
  ]),
  theme: React.PropTypes.oneOf(['dark', 'light']),
  time: React.PropTypes.number,
  transition: React.PropTypes.oneOf(['scale', 'fade'])
}

export default AlertContainer;