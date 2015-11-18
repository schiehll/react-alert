import React from 'react';
import AlertContainer from 'react-alert';

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
        <button onClick={this.addAlert}>Show Alert</button>
      </div>
    );
  }
}

export default Home;