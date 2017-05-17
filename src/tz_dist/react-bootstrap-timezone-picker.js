module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(4);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _reactDom = __webpack_require__(7);

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _FormControl = __webpack_require__(6);

	var _FormControl2 = _interopRequireDefault(_FormControl);

	var _timezones = __webpack_require__(2);

	var _timezones2 = _interopRequireDefault(_timezones);

	__webpack_require__(1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var UP_KEY = 38;
	var DOWN_KEY = 40;
	var ENTER_KEY = 13;
	var RETURN_KEY = 14;
	var ESCAPE_KEY = 27;

	var propTypes = {
	  absolute: _propTypes2.default.bool,
	  className: _propTypes2.default.string,
	  defaultValue: _propTypes2.default.any,
	  initialValue: _propTypes2.default.any,
	  onBlur: _propTypes2.default.func,
	  onChange: _propTypes2.default.func,
	  onFocus: _propTypes2.default.func,
	  onKeyDown: _propTypes2.default.func,
	  placeholder: _propTypes2.default.string,
	  timezones: _propTypes2.default.object,
	  style: _propTypes2.default.object,
	  value: _propTypes2.default.any
	};

	var defaultProps = {
	  absolute: true,
	  defaultValue: '',
	  initialValue: '',
	  placeholder: '',
	  onBlur: function onBlur() {},
	  onChange: function onChange() {},
	  onFocus: function onFocus() {},
	  onKeyDown: function onKeyDown() {},
	  overflow: false,
	  style: {},
	  timezones: _timezones2.default
	};

	var TimezonePicker = function (_React$Component) {
	  _inherits(TimezonePicker, _React$Component);

	  _createClass(TimezonePicker, null, [{
	    key: 'zoneCompare',
	    value: function zoneCompare(key, filter) {
	      return key.toLowerCase().indexOf(filter.toLowerCase().trim()) !== -1;
	    }
	  }]);

	  function TimezonePicker(props) {
	    _classCallCheck(this, TimezonePicker);

	    var _this = _possibleConstructorReturn(this, (TimezonePicker.__proto__ || Object.getPrototypeOf(TimezonePicker)).call(this, props));

	    _this.filterItems = _this.filterItems.bind(_this);
	    _this.getTimezone = _this.getTimezone.bind(_this);
	    _this.handleBlur = _this.handleBlur.bind(_this);
	    _this.handleFilterChange = _this.handleFilterChange.bind(_this);
	    _this.handleFocus = _this.handleFocus.bind(_this);
	    _this.handleKeyPress = _this.handleKeyPress.bind(_this);
	    _this.handleMouseEnter = _this.handleMouseEnter.bind(_this);
	    _this.handleSelect = _this.handleSelect.bind(_this);
	    _this.scrollToIndex = _this.scrollToIndex.bind(_this);

	    _this.state = {
	      focused: 0,
	      isOpen: false,
	      timezones: _this.props.timezones,
	      value: props.value || props.defaultValue || props.initialValue
	    };

	    _this.prevValue = _this.state.value;
	    return _this;
	  }

	  _createClass(TimezonePicker, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (nextProps.value !== this.props.value) {
	        var value = this.getTimezone(nextProps.value) || '';

	        this.setState({ value: value });
	      }
	    }
	  }, {
	    key: 'getTimezone',
	    value: function getTimezone(query) {
	      var _this2 = this;

	      if (!query) {
	        return null;
	      }

	      return Object.keys(this.props.timezones).find(function (zone) {
	        return zone === query || _this2.props.timezones[zone] === query;
	      });
	    }
	  }, {
	    key: 'filterItems',
	    value: function filterItems(filter) {
	      var _this3 = this;

	      var timezones = this.props.timezones;


	      if (filter.trim().length === 0) {
	        return timezones;
	      }

	      var filteredTimezones = {};

	      Object.keys(timezones).forEach(function (key) {
	        if (_this3.constructor.zoneCompare(key, filter) || _this3.constructor.zoneCompare(timezones[key], filter)) {
	          filteredTimezones[key] = timezones[key];
	        }
	      });

	      return filteredTimezones;
	    }
	  }, {
	    key: 'handleBlur',
	    value: function handleBlur() {
	      var tz = this.getTimezone(this.state.value);

	      if (tz === undefined) {
	        this.setState({ value: '', timezones: this.props.timezones });
	        if (this.prevValue) {
	          this.props.onChange('');
	          this.prevValue = '';
	        }
	      }

	      this.setState({ isOpen: false });

	      this.props.onBlur();
	    }
	  }, {
	    key: 'handleFilterChange',
	    value: function handleFilterChange(e) {
	      var timezones = this.filterItems(e.target.value);

	      this.setState({
	        focused: 0,
	        isOpen: Object.keys(timezones).length > 0,
	        value: e.target.value || '',
	        timezones: timezones
	      });
	    }
	  }, {
	    key: 'handleFocus',
	    value: function handleFocus(ev) {
	      var _this4 = this;

	      var _state = this.state,
	          value = _state.value,
	          timezones = _state.timezones;

	      if (ev) {
	        ev.target.select();
	      }

	      if (value) {
	        var keyz = Object.keys(timezones);

	        var _loop = function _loop(i) {
	          if (keyz[i] === value || timezones[keyz[i]] === value) {
	            _this4.setState({ isOpen: true, focused: i }, function () {
	              _this4.scrollToIndex(i);
	            });

	            _this4.props.onFocus(ev);

	            return {
	              v: void 0
	            };
	          }
	        };

	        for (var i = 0; i < keyz.length; ++i) {
	          var _ret = _loop(i);

	          if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	        }
	      }

	      this.setState({ isOpen: true });

	      this.props.onFocus();
	    }
	  }, {
	    key: 'handleKeyPress',
	    value: function handleKeyPress(e) {
	      var _state2 = this.state,
	          focused = _state2.focused,
	          timezones = _state2.timezones;


	      if (e.which === UP_KEY || e.which === DOWN_KEY) {
	        e.preventDefault();

	        var newFocused = void 0;

	        if (e.which === UP_KEY) {
	          newFocused = focused === 0 ? Object.keys(timezones).length - 1 : focused - 1;
	        } else {
	          newFocused = focused === Object.keys(timezones).length - 1 ? 0 : focused + 1;
	        }

	        this.setState({ focused: newFocused });

	        this.scrollToIndex(newFocused);
	      } else if (e.which === ENTER_KEY || e.which === RETURN_KEY) {
	        this.handleSelect(focused);
	      } else if (e.which === ESCAPE_KEY) {
	        (0, _reactDom.findDOMNode)(this.refInput).blur();
	        this.handleBlur();
	      }

	      this.props.onKeyDown(e);
	    }
	  }, {
	    key: 'handleMouseEnter',
	    value: function handleMouseEnter(idx, e) {
	      if (e.pageX !== this.mouseX || e.pageY !== this.mouseY) {
	        if (this.disableMouse) {
	          this.disableMouse = false;
	          this.mouseY = e.pageY;
	          return;
	        }

	        this.mouseX = e.pageX;
	        this.mouseY = e.pageY;
	        this.setState({ focused: idx });
	      }
	    }
	  }, {
	    key: 'handleSelect',
	    value: function handleSelect(index) {
	      var _this5 = this;

	      var timezones = this.state.timezones;


	      var key = Object.keys(timezones)[index] || '';
	      var value = timezones[key] || '';

	      if (this.prevValue !== value) {
	        this.prevValue = value;
	        this.props.onChange(value);
	      }

	      this.setState({
	        focused: 0,
	        isOpen: false,
	        timezones: this.props.timezones,
	        value: key
	      }, function () {
	        (0, _reactDom.findDOMNode)(_this5.refInput).blur();
	      });
	    }
	  }, {
	    key: 'scrollToIndex',
	    value: function scrollToIndex(idx) {
	      var index = Math.max(0, idx - 3);

	      this.disableMouse = true;
	      (0, _reactDom.findDOMNode)(this.list).scrollTop = this.list.children[index].offsetTop;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this6 = this;

	      var _state3 = this.state,
	          isOpen = _state3.isOpen,
	          value = _state3.value;

	      var _props = this.props,
	          absolute = _props.absolute,
	          className = _props.className,
	          placeholder = _props.placeholder,
	          style = _props.style,
	          restProps = _objectWithoutProperties(_props, ['absolute', 'className', 'placeholder', 'style']);

	      var rest = Object.assign({}, restProps);

	      ['defaultValue', 'initialValue', 'onBlur', 'onChange', 'onFocus', 'onKeyDown', 'timezones', 'value'].forEach(function (p) {
	        return delete rest[p];
	      });

	      var isSelected = !isOpen && value;
	      var containerClasses = (0, _classnames2.default)('timezone-picker', className, {
	        'timezone-picker-open': isOpen,
	        'timezone-picker-selected': isSelected
	      });

	      var listClass = (0, _classnames2.default)('timezone-picker-list', 'timezone-picker-list-' + (absolute ? 'abs' : 'rel'));

	      var timezones = Object.keys(this.state.timezones).map(function (zone, idx) {
	        var focused = _this6.state.focused === idx;

	        return _react2.default.createElement(
	          'li',
	          {
	            className: (0, _classnames2.default)('timezone-picker-list-item', { 'timezone-picker-list-item-active': focused }),
	            key: zone,
	            onMouseDown: function onMouseDown() {
	              _this6.handleSelect(idx);
	            },
	            onMouseEnter: function onMouseEnter(e) {
	              _this6.handleMouseEnter(idx, e);
	            },
	            onTouchStart: function onTouchStart() {
	              _this6.handleSelect(idx);
	            }
	          },
	          zone
	        );
	      });

	      return _react2.default.createElement(
	        'div',
	        { className: containerClasses, style: style },
	        _react2.default.createElement(
	          'div',
	          { className: 'timezone-picker-textfield' },
	          _react2.default.createElement(_FormControl2.default, _extends({
	            onBlur: this.handleBlur,
	            onChange: this.handleFilterChange,
	            onFocus: this.handleFocus,
	            onKeyDown: this.handleKeyPress,
	            placeholder: placeholder,
	            ref: function ref(c) {
	              _this6.refInput = c;
	            },
	            value: this.getTimezone(value) || value
	          }, rest)),
	          isOpen && _react2.default.createElement(
	            'ul',
	            { className: listClass, ref: function ref(c) {
	                _this6.list = c;
	              } },
	            timezones
	          )
	        )
	      );
	    }
	  }]);

	  return TimezonePicker;
	}(_react2.default.Component);

	TimezonePicker.propTypes = propTypes;
	TimezonePicker.defaultProps = defaultProps;

	exports.default = TimezonePicker;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = {
		"UTC": "UTC",
		"(UTC) Africa/Ouagadougou": "Africa/Ouagadougou",
		"(UTC) Atlantic/Faroe": "Atlantic/Faroe",
		"(UTC) Africa/Banjul": "Africa/Banjul",
		"(UTC) Africa/Accra": "Africa/Accra",
		"(UTC) America/Danmarkshavn": "America/Danmarkshavn",
		"(UTC) Europe/Guernsey": "Europe/Guernsey",
		"(UTC) Africa/Conakry": "Africa/Conakry",
		"(UTC) Africa/Bissau": "Africa/Bissau",
		"(UTC) Atlantic/Reykjavik": "Atlantic/Reykjavik",
		"(UTC) Europe/Dublin": "Europe/Dublin",
		"(UTC) Europe/Isle_of_Man": "Europe/Isle_of_Man",
		"(UTC) Africa/Abidjan": "Africa/Abidjan",
		"(UTC) Europe/Jersey": "Europe/Jersey",
		"(UTC) Africa/Monrovia": "Africa/Monrovia",
		"(UTC) Africa/Bamako": "Africa/Bamako",
		"(UTC) Africa/Nouakchott": "Africa/Nouakchott",
		"(UTC) Africa/Casablanca": "Africa/Casablanca",
		"(UTC) Atlantic/Madeira": "Atlantic/Madeira",
		"(UTC) Europe/Lisbon": "Europe/Lisbon",
		"(UTC) Atlantic/St_Helena": "Atlantic/St_Helena",
		"(UTC) Africa/Sao_Tome": "Africa/Sao_Tome",
		"(UTC) Africa/Dakar": "Africa/Dakar",
		"(UTC) Africa/Freetown": "Africa/Freetown",
		"(UTC) Atlantic/Canary": "Atlantic/Canary",
		"(UTC) Africa/Lome": "Africa/Lome",
		"(UTC) Europe/London": "Europe/London",
		"(UTC) Africa/El_Aaiun": "Africa/El_Aaiun",
		"(UTC -01:00) Atlantic/Cape_Verde": "Atlantic/Cape_Verde",
		"(UTC -01:00) America/Scoresbysund": "America/Scoresbysund",
		"(UTC -01:00) Atlantic/Azores": "Atlantic/Azores",
		"(UTC -02:00) America/Noronha": "America/Noronha",
		"(UTC -02:00) America/Sao_Paulo": "America/Sao_Paulo",
		"(UTC -02:00) Atlantic/South_Georgia": "Atlantic/South_Georgia",
		"(UTC -03:00) Antarctica/Palmer": "Antarctica/Palmer",
		"(UTC -03:00) Antarctica/Rothera": "Antarctica/Rothera",
		"(UTC -03:00) America/Argentina/Buenos_Aires": "America/Argentina/Buenos_Aires",
		"(UTC -03:00) America/Argentina/Catamarca": "America/Argentina/Catamarca",
		"(UTC -03:00) America/Argentina/Cordoba": "America/Argentina/Cordoba",
		"(UTC -03:00) America/Argentina/Jujuy": "America/Argentina/Jujuy",
		"(UTC -03:00) America/Argentina/La_Rioja": "America/Argentina/La_Rioja",
		"(UTC -03:00) America/Argentina/Mendoza": "America/Argentina/Mendoza",
		"(UTC -03:00) America/Argentina/Rio_Gallegos": "America/Argentina/Rio_Gallegos",
		"(UTC -03:00) America/Argentina/Salta": "America/Argentina/Salta",
		"(UTC -03:00) America/Argentina/San_Juan": "America/Argentina/San_Juan",
		"(UTC -03:00) America/Argentina/San_Luis": "America/Argentina/San_Luis",
		"(UTC -03:00) America/Argentina/Tucuman": "America/Argentina/Tucuman",
		"(UTC -03:00) America/Argentina/Ushuaia": "America/Argentina/Ushuaia",
		"(UTC -03:00) America/Araguaina": "America/Araguaina",
		"(UTC -03:00) America/Bahia": "America/Bahia",
		"(UTC -03:00) America/Belem": "America/Belem",
		"(UTC -03:00) America/Campo_Grande": "America/Campo_Grande",
		"(UTC -03:00) America/Cuiaba": "America/Cuiaba",
		"(UTC -03:00) America/Fortaleza": "America/Fortaleza",
		"(UTC -03:00) America/Maceio": "America/Maceio",
		"(UTC -03:00) America/Recife": "America/Recife",
		"(UTC -03:00) America/Santarem": "America/Santarem",
		"(UTC -03:00) America/Punta_Arenas": "America/Punta_Arenas",
		"(UTC -03:00) America/Santiago": "America/Santiago",
		"(UTC -03:00) Atlantic/Stanley": "Atlantic/Stanley",
		"(UTC -03:00) America/Cayenne": "America/Cayenne",
		"(UTC -03:00) America/Godthab": "America/Godthab",
		"(UTC -03:00) America/Asuncion": "America/Asuncion",
		"(UTC -03:00) America/Miquelon": "America/Miquelon",
		"(UTC -03:00) America/Paramaribo": "America/Paramaribo",
		"(UTC -03:00) America/Montevideo": "America/Montevideo",
		"(UTC -03:30) America/St_Johns": "America/St_Johns",
		"(UTC -04:00) America/Anguilla": "America/Anguilla",
		"(UTC -04:00) America/Antigua": "America/Antigua",
		"(UTC -04:00) America/Aruba": "America/Aruba",
		"(UTC -04:00) America/Barbados": "America/Barbados",
		"(UTC -04:00) Atlantic/Bermuda": "Atlantic/Bermuda",
		"(UTC -04:00) America/La_Paz": "America/La_Paz",
		"(UTC -04:00) America/Kralendijk": "America/Kralendijk",
		"(UTC -04:00) America/Boa_Vista": "America/Boa_Vista",
		"(UTC -04:00) America/Manaus": "America/Manaus",
		"(UTC -04:00) America/Porto_Velho": "America/Porto_Velho",
		"(UTC -04:00) America/Tortola": "America/Tortola",
		"(UTC -04:00) America/Blanc-Sablon": "America/Blanc-Sablon",
		"(UTC -04:00) America/Glace_Bay": "America/Glace_Bay",
		"(UTC -04:00) America/Goose_Bay": "America/Goose_Bay",
		"(UTC -04:00) America/Halifax": "America/Halifax",
		"(UTC -04:00) America/Moncton": "America/Moncton",
		"(UTC -04:00) America/Curacao": "America/Curacao",
		"(UTC -04:00) America/Dominica": "America/Dominica",
		"(UTC -04:00) America/Santo_Domingo": "America/Santo_Domingo",
		"(UTC -04:00) America/Thule": "America/Thule",
		"(UTC -04:00) America/Grenada": "America/Grenada",
		"(UTC -04:00) America/Guadeloupe": "America/Guadeloupe",
		"(UTC -04:00) America/Guyana": "America/Guyana",
		"(UTC -04:00) America/Martinique": "America/Martinique",
		"(UTC -04:00) America/Montserrat": "America/Montserrat",
		"(UTC -04:00) America/Puerto_Rico": "America/Puerto_Rico",
		"(UTC -04:00) America/St_Barthelemy": "America/St_Barthelemy",
		"(UTC -04:00) America/St_Kitts": "America/St_Kitts",
		"(UTC -04:00) America/St_Lucia": "America/St_Lucia",
		"(UTC -04:00) America/Marigot": "America/Marigot",
		"(UTC -04:00) America/St_Vincent": "America/St_Vincent",
		"(UTC -04:00) America/Lower_Princes": "America/Lower_Princes",
		"(UTC -04:00) America/Port_of_Spain": "America/Port_of_Spain",
		"(UTC -04:00) America/Grand_Turk": "America/Grand_Turk",
		"(UTC -04:00) America/St_Thomas": "America/St_Thomas",
		"(UTC -04:00) America/Caracas": "America/Caracas",
		"(UTC -05:00) America/Nassau": "America/Nassau",
		"(UTC -05:00) America/Eirunepe": "America/Eirunepe",
		"(UTC -05:00) America/Rio_Branco": "America/Rio_Branco",
		"(UTC -05:00) America/Atikokan": "America/Atikokan",
		"(UTC -05:00) America/Iqaluit": "America/Iqaluit",
		"(UTC -05:00) America/Nipigon": "America/Nipigon",
		"(UTC -05:00) America/Pangnirtung": "America/Pangnirtung",
		"(UTC -05:00) America/Thunder_Bay": "America/Thunder_Bay",
		"(UTC -05:00) America/Toronto": "America/Toronto",
		"(UTC -05:00) America/Cayman": "America/Cayman",
		"(UTC -05:00) Pacific/Easter": "Pacific/Easter",
		"(UTC -05:00) America/Bogota": "America/Bogota",
		"(UTC -05:00) America/Havana": "America/Havana",
		"(UTC -05:00) America/Guayaquil": "America/Guayaquil",
		"(UTC -05:00) America/Port-au-Prince": "America/Port-au-Prince",
		"(UTC -05:00) America/Jamaica": "America/Jamaica",
		"(UTC -05:00) America/Cancun": "America/Cancun",
		"(UTC -05:00) America/Panama": "America/Panama",
		"(UTC -05:00) America/Lima": "America/Lima",
		"(UTC -05:00) America/Detroit": "America/Detroit",
		"(UTC -05:00) America/Indiana/Indianapolis": "America/Indiana/Indianapolis",
		"(UTC -05:00) America/Indiana/Marengo": "America/Indiana/Marengo",
		"(UTC -05:00) America/Indiana/Petersburg": "America/Indiana/Petersburg",
		"(UTC -05:00) America/Indiana/Vevay": "America/Indiana/Vevay",
		"(UTC -05:00) America/Indiana/Vincennes": "America/Indiana/Vincennes",
		"(UTC -05:00) America/Indiana/Winamac": "America/Indiana/Winamac",
		"(UTC -05:00) America/Kentucky/Louisville": "America/Kentucky/Louisville",
		"(UTC -05:00) America/Kentucky/Monticello": "America/Kentucky/Monticello",
		"(UTC -05:00) America/New_York": "America/New_York",
		"(UTC -06:00) America/Belize": "America/Belize",
		"(UTC -06:00) America/Rainy_River": "America/Rainy_River",
		"(UTC -06:00) America/Rankin_Inlet": "America/Rankin_Inlet",
		"(UTC -06:00) America/Regina": "America/Regina",
		"(UTC -06:00) America/Resolute": "America/Resolute",
		"(UTC -06:00) America/Swift_Current": "America/Swift_Current",
		"(UTC -06:00) America/Winnipeg": "America/Winnipeg",
		"(UTC -06:00) America/Costa_Rica": "America/Costa_Rica",
		"(UTC -06:00) Pacific/Galapagos": "Pacific/Galapagos",
		"(UTC -06:00) America/El_Salvador": "America/El_Salvador",
		"(UTC -06:00) America/Guatemala": "America/Guatemala",
		"(UTC -06:00) America/Tegucigalpa": "America/Tegucigalpa",
		"(UTC -06:00) America/Bahia_Banderas": "America/Bahia_Banderas",
		"(UTC -06:00) America/Matamoros": "America/Matamoros",
		"(UTC -06:00) America/Merida": "America/Merida",
		"(UTC -06:00) America/Mexico_City": "America/Mexico_City",
		"(UTC -06:00) America/Monterrey": "America/Monterrey",
		"(UTC -06:00) America/Managua": "America/Managua",
		"(UTC -06:00) America/Chicago": "America/Chicago",
		"(UTC -06:00) America/Indiana/Knox": "America/Indiana/Knox",
		"(UTC -06:00) America/Indiana/Tell_City": "America/Indiana/Tell_City",
		"(UTC -06:00) America/Menominee": "America/Menominee",
		"(UTC -06:00) America/North_Dakota/Beulah": "America/North_Dakota/Beulah",
		"(UTC -06:00) America/North_Dakota/Center": "America/North_Dakota/Center",
		"(UTC -06:00) America/North_Dakota/New_Salem": "America/North_Dakota/New_Salem",
		"(UTC -07:00) America/Cambridge_Bay": "America/Cambridge_Bay",
		"(UTC -07:00) America/Creston": "America/Creston",
		"(UTC -07:00) America/Dawson_Creek": "America/Dawson_Creek",
		"(UTC -07:00) America/Edmonton": "America/Edmonton",
		"(UTC -07:00) America/Fort_Nelson": "America/Fort_Nelson",
		"(UTC -07:00) America/Inuvik": "America/Inuvik",
		"(UTC -07:00) America/Yellowknife": "America/Yellowknife",
		"(UTC -07:00) America/Chihuahua": "America/Chihuahua",
		"(UTC -07:00) America/Hermosillo": "America/Hermosillo",
		"(UTC -07:00) America/Mazatlan": "America/Mazatlan",
		"(UTC -07:00) America/Ojinaga": "America/Ojinaga",
		"(UTC -07:00) America/Boise": "America/Boise",
		"(UTC -07:00) America/Denver": "America/Denver",
		"(UTC -07:00) America/Phoenix": "America/Phoenix",
		"(UTC -08:00) America/Dawson": "America/Dawson",
		"(UTC -08:00) America/Vancouver": "America/Vancouver",
		"(UTC -08:00) America/Whitehorse": "America/Whitehorse",
		"(UTC -08:00) America/Tijuana": "America/Tijuana",
		"(UTC -08:00) Pacific/Pitcairn": "Pacific/Pitcairn",
		"(UTC -08:00) America/Los_Angeles": "America/Los_Angeles",
		"(UTC -09:00) Pacific/Gambier": "Pacific/Gambier",
		"(UTC -09:00) America/Anchorage": "America/Anchorage",
		"(UTC -09:00) America/Juneau": "America/Juneau",
		"(UTC -09:00) America/Metlakatla": "America/Metlakatla",
		"(UTC -09:00) America/Nome": "America/Nome",
		"(UTC -09:00) America/Sitka": "America/Sitka",
		"(UTC -09:00) America/Yakutat": "America/Yakutat",
		"(UTC -09:30) Pacific/Marquesas": "Pacific/Marquesas",
		"(UTC -10:00) Pacific/Rarotonga": "Pacific/Rarotonga",
		"(UTC -10:00) Pacific/Tahiti": "Pacific/Tahiti",
		"(UTC -10:00) America/Adak": "America/Adak",
		"(UTC -10:00) Pacific/Honolulu": "Pacific/Honolulu",
		"(UTC -11:00) Pacific/Pago_Pago": "Pacific/Pago_Pago",
		"(UTC -11:00) Pacific/Niue": "Pacific/Niue",
		"(UTC -11:00) Pacific/Midway": "Pacific/Midway",
		"(UTC +01:00) Europe/Tirane": "Europe/Tirane",
		"(UTC +01:00) Africa/Algiers": "Africa/Algiers",
		"(UTC +01:00) Europe/Andorra": "Europe/Andorra",
		"(UTC +01:00) Africa/Luanda": "Africa/Luanda",
		"(UTC +01:00) Europe/Vienna": "Europe/Vienna",
		"(UTC +01:00) Europe/Brussels": "Europe/Brussels",
		"(UTC +01:00) Africa/Porto-Novo": "Africa/Porto-Novo",
		"(UTC +01:00) Europe/Sarajevo": "Europe/Sarajevo",
		"(UTC +01:00) Africa/Douala": "Africa/Douala",
		"(UTC +01:00) Africa/Bangui": "Africa/Bangui",
		"(UTC +01:00) Africa/Ndjamena": "Africa/Ndjamena",
		"(UTC +01:00) Europe/Zagreb": "Europe/Zagreb",
		"(UTC +01:00) Europe/Prague": "Europe/Prague",
		"(UTC +01:00) Africa/Kinshasa": "Africa/Kinshasa",
		"(UTC +01:00) Europe/Copenhagen": "Europe/Copenhagen",
		"(UTC +01:00) Africa/Malabo": "Africa/Malabo",
		"(UTC +01:00) Europe/Paris": "Europe/Paris",
		"(UTC +01:00) Africa/Libreville": "Africa/Libreville",
		"(UTC +01:00) Europe/Berlin": "Europe/Berlin",
		"(UTC +01:00) Europe/Busingen": "Europe/Busingen",
		"(UTC +01:00) Europe/Gibraltar": "Europe/Gibraltar",
		"(UTC +01:00) Europe/Budapest": "Europe/Budapest",
		"(UTC +01:00) Europe/Rome": "Europe/Rome",
		"(UTC +01:00) Europe/Vaduz": "Europe/Vaduz",
		"(UTC +01:00) Europe/Luxembourg": "Europe/Luxembourg",
		"(UTC +01:00) Europe/Skopje": "Europe/Skopje",
		"(UTC +01:00) Europe/Malta": "Europe/Malta",
		"(UTC +01:00) Europe/Monaco": "Europe/Monaco",
		"(UTC +01:00) Europe/Podgorica": "Europe/Podgorica",
		"(UTC +01:00) Europe/Amsterdam": "Europe/Amsterdam",
		"(UTC +01:00) Africa/Niamey": "Africa/Niamey",
		"(UTC +01:00) Africa/Lagos": "Africa/Lagos",
		"(UTC +01:00) Europe/Oslo": "Europe/Oslo",
		"(UTC +01:00) Europe/Warsaw": "Europe/Warsaw",
		"(UTC +01:00) Africa/Brazzaville": "Africa/Brazzaville",
		"(UTC +01:00) Europe/San_Marino": "Europe/San_Marino",
		"(UTC +01:00) Europe/Belgrade": "Europe/Belgrade",
		"(UTC +01:00) Europe/Bratislava": "Europe/Bratislava",
		"(UTC +01:00) Europe/Ljubljana": "Europe/Ljubljana",
		"(UTC +01:00) Africa/Ceuta": "Africa/Ceuta",
		"(UTC +01:00) Europe/Madrid": "Europe/Madrid",
		"(UTC +01:00) Arctic/Longyearbyen": "Arctic/Longyearbyen",
		"(UTC +01:00) Europe/Stockholm": "Europe/Stockholm",
		"(UTC +01:00) Europe/Zurich": "Europe/Zurich",
		"(UTC +01:00) Africa/Tunis": "Africa/Tunis",
		"(UTC +01:00) Europe/Vatican": "Europe/Vatican",
		"(UTC +02:00) Europe/Mariehamn": "Europe/Mariehamn",
		"(UTC +02:00) Antarctica/Troll": "Antarctica/Troll",
		"(UTC +02:00) Africa/Gaborone": "Africa/Gaborone",
		"(UTC +02:00) Europe/Sofia": "Europe/Sofia",
		"(UTC +02:00) Africa/Bujumbura": "Africa/Bujumbura",
		"(UTC +02:00) Asia/Nicosia": "Asia/Nicosia",
		"(UTC +02:00) Africa/Lubumbashi": "Africa/Lubumbashi",
		"(UTC +02:00) Africa/Cairo": "Africa/Cairo",
		"(UTC +02:00) Europe/Tallinn": "Europe/Tallinn",
		"(UTC +02:00) Europe/Helsinki": "Europe/Helsinki",
		"(UTC +02:00) Europe/Athens": "Europe/Athens",
		"(UTC +02:00) Asia/Jerusalem": "Asia/Jerusalem",
		"(UTC +02:00) Asia/Amman": "Asia/Amman",
		"(UTC +02:00) Europe/Riga": "Europe/Riga",
		"(UTC +02:00) Asia/Beirut": "Asia/Beirut",
		"(UTC +02:00) Africa/Maseru": "Africa/Maseru",
		"(UTC +02:00) Africa/Tripoli": "Africa/Tripoli",
		"(UTC +02:00) Europe/Vilnius": "Europe/Vilnius",
		"(UTC +02:00) Africa/Blantyre": "Africa/Blantyre",
		"(UTC +02:00) Europe/Chisinau": "Europe/Chisinau",
		"(UTC +02:00) Africa/Maputo": "Africa/Maputo",
		"(UTC +02:00) Africa/Windhoek": "Africa/Windhoek",
		"(UTC +02:00) Asia/Gaza": "Asia/Gaza",
		"(UTC +02:00) Asia/Hebron": "Asia/Hebron",
		"(UTC +02:00) Europe/Bucharest": "Europe/Bucharest",
		"(UTC +02:00) Europe/Kaliningrad": "Europe/Kaliningrad",
		"(UTC +02:00) Africa/Kigali": "Africa/Kigali",
		"(UTC +02:00) Africa/Johannesburg": "Africa/Johannesburg",
		"(UTC +02:00) Africa/Mbabane": "Africa/Mbabane",
		"(UTC +02:00) Asia/Damascus": "Asia/Damascus",
		"(UTC +02:00) Europe/Kiev": "Europe/Kiev",
		"(UTC +02:00) Europe/Uzhgorod": "Europe/Uzhgorod",
		"(UTC +02:00) Europe/Zaporozhye": "Europe/Zaporozhye",
		"(UTC +02:00) Africa/Lusaka": "Africa/Lusaka",
		"(UTC +02:00) Africa/Harare": "Africa/Harare",
		"(UTC +03:00) Antarctica/Syowa": "Antarctica/Syowa",
		"(UTC +03:00) Europe/Minsk": "Europe/Minsk",
		"(UTC +03:00) Indian/Comoro": "Indian/Comoro",
		"(UTC +03:00) Asia/Famagusta": "Asia/Famagusta",
		"(UTC +03:00) Africa/Djibouti": "Africa/Djibouti",
		"(UTC +03:00) Africa/Asmara": "Africa/Asmara",
		"(UTC +03:00) Africa/Addis_Ababa": "Africa/Addis_Ababa",
		"(UTC +03:00) Asia/Baghdad": "Asia/Baghdad",
		"(UTC +03:00) Africa/Nairobi": "Africa/Nairobi",
		"(UTC +03:00) Asia/Kuwait": "Asia/Kuwait",
		"(UTC +03:00) Indian/Antananarivo": "Indian/Antananarivo",
		"(UTC +03:00) Indian/Mayotte": "Indian/Mayotte",
		"(UTC +03:00) Europe/Kirov": "Europe/Kirov",
		"(UTC +03:00) Europe/Moscow": "Europe/Moscow",
		"(UTC +03:00) Europe/Simferopol": "Europe/Simferopol",
		"(UTC +03:00) Europe/Volgograd": "Europe/Volgograd",
		"(UTC +03:00) Asia/Riyadh": "Asia/Riyadh",
		"(UTC +03:00) Africa/Mogadishu": "Africa/Mogadishu",
		"(UTC +03:00) Africa/Juba": "Africa/Juba",
		"(UTC +03:00) Africa/Khartoum": "Africa/Khartoum",
		"(UTC +03:00) Africa/Dar_es_Salaam": "Africa/Dar_es_Salaam",
		"(UTC +03:00) Europe/Istanbul": "Europe/Istanbul",
		"(UTC +03:00) Africa/Kampala": "Africa/Kampala",
		"(UTC +03:00) Asia/Aden": "Asia/Aden",
		"(UTC +03:30) Asia/Tehran": "Asia/Tehran",
		"(UTC +04:00) Asia/Yerevan": "Asia/Yerevan",
		"(UTC +04:00) Asia/Baku": "Asia/Baku",
		"(UTC +04:00) Asia/Bahrain": "Asia/Bahrain",
		"(UTC +04:00) Asia/Tbilisi": "Asia/Tbilisi",
		"(UTC +04:00) Indian/Mauritius": "Indian/Mauritius",
		"(UTC +04:00) Asia/Muscat": "Asia/Muscat",
		"(UTC +04:00) Asia/Qatar": "Asia/Qatar",
		"(UTC +04:00) Indian/Reunion": "Indian/Reunion",
		"(UTC +04:00) Europe/Astrakhan": "Europe/Astrakhan",
		"(UTC +04:00) Europe/Samara": "Europe/Samara",
		"(UTC +04:00) Europe/Saratov": "Europe/Saratov",
		"(UTC +04:00) Europe/Ulyanovsk": "Europe/Ulyanovsk",
		"(UTC +04:00) Indian/Mahe": "Indian/Mahe",
		"(UTC +04:00) Asia/Dubai": "Asia/Dubai",
		"(UTC +04:30) Asia/Kabul": "Asia/Kabul",
		"(UTC +05:00) Antarctica/Mawson": "Antarctica/Mawson",
		"(UTC +05:00) Indian/Kerguelen": "Indian/Kerguelen",
		"(UTC +05:00) Asia/Aqtau": "Asia/Aqtau",
		"(UTC +05:00) Asia/Aqtobe": "Asia/Aqtobe",
		"(UTC +05:00) Asia/Atyrau": "Asia/Atyrau",
		"(UTC +05:00) Asia/Oral": "Asia/Oral",
		"(UTC +05:00) Indian/Maldives": "Indian/Maldives",
		"(UTC +05:00) Asia/Karachi": "Asia/Karachi",
		"(UTC +05:00) Asia/Yekaterinburg": "Asia/Yekaterinburg",
		"(UTC +05:00) Asia/Dushanbe": "Asia/Dushanbe",
		"(UTC +05:00) Asia/Ashgabat": "Asia/Ashgabat",
		"(UTC +05:00) Asia/Samarkand": "Asia/Samarkand",
		"(UTC +05:00) Asia/Tashkent": "Asia/Tashkent",
		"(UTC +05:30) Asia/Kolkata": "Asia/Kolkata",
		"(UTC +05:30) Asia/Colombo": "Asia/Colombo",
		"(UTC +05:45) Asia/Kathmandu": "Asia/Kathmandu",
		"(UTC +06:00) Antarctica/Vostok": "Antarctica/Vostok",
		"(UTC +06:00) Asia/Dhaka": "Asia/Dhaka",
		"(UTC +06:00) Asia/Thimphu": "Asia/Thimphu",
		"(UTC +06:00) Indian/Chagos": "Indian/Chagos",
		"(UTC +06:00) Asia/Urumqi": "Asia/Urumqi",
		"(UTC +06:00) Asia/Almaty": "Asia/Almaty",
		"(UTC +06:00) Asia/Qyzylorda": "Asia/Qyzylorda",
		"(UTC +06:00) Asia/Bishkek": "Asia/Bishkek",
		"(UTC +06:00) Asia/Omsk": "Asia/Omsk",
		"(UTC +06:30) Indian/Cocos": "Indian/Cocos",
		"(UTC +06:30) Asia/Yangon": "Asia/Yangon",
		"(UTC +07:00) Antarctica/Davis": "Antarctica/Davis",
		"(UTC +07:00) Asia/Phnom_Penh": "Asia/Phnom_Penh",
		"(UTC +07:00) Indian/Christmas": "Indian/Christmas",
		"(UTC +07:00) Asia/Jakarta": "Asia/Jakarta",
		"(UTC +07:00) Asia/Pontianak": "Asia/Pontianak",
		"(UTC +07:00) Asia/Vientiane": "Asia/Vientiane",
		"(UTC +07:00) Asia/Hovd": "Asia/Hovd",
		"(UTC +07:00) Asia/Barnaul": "Asia/Barnaul",
		"(UTC +07:00) Asia/Krasnoyarsk": "Asia/Krasnoyarsk",
		"(UTC +07:00) Asia/Novokuznetsk": "Asia/Novokuznetsk",
		"(UTC +07:00) Asia/Novosibirsk": "Asia/Novosibirsk",
		"(UTC +07:00) Asia/Tomsk": "Asia/Tomsk",
		"(UTC +07:00) Asia/Bangkok": "Asia/Bangkok",
		"(UTC +07:00) Asia/Ho_Chi_Minh": "Asia/Ho_Chi_Minh",
		"(UTC +08:00) Australia/Perth": "Australia/Perth",
		"(UTC +08:00) Asia/Brunei": "Asia/Brunei",
		"(UTC +08:00) Asia/Shanghai": "Asia/Shanghai",
		"(UTC +08:00) Asia/Hong_Kong": "Asia/Hong_Kong",
		"(UTC +08:00) Asia/Makassar": "Asia/Makassar",
		"(UTC +08:00) Asia/Macau": "Asia/Macau",
		"(UTC +08:00) Asia/Kuala_Lumpur": "Asia/Kuala_Lumpur",
		"(UTC +08:00) Asia/Kuching": "Asia/Kuching",
		"(UTC +08:00) Asia/Choibalsan": "Asia/Choibalsan",
		"(UTC +08:00) Asia/Ulaanbaatar": "Asia/Ulaanbaatar",
		"(UTC +08:00) Asia/Manila": "Asia/Manila",
		"(UTC +08:00) Asia/Irkutsk": "Asia/Irkutsk",
		"(UTC +08:00) Asia/Singapore": "Asia/Singapore",
		"(UTC +08:00) Asia/Taipei": "Asia/Taipei",
		"(UTC +08:30) Asia/Pyongyang": "Asia/Pyongyang",
		"(UTC +08:45) Australia/Eucla": "Australia/Eucla",
		"(UTC +09:00) Asia/Dili": "Asia/Dili",
		"(UTC +09:00) Asia/Jayapura": "Asia/Jayapura",
		"(UTC +09:00) Asia/Tokyo": "Asia/Tokyo",
		"(UTC +09:00) Pacific/Palau": "Pacific/Palau",
		"(UTC +09:00) Asia/Chita": "Asia/Chita",
		"(UTC +09:00) Asia/Khandyga": "Asia/Khandyga",
		"(UTC +09:00) Asia/Yakutsk": "Asia/Yakutsk",
		"(UTC +09:00) Asia/Seoul": "Asia/Seoul",
		"(UTC +09:30) Australia/Darwin": "Australia/Darwin",
		"(UTC +10:00) Antarctica/DumontDUrville": "Antarctica/DumontDUrville",
		"(UTC +10:00) Australia/Brisbane": "Australia/Brisbane",
		"(UTC +10:00) Australia/Lindeman": "Australia/Lindeman",
		"(UTC +10:00) Pacific/Guam": "Pacific/Guam",
		"(UTC +10:00) Pacific/Chuuk": "Pacific/Chuuk",
		"(UTC +10:00) Pacific/Saipan": "Pacific/Saipan",
		"(UTC +10:00) Pacific/Port_Moresby": "Pacific/Port_Moresby",
		"(UTC +10:00) Asia/Ust-Nera": "Asia/Ust-Nera",
		"(UTC +10:00) Asia/Vladivostok": "Asia/Vladivostok",
		"(UTC +10:30) Australia/Adelaide": "Australia/Adelaide",
		"(UTC +10:30) Australia/Broken_Hill": "Australia/Broken_Hill",
		"(UTC +11:00) Antarctica/Casey": "Antarctica/Casey",
		"(UTC +11:00) Antarctica/Macquarie": "Antarctica/Macquarie",
		"(UTC +11:00) Australia/Currie": "Australia/Currie",
		"(UTC +11:00) Australia/Hobart": "Australia/Hobart",
		"(UTC +11:00) Australia/Lord_Howe": "Australia/Lord_Howe",
		"(UTC +11:00) Australia/Melbourne": "Australia/Melbourne",
		"(UTC +11:00) Australia/Sydney": "Australia/Sydney",
		"(UTC +11:00) Pacific/Kosrae": "Pacific/Kosrae",
		"(UTC +11:00) Pacific/Pohnpei": "Pacific/Pohnpei",
		"(UTC +11:00) Pacific/Noumea": "Pacific/Noumea",
		"(UTC +11:00) Pacific/Norfolk": "Pacific/Norfolk",
		"(UTC +11:00) Pacific/Bougainville": "Pacific/Bougainville",
		"(UTC +11:00) Asia/Magadan": "Asia/Magadan",
		"(UTC +11:00) Asia/Sakhalin": "Asia/Sakhalin",
		"(UTC +11:00) Asia/Srednekolymsk": "Asia/Srednekolymsk",
		"(UTC +11:00) Pacific/Guadalcanal": "Pacific/Guadalcanal",
		"(UTC +11:00) Pacific/Efate": "Pacific/Efate",
		"(UTC +12:00) Pacific/Tarawa": "Pacific/Tarawa",
		"(UTC +12:00) Pacific/Kwajalein": "Pacific/Kwajalein",
		"(UTC +12:00) Pacific/Majuro": "Pacific/Majuro",
		"(UTC +12:00) Pacific/Nauru": "Pacific/Nauru",
		"(UTC +12:00) Asia/Anadyr": "Asia/Anadyr",
		"(UTC +12:00) Asia/Kamchatka": "Asia/Kamchatka",
		"(UTC +12:00) Pacific/Funafuti": "Pacific/Funafuti",
		"(UTC +12:00) Pacific/Wake": "Pacific/Wake",
		"(UTC +12:00) Pacific/Wallis": "Pacific/Wallis",
		"(UTC +13:00) Antarctica/McMurdo": "Antarctica/McMurdo",
		"(UTC +13:00) Pacific/Fiji": "Pacific/Fiji",
		"(UTC +13:00) Pacific/Enderbury": "Pacific/Enderbury",
		"(UTC +13:00) Pacific/Auckland": "Pacific/Auckland",
		"(UTC +13:00) Pacific/Fakaofo": "Pacific/Fakaofo",
		"(UTC +13:45) Pacific/Chatham": "Pacific/Chatham",
		"(UTC +14:00) Pacific/Kiritimati": "Pacific/Kiritimati",
		"(UTC +14:00) Pacific/Apia": "Pacific/Apia",
		"(UTC +14:00) Pacific/Tongatapu": "Pacific/Tongatapu"
	};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = require("classnames");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports = require("prop-types");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	module.exports = require("react");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	module.exports = require("react-bootstrap/lib/FormControl");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	module.exports = require("react-dom");

/***/ })
/******/ ]);