jest.dontMock('../dev/components/AlertContainer');
jest.dontMock('../dev/components/AlertMessage');
jest.dontMock('events');
jest.dontMock('path');
var path = require('path');
var EventEmitter = require('events');
var TestUtils = require('react-addons-test-utils');
var React = require('react');
var AlertContainer = require('../dev/components/AlertContainer');

const shallowRenderer = TestUtils.createRenderer();

describe('AlertContainer', () => {
  beforeEach(() =>{
    global.events = new EventEmitter();
    global.paths = {
      img: path.join(__dirname, 'dev/assets/img/')
    };
  });
  
  describe('render', () => {
    it('should render a div with react-alerts class', () => {
      shallowRenderer.render(<AlertContainer />);
      var result = shallowRenderer.getRenderOutput();
      expect(result.type).toBe('div');
      expect(result.props.className).toBe('react-alerts');
    });
  });

  describe('props', () => {
    it('should have the default props if none is given', () => {
      var alerts = TestUtils.renderIntoDocument(<AlertContainer />);
      expect(alerts.props).toEqual({
        offset: 14,
        position: 'bottom left',
        theme: 'dark',
        time: 5000,
        transition: 'scale'
      });
    });

    it('should have the props that was given', () => {
      var props = {
        offset: 10,
        position: 'top right',
        theme: 'light',
        time: 0,
        transition: 'fade'
      };
      var alerts = TestUtils.renderIntoDocument(<AlertContainer {...props} />);
      expect(alerts.props).toEqual(props);
    });
  });

  describe('show', () => {
    it('should add a alert to the alerts array', () => {
      var alerts = TestUtils.renderIntoDocument(<AlertContainer />);
      alerts.show('test');
      expect(alerts.state.alerts.length).toBe(1);
    });

    it('should receive the message', () => {
      var alerts = TestUtils.renderIntoDocument(<AlertContainer />);
      alerts.show('test');
      expect(alerts.state.alerts[0].message).toBe('test');
    });

    it('should receive options', () => {
      var alerts = TestUtils.renderIntoDocument(<AlertContainer />);
      var options = {
        icon: '*',
        time: 2000
      };
      alerts.show('test', options);
      expect(alerts.state.alerts[0].icon).toBe(options.icon);
      expect(alerts.state.alerts[0].time).toBe(options.time);
    });
  });

  describe('success', () => {
    it('should add a alert to the alerts array', () => {
      var alerts = TestUtils.renderIntoDocument(<AlertContainer />);
      alerts.success('test');
      expect(alerts.state.alerts.length).toBe(1);
    });

    it('should receive the message', () => {
      var alerts = TestUtils.renderIntoDocument(<AlertContainer />);
      alerts.success('test');
      expect(alerts.state.alerts[0].message).toBe('test');
    });

    it('should receive options', () => {
      var alerts = TestUtils.renderIntoDocument(<AlertContainer />);
      var options = {
        icon: '*',
        time: 2000
      };
      alerts.success('test', options);
      expect(alerts.state.alerts[0].icon).toBe(options.icon);
      expect(alerts.state.alerts[0].time).toBe(options.time);
    });
  });

  describe('error', () => {
    it('should add a alert to the alerts array', () => {
      var alerts = TestUtils.renderIntoDocument(<AlertContainer />);
      alerts.error('test');
      expect(alerts.state.alerts.length).toBe(1);
    });

    it('should receive the message', () => {
      var alerts = TestUtils.renderIntoDocument(<AlertContainer />);
      alerts.error('test');
      expect(alerts.state.alerts[0].message).toBe('test');
    });

    it('should receive options', () => {
      var alerts = TestUtils.renderIntoDocument(<AlertContainer />);
      var options = {
        icon: '*',
        time: 2000
      };
      alerts.error('test', options);
      expect(alerts.state.alerts[0].icon).toBe(options.icon);
      expect(alerts.state.alerts[0].time).toBe(options.time);
    });
  });

  describe('info', () => {
    it('should add a alert to the alerts array', () => {
      var alerts = TestUtils.renderIntoDocument(<AlertContainer />);
      alerts.info('test');
      expect(alerts.state.alerts.length).toBe(1);
    });

    it('should receive the message', () => {
      var alerts = TestUtils.renderIntoDocument(<AlertContainer />);
      alerts.info('test');
      expect(alerts.state.alerts[0].message).toBe('test');
    });

    it('should receive options', () => {
      var alerts = TestUtils.renderIntoDocument(<AlertContainer />);
      var options = {
        icon: '*',
        time: 2000
      };
      alerts.info('test', options);
      expect(alerts.state.alerts[0].icon).toBe(options.icon);
      expect(alerts.state.alerts[0].time).toBe(options.time);
    });
  });

  describe('removeAll', () => {
    it('should remove all alerts from the alerts array', () => {
      var alerts = TestUtils.renderIntoDocument(<AlertContainer />);
      alerts.show('test');
      alerts.removeAll();
      expect(alerts.state.alerts.length).toBe(0);
    });
  });
});