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
    message.show('mensagem de teste comprida em duas linhas mensagem de teste comprida em duas linhas', {
      time: 0,
      type: 'error'
    });
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