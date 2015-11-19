'use strict';

import React from 'react';
import AlertContainer from 'react-alert';
import Colors from 'material-ui/lib/styles/colors';
import RaisedButton from 'material-ui/lib/raised-button';
import FlatButton from 'material-ui/lib/flat-button';
import DropDownMenu from 'material-ui/lib/drop-down-menu';
import Toolbar from 'material-ui/lib/toolbar/toolbar';
import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group';
import ToolbarSeparator from 'material-ui/lib/toolbar/toolbar-separator';
import FontIcon from 'material-ui/lib/font-icon';
//theme
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import MaterialUITheme from '../MaterialUITheme';

class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      alertOptions: {
        theme: 'light'
      }
    };
    this.themeOptions = [
      {payload: 'dark', text: 'DARK THEME'},
      {payload: 'light', text: 'LIGHT THEME'}
    ];
  }

  getChildContext() {
    return {
      muiTheme: ThemeManager.getMuiTheme(MaterialUITheme),
    };
  }

  addAlert(){
    message.info('Some info message');
  }

  handleThemeChange(event, selectedIndex, menuItem){
    this.setState({
      alertOptions: {
        theme: menuItem.payload
      }
    });
  }

  render(){
    return(
      <div>
        <AlertContainer ref={(a) => global.message = a} {...this.state.alertOptions} />
        <div className="react-alert-toolbar">
          <Toolbar>
            <ToolbarGroup key={0} float="left">
              <RaisedButton 
                style={{margin: '10px -10px'}} 
                primary={true} 
                label="react-alert" labelPosition="after"
                linkButton={true} href="https://github.com/schiehll/react-alert"
              >
                <FontIcon style={{margin: '5px 0 0 10px', float: 'left', color: Colors.fullWhite}} className="mdi mdi-github-circle" />
              </RaisedButton>
              <ToolbarSeparator />
              <DropDownMenu onChange={this.handleThemeChange.bind(this)} menuItems={this.themeOptions} />
              <RaisedButton 
                label="show alert"
                primary={true}
                onClick={this.addAlert.bind(this)} 
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