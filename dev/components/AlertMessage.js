import React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import {ALERT} from '../config/Events';

class AlertMessage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      closeButtonStyle: {}
    };
  }

  _handleCloseClick(){
    this._removeSelf();
  }

  _showIcon(){
    let icon = '';
    if(this.props.icon){
      icon = this.props.icon;
    }
    else{
      icon = <div className={this.props.type + '-icon'} />;
    }

    return icon;
  }

  _countdown(){
    setTimeout(() => {
      this._removeSelf();
    }, this.props.time);
  }

  _removeSelf(){
    events.emit(ALERT.REMOVE, this);
  }

  componentDidMount(){
    this.domNode = ReactDOM.findDOMNode(this);
    this.setState({
      closeButtonStyle: {
        height: this.domNode.offsetHeight + 'px',
        lineHeight: this.domNode.offsetHeight + 'px',
        backgroundColor: this.props.style.closeButton.bg
      }
    });

    if(this.props.time > 0){
      this._countdown();
    }
  }

  render(){
    return(
      <div style={this.props.style.alert} className={classnames('alert', this.props.type)}>
        <div className="content icon">
          {this._showIcon.bind(this)()}
        </div>
        <div className="content message">
          {this.props.message}
        </div>
        <div onClick={this._handleCloseClick.bind(this)} style={this.state.closeButtonStyle} className="content close">
          <div className={this.props.closeIconClass} />
        </div>
      </div>
    );
  }
} 

AlertMessage.defaultProps = {
  reactKey: '',
  icon: '',
  message: '',
  type: 'info'
}

AlertMessage.propTypes = {
  type: React.PropTypes.oneOf(['info', 'success', 'error'])
}

export default AlertMessage;