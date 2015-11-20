'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import AlertContainer from 'react-alert';
import Colors from 'material-ui/lib/styles/colors';
import RaisedButton from 'material-ui/lib/raised-button';
import FlatButton from 'material-ui/lib/flat-button';
import DropDownMenu from 'material-ui/lib/drop-down-menu';
import Toolbar from 'material-ui/lib/toolbar/toolbar';
import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group';
import ToolbarSeparator from 'material-ui/lib/toolbar/toolbar-separator';
import FontIcon from 'material-ui/lib/font-icon';
import TextField from 'material-ui/lib/text-field';
//theme
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import MaterialUITheme from '../MaterialUITheme';

class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      msgText: 'Some Cool Alert Message',
      type: 'info',
      alertOptions: {
        theme: 'dark',
        position: 'bottom left',
        transition: 'scale'
      }
    };

    this.themeOptions = [
      {payload: 'dark', text: 'DARK THEME'},
      {payload: 'light', text: 'LIGHT THEME'}
    ];

    this.positonOptions = [
      {payload: 'bottom left', text: 'BOTTOM LEFT'},
      {payload: 'top left', text: 'TOP LEFT'},
      {payload: 'top right', text: 'TOP RIGHT'},
      {payload: 'bottom right', text: 'BOTTOM RIGHT'}
    ];

    this.transitionOptions = [
      {payload: 'scale', text: 'SCALE'},
      {payload: 'fade', text: 'FADE'}
    ];

    this.typeOptions = [
      {payload: 'info', text: 'INFO'},
      {payload: 'success', text: 'SUCCESS'},
      {payload: 'error', text: 'ERROR'}
    ];

  }

  getChildContext() {
    return {
      muiTheme: ThemeManager.getMuiTheme(MaterialUITheme),
    };
  }

  addAlert(){
    message.show(this.state.msgText, {
      type: this.state.type
    });
  }

  removeAll(){
    message.removeAll();
  }

  handleThemeChange(event, selectedIndex, menuItem){
    this.setState({
      alertOptions: {
        theme: menuItem.payload,
        position: this.state.alertOptions.position,
        transition: this.state.alertOptions.transition
      }
    });
  }

  handlePositionChange(event, selectedIndex, menuItem){
    this.setState({
      alertOptions: {
        theme: this.state.alertOptions.theme,
        position: menuItem.payload,
        transition: this.state.alertOptions.transition
      }
    });
  }

  handleTransitionChange(event, selectedIndex, menuItem){
    this.setState({
      alertOptions: {
        theme: this.state.alertOptions.theme,
        position: this.state.alertOptions.position,
        transition: menuItem.payload
      }
    });
  }

  handleTypeChange(event, selectedIndex, menuItem){
    this.setState({
      type: menuItem.payload
    });
  }

  handleMessageChange(event){
    this.setState({
      msgText: event.target.value
    });
  }

  render(){
    return(
      <div>
        <AlertContainer ref={(msg) => global.message = msg} {...this.state.alertOptions} />
        <div className="react-alert-content">
          <div className="title">
            <FlatButton 
              style={{width: '100%'}}
              backgroundColor={Colors.deepPurple300}
              labelStyle={{color: Colors.grey50, fontSize: '20px', textTransform: 'lowercase'}}
              label="react-alert" labelPosition="after" 
              linkButton={true} href="https://github.com/schiehll/react-alert"
            >
              <FontIcon 
                style={{margin: '6px 0 0 14px', float: 'left'}}
                className="mdi mdi-github-circle" 
                color={Colors.grey50} 
              />
            </FlatButton>
          </div>
          <Toolbar>
            <ToolbarGroup key={0} float="left">
              <DropDownMenu
                style={{marginRight: '0'}}
                labelStyle={{color: Colors.grey50}}
                onChange={this.handleThemeChange.bind(this)} 
                menuItems={this.themeOptions} 
              />
              <DropDownMenu
                style={{marginRight: '0'}}
                labelStyle={{color: Colors.grey50}}
                onChange={this.handlePositionChange.bind(this)} 
                menuItems={this.positonOptions} 
              />
              <DropDownMenu
                style={{marginRight: '0'}}
                labelStyle={{color: Colors.grey50}}
                onChange={this.handleTransitionChange.bind(this)} 
                menuItems={this.transitionOptions} 
              />
              <RaisedButton 
                style={{margin: '10px 0 0 24px'}}
                label="show alert"
                primary={true}
                onClick={this.addAlert.bind(this)} 
              />
              <RaisedButton
                labelStyle={{color: Colors.grey50}}
                backgroundColor={Colors.red500}
                label="remove all"
                onClick={this.removeAll.bind(this)} 
              />
            </ToolbarGroup>
          </Toolbar>
          <Toolbar style={{backgroundColor: Colors.grey600}}>
            <ToolbarGroup key={1} float="left">
              <TextField
                value={this.state.msgText}
                onChange={this.handleMessageChange.bind(this)}
                underlineFocusStyle={{borderColor: Colors.grey50}}
                inputStyle={{textTransform: 'uppercase', color: Colors.grey50}}
                style={{height: '55px', width: '580px', marginLeft: '20px'}}
              />
              <DropDownMenu
                style={{marginRight: '0'}}
                labelStyle={{color: Colors.grey50}}
                onChange={this.handleTypeChange.bind(this)} 
                menuItems={this.typeOptions} 
              />
            </ToolbarGroup>
          </Toolbar>
        </div>
      </div>
    );
  }
}

Home.childContextTypes = {
  muiTheme: React.PropTypes.object
}

export default Home;