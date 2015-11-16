import EventEmitter from 'events';
import path from 'path';

class Config {
  constructor(){
    this.globals();
  }

  globals(){
    global.events = new EventEmitter();
    global.paths = {
      img: path.join(__dirname, 'app/assets/img/')
    };
  }
}

export default Config;