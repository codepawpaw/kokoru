'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

exports.setTranslateValue = setTranslateValue;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactEventListener = require('react-event-listener');

var _reactEventListener2 = _interopRequireDefault(_reactEventListener);

var _debounce = require('lodash/debounce');

var _debounce2 = _interopRequireDefault(_debounce);

var _Transition = require('../internal/Transition');

var _Transition2 = _interopRequireDefault(_Transition);

var _withTheme = require('../styles/withTheme');

var _withTheme2 = _interopRequireDefault(_withTheme);

var _transitions = require('../styles/transitions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var babelPluginFlowReactPropTypes_proptype_Element = require('react').babelPluginFlowReactPropTypes_proptype_Element || require('prop-types').any;

var babelPluginFlowReactPropTypes_proptype_TransitionCallback = require('../internal/Transition').babelPluginFlowReactPropTypes_proptype_TransitionCallback || require('prop-types').any;

var babelPluginFlowReactPropTypes_proptype_TransitionDuration = require('../internal/Transition').babelPluginFlowReactPropTypes_proptype_TransitionDuration || require('prop-types').any;

var GUTTER = 24;

// Translate the element so he can't be seen in the screen.
// Later, we gonna translate back the element to his original location
// with `translate3d(0, 0, 0)`.`
function getTranslateValue(props, element) {
  var direction = props.direction;

  var rect = element.getBoundingClientRect();

  var transform = void 0;

  if (element.fakeTransform) {
    transform = element.fakeTransform;
  } else {
    var computedStyle = window.getComputedStyle(element);
    transform = computedStyle.getPropertyValue('-webkit-transform') || computedStyle.getPropertyValue('transform');
  }

  var offsetX = 0;
  var offsetY = 0;

  if (transform && transform !== 'none' && typeof transform === 'string') {
    var transformValues = transform.split('(')[1].split(')')[0].split(',');
    offsetX = parseInt(transformValues[4], 10);
    offsetY = parseInt(transformValues[5], 10);
  }

  if (direction === 'left') {
    return 'translateX(100vw) translateX(-' + (rect.left - offsetX) + 'px)';
  } else if (direction === 'right') {
    return 'translateX(-' + (rect.left + rect.width + GUTTER) + 'px)';
  } else if (direction === 'up') {
    return 'translateY(100vh) translateY(-' + (rect.top - offsetY) + 'px)';
  }

  // direction === 'down
  return 'translate3d(0, ' + (0 - (rect.top + rect.height)) + 'px, 0)';
}

function setTranslateValue(props, element) {
  var transform = getTranslateValue(props, element);

  if (transform) {
    element.style.transform = transform;
    element.style.webkitTransform = transform;
  }
}

var babelPluginFlowReactPropTypes_proptype_Direction = require('prop-types').oneOf(['left', 'right', 'up', 'down']);

var babelPluginFlowReactPropTypes_proptype_Props = {
  children: typeof babelPluginFlowReactPropTypes_proptype_Element === 'function' ? babelPluginFlowReactPropTypes_proptype_Element : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_Element),
  direction: require('prop-types').oneOf(['left', 'right', 'up', 'down']),
  in: require('prop-types').bool,
  onEnter: typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback),
  onEntering: typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback),
  onEntered: typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback),
  onExit: typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback),
  onExiting: typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback),
  onExited: typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback),
  transitionDuration: typeof babelPluginFlowReactPropTypes_proptype_TransitionDuration === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionDuration : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionDuration),
  theme: require('prop-types').object
};

var Slide = function (_React$Component) {
  (0, _inherits3.default)(Slide, _React$Component);

  function Slide() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Slide);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Slide.__proto__ || (0, _getPrototypeOf2.default)(Slide)).call.apply(_ref, [this].concat(args))), _this), _this.transition = null, _this.handleResize = (0, _debounce2.default)(function () {
      // Skip configuration where the position is screen size invariant.
      if (_this.props.in || _this.props.direction === 'down' || _this.props.direction === 'right') {
        return;
      }

      var element = (0, _reactDom.findDOMNode)(_this.transition);
      if (element instanceof HTMLElement) {
        setTranslateValue(_this.props, element);
      }
    }, 166), _this.handleEnter = function (element) {
      // Reset the transformation when needed.
      // This is triggering a reflow.
      if (element.style.transform) {
        element.style.transform = 'translate3d(0, 0, 0)';
        element.style.webkitTransform = 'translate3d(0, 0, 0)';
      }
      setTranslateValue(_this.props, element);

      if (_this.props.onEnter) {
        _this.props.onEnter(element);
      }
    }, _this.handleEntering = function (element) {
      var _this$props = _this.props,
          theme = _this$props.theme,
          transitionDuration = _this$props.transitionDuration;

      element.style.transition = theme.transitions.create('transform', {
        duration: typeof transitionDuration === 'number' ? transitionDuration : transitionDuration.enter,
        easing: theme.transitions.easing.easeOut
      });
      element.style.webkitTransition = theme.transitions.create('-webkit-transform', {
        duration: typeof transitionDuration === 'number' ? transitionDuration : transitionDuration.enter,
        easing: theme.transitions.easing.easeOut
      });
      element.style.transform = 'translate3d(0, 0, 0)';
      element.style.webkitTransform = 'translate3d(0, 0, 0)';
      if (_this.props.onEntering) {
        _this.props.onEntering(element);
      }
    }, _this.handleExit = function (element) {
      var _this$props2 = _this.props,
          theme = _this$props2.theme,
          transitionDuration = _this$props2.transitionDuration;

      element.style.transition = theme.transitions.create('transform', {
        duration: typeof transitionDuration === 'number' ? transitionDuration : transitionDuration.exit,
        easing: theme.transitions.easing.sharp
      });
      element.style.webkitTransition = theme.transitions.create('-webkit-transform', {
        duration: typeof transitionDuration === 'number' ? transitionDuration : transitionDuration.exit,
        easing: theme.transitions.easing.sharp
      });
      setTranslateValue(_this.props, element);

      if (_this.props.onExit) {
        _this.props.onExit(element);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Slide, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (!this.props.in) {
        // We need to set initial translate values of transition element
        // otherwise component will be shown when in=false.
        var element = (0, _reactDom.findDOMNode)(this.transition);
        if (element instanceof HTMLElement) {
          setTranslateValue(this.props, element);
        }
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.handleResize.cancel();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          onEnter = _props.onEnter,
          onEntering = _props.onEntering,
          onExit = _props.onExit,
          transitionDuration = _props.transitionDuration,
          theme = _props.theme,
          other = (0, _objectWithoutProperties3.default)(_props, ['children', 'onEnter', 'onEntering', 'onExit', 'transitionDuration', 'theme']);


      return _react2.default.createElement(
        _reactEventListener2.default,
        { target: 'window', onResize: this.handleResize },
        _react2.default.createElement(
          _Transition2.default,
          (0, _extends3.default)({
            onEnter: this.handleEnter,
            onEntering: this.handleEntering,
            onExit: this.handleExit,
            timeout: transitionDuration,
            transitionAppear: true,
            ref: function ref(node) {
              _this2.transition = node;
            }
          }, other),
          children
        )
      );
    }
  }]);
  return Slide;
}(_react2.default.Component);

Slide.defaultProps = {
  direction: 'down',
  transitionDuration: {
    enter: _transitions.duration.enteringScreen,
    exit: _transitions.duration.leavingScreen
  }
};
exports.default = (0, _withTheme2.default)()(Slide);