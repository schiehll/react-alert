import React from 'react';
import AlertContainer from 'react-alert';
import RaisedButton from 'material-ui/lib/raised-button';
import Colors from 'material-ui/lib/styles/colors';

class Home extends React.Component {
  constructor(props){
    super(props);
    this.alertOptions = {
      theme: 'dark'
    };
  }

  addAlert(){
    message.info('Some info message');
  }

  render(){
    return(
      <div>
        <AlertContainer ref={(a) => global.message = a} {...this.alertOptions} />
        <RaisedButton 
          label="SHOW ALERT"
          backgroundColor={Colors.deepPurple800}
          labelColor={Colors.grey50}
          onClick={this.addAlert.bind(this)} 
        />
      </div>
    );
  }
}

export default Home;