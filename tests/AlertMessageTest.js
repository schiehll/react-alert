jest.dontMock('../dev/components/AlertContainer');
jest.dontMock('../dev/components/AlertMessage');
jest.dontMock('events');
jest.dontMock('path');
var path = require('path');
var EventEmitter = require('events');
var TestUtils = require('react-addons-test-utils');
var React = require('react');
var AlertContainer = require('../dev/components/AlertContainer');
var AlertMessage = require('../dev/components/AlertMessage');

const shallowRenderer = TestUtils.createRenderer();

describe('AlertContainer', () => {
  beforeEach(() =>{
    global.events = new EventEmitter();
    global.paths = {
      img: path.join(__dirname, 'dev/assets/img/')
    };
  });

  describe('_countdown', () => {
    it('should remove it self after given time', () => {
      var alerts = TestUtils.renderIntoDocument(<AlertContainer />);
      alerts.show('test', {
        time: 200
      });

      expect(alerts.state.alerts.length).toBe(1);
      setTimeout(() => {
        expect(alerts.state.alerts.length).toBe(0);
      }, alerts.state.alerts[0].time);
    });

    it('should not remove it self if given time is 0', () => {
      var alerts = TestUtils.renderIntoDocument(<AlertContainer />);
      alerts.show('test', {
        time: 0
      });

      expect(alerts.state.alerts.length).toBe(1);
      setTimeout(() => {
        expect(alerts.state.alerts.length).toBe(1);
      }, alerts.state.alerts[0].time);
    });
  });
});