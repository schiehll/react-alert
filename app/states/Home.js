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

class Home extends React.Component {
  constructor(props){
    super(props);
    this.alertOptions = {
      theme: 'dark'
    };
    this.themeOptions = [
      {payload: 'dark', text: 'DARK THEME'},
      {payload: 'light', text: 'LIGHT THEME'}
    ];
  }

  addAlert(){
    message.info('Some info message');
  }

  render(){
    return(
      <div>
        <AlertContainer ref={(a) => global.message = a} {...this.alertOptions} />
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
              <DropDownMenu menuItems={this.themeOptions} />
              <RaisedButton 
                label="SHOW ALERT"
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

export default Home;