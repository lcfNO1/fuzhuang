webpackJsonp([3],{

/***/ 460:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.ItemList = exports.MenuBar = exports.BodyStyle = exports.Footer = exports.TitleBar = exports.Search = exports.Head = exports.testItems = exports.menuData = exports.colors = undefined;

	var _extends2 = __webpack_require__(461);

	var _extends3 = _interopRequireDefault(_extends2);

	var _getPrototypeOf = __webpack_require__(13);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(25);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(26);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(30);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(55);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _index = __webpack_require__(62);

	var _index2 = _interopRequireDefault(_index);

	var _index3 = __webpack_require__(225);

	var _index4 = _interopRequireDefault(_index3);

	var _react2 = __webpack_require__(63);

	var _react3 = _interopRequireDefault(_react2);

	var _index5 = __webpack_require__(226);

	var _index6 = _interopRequireDefault(_index5);

	var _class2, _class3, _class4, _class5, _class6;

	var _radium = __webpack_require__(411);

	var _radium2 = _interopRequireDefault(_radium);

	var _color = __webpack_require__(466);

	var _color2 = _interopRequireDefault(_color);

	var _reactRouter = __webpack_require__(354);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _components = {
		Head: {
			displayName: 'Head'
		},
		Search: {
			displayName: 'Search'
		},
		TitleBar: {
			displayName: 'TitleBar'
		},
		Footer: {
			displayName: 'Footer'
		},
		BodyStyle: {
			displayName: 'BodyStyle'
		},
		MenuLeft: {
			displayName: 'MenuLeft'
		},
		MenuBar: {
			displayName: 'MenuBar'
		},
		ItemPanel: {
			displayName: 'ItemPanel'
		},
		TipBar: {
			displayName: 'TipBar'
		},
		ItemList: {
			displayName: 'ItemList'
		}
	};

	var _homeToyDesktopFuFuzhuangNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
		filename: '/home/toy/Desktop/fu/fuzhuang/src/home/main.jsx',
		components: _components,
		locals: [module],
		imports: [_react3.default]
	});

	var _homeToyDesktopFuFuzhuangNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
		filename: '/home/toy/Desktop/fu/fuzhuang/src/home/main.jsx',
		components: _components,
		locals: [],
		imports: [_react3.default, _index2.default]
	});

	function _wrapComponent(id) {
		return function (Component) {
			return _homeToyDesktopFuFuzhuangNode_modulesReactTransformHmrLibIndexJs2(_homeToyDesktopFuFuzhuangNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
		};
	}

	var colors = {
		bg: (0, _color2.default)().rgb(246, 246, 246).hexString(),
		//primary:"green",
		primary: (0, _color2.default)().rgb(200, 22, 36).hexString(),
		line: "#DDD"
	};
	colors.secondary = (0, _color2.default)(colors.primary).darken(0.2).hexString();
	var menuData = [{ text: "首页", link: "/" }, { text: "批发市场", link: "#" }, { text: "每日新款", link: "#" }, { text: "款式搜索", link: "#" }];

	var z = { img: __webpack_require__(471), text: "潮流单品", price: 300, id: "233" };
	var testItems = [z, z, z, z, z, z, z, z, z, z];
	exports.colors = colors;
	exports.menuData = menuData;
	exports.testItems = testItems;

	var Head = exports.Head = _wrapComponent('Head')(function (_Component) {
		(0, _inherits3.default)(Head, _Component);

		function Head() {
			(0, _classCallCheck3.default)(this, Head);
			return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Head).apply(this, arguments));
		}

		(0, _createClass3.default)(Head, [{
			key: 'render',
			value: function render() {
				return _react3.default.createElement(
					'div',
					{ style: { background: colors.bg, borderBottom: "1px solid #CCC" } },
					_react3.default.createElement(
						'div',
						{ style: { width: 1200, height: 30, margin: "0 auto", lineHeight: "30px", fontSize: 14 } },
						_react3.default.createElement(
							'p',
							null,
							_react3.default.createElement(
								'span',
								{ style: { color: colors.primary } },
								'欢迎光临郑州第壹印象网络服装批发平台'
							)
						)
					)
				);
			}
		}]);
		return Head;
	}(_react2.Component));

	var Search = exports.Search = _wrapComponent('Search')(function (_Component2) {
		(0, _inherits3.default)(Search, _Component2);

		function Search() {
			var _Object$getPrototypeO;

			var _temp, _this2, _ret;

			(0, _classCallCheck3.default)(this, Search);

			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			return _ret = (_temp = (_this2 = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO = (0, _getPrototypeOf2.default)(Search)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this2), _this2.state = { value: "" }, _temp), (0, _possibleConstructorReturn3.default)(_this2, _ret);
		}

		(0, _createClass3.default)(Search, [{
			key: 'onSearch',
			value: function onSearch() {
				this.props.onSearch && this.props.onSearch(this.state.value);
				_reactRouter.browserHistory.push("/search.html?word=" + this.state.value);
			}
		}, {
			key: 'render',
			value: function render() {
				var _this3 = this;

				return _react3.default.createElement(
					'div',
					{ onKeyDown: function onKeyDown(event) {
							if (event.keyCode == 13) _this3.onSearch();
						}, style: { width: 606, height: 46, border: "3px solid " + colors.primary, display: "inline-block", background: "#fff", marginLeft: 120 } },
					_react3.default.createElement('input', { onKeyUp: function onKeyUp(e) {
							return _this3.setState({ value: e.target.value });
						}, placeholder: this.props.placeholder || "输入产品名称", style: { fontSize: 20, display: "inline", width: 470, marginLeft: 30, height: 40, verticalAlign: "middle", border: "none" } }),
					_react3.default.createElement(
						'button',
						{ onClick: this.onSearch.bind(this), style: { cursor: "pointer", display: "inline", width: 100, height: 40, verticalAlign: "middle", border: "none", background: colors.primary, color: "#fff", fontHeight: "bolder", fontSize: 20 } },
						_react3.default.createElement(
							'svg',
							{ style: { fill: "#fff", width: 20, height: 20, margin: "0 5px", verticalAlign: "middle" }, viewBox: '0 0 16 16' },
							_react3.default.createElement('path', { d: 'M15.504 13.616l-3.79-3.223c-0.392-0.353-0.811-0.514-1.149-0.499 0.895-1.048 1.435-2.407 1.435-3.893 0-3.314-2.686-6-6-6s-6 2.686-6 6 2.686 6 6 6c1.486 0 2.845-0.54 3.893-1.435-0.016 0.338 0.146 0.757 0.499 1.149l3.223 3.79c0.552 0.613 1.453 0.665 2.003 0.115s0.498-1.452-0.115-2.003zM6 10c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z' })
						),
						_react3.default.createElement(
							'span',
							null,
							'搜索'
						)
					)
				);
			}
		}]);
		return Search;
	}(_react2.Component));

	var TitleBar = exports.TitleBar = _wrapComponent('TitleBar')(function (_Component3) {
		(0, _inherits3.default)(TitleBar, _Component3);

		function TitleBar() {
			(0, _classCallCheck3.default)(this, TitleBar);
			return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(TitleBar).apply(this, arguments));
		}

		(0, _createClass3.default)(TitleBar, [{
			key: 'render',
			value: function render() {
				return _react3.default.createElement(
					'div',
					{ style: this.props.text ? { borderBottom: "2px solid " + colors.primary } : {} },
					_react3.default.createElement(
						'div',
						{ style: { width: 1200, height: 110, margin: "0 auto" } },
						_react3.default.createElement('span', { style: { height: "100%", display: "inline-block", verticalAlign: "middle" } }),
						_react3.default.createElement(
							_reactRouter.Link,
							{ to: '/' },
							_react3.default.createElement('img', { style: { verticalAlign: "middle", width: 100, height: 100, margin: "0 30px" }, src: __webpack_require__(471) })
						),
						this.props.text ? _react3.default.createElement(
							'span',
							{ style: { color: "#888", fontSize: 35, verticalAlign: "middle" } },
							this.props.children
						) : this.props.children
					)
				);
			}
		}]);
		return TitleBar;
	}(_react2.Component));

	var Footer = exports.Footer = _wrapComponent('Footer')((0, _radium2.default)(_class2 = function (_Component4) {
		(0, _inherits3.default)(Footer, _Component4);

		function Footer() {
			(0, _classCallCheck3.default)(this, Footer);
			return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Footer).apply(this, arguments));
		}

		(0, _createClass3.default)(Footer, [{
			key: 'render',
			value: function render() {
				return _react3.default.createElement(
					'div',
					{ style: [{ color: "#888", padding: 30, background: colors.bg, height: 140, borderTop: "1px solid " + colors.line, textAlign: "center" }, this.props.style] },
					_react3.default.createElement(
						'ul',
						{ style: { listStyle: "none", marginBottom: 20 } },
						_react3.default.createElement(
							_reactRouter.Link,
							{ to: '/' },
							_react3.default.createElement(
								'li',
								{ style: { display: "inline-block", fontSize: 14, padding: 10 } },
								'首页'
							)
						),
						["关于我们", "联系我们", "知识产权", "著作权与商标声明", "法律声明", "服务条款", "隐私声明"].map(function (it) {
							return _react3.default.createElement(
								_reactRouter.Link,
								{ to: '#' },
								_react3.default.createElement(
									'li',
									{ style: { display: "inline-block", fontSize: 14, padding: 10 } },
									it
								)
							);
						}),
						_react3.default.createElement(
							_reactRouter.Link,
							{ to: '/admin.html' },
							_react3.default.createElement(
								'li',
								{ style: { display: "inline-block", fontSize: 14, padding: 10 } },
								'后台管理'
							)
						)
					),
					_react3.default.createElement(
						'p',
						null,
						'Copyright © 2016-2020 www.zzwlpf.com 渝 ICP 备 00000000 号'
					)
				);
			}
		}]);
		return Footer;
	}(_react2.Component)) || _class2);

	var BodyStyle = exports.BodyStyle = _wrapComponent('BodyStyle')(function (_Component5) {
		(0, _inherits3.default)(BodyStyle, _Component5);

		function BodyStyle() {
			(0, _classCallCheck3.default)(this, BodyStyle);
			return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(BodyStyle).apply(this, arguments));
		}

		(0, _createClass3.default)(BodyStyle, [{
			key: 'render',
			value: function render() {
				return _react3.default.createElement(
					'style',
					null,
					'*{box-sizing:border-box;margin:0px;padding:0px}body{font-family:Microsoft YaHei,SimSun,Tahoma,Geneva,sans-serif ;min-width:1200px}a,a:link,a:visited{color:#555;text-decoration:none}a:hover{color:' + colors.primary + '}'
				);
			}
		}]);
		return BodyStyle;
	}(_react2.Component));

	var MenuLeft = _wrapComponent('MenuLeft')((0, _radium2.default)(_class3 = function (_Component6) {
		(0, _inherits3.default)(MenuLeft, _Component6);

		function MenuLeft() {
			(0, _classCallCheck3.default)(this, MenuLeft);
			return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(MenuLeft).apply(this, arguments));
		}

		(0, _createClass3.default)(MenuLeft, [{
			key: 'render',
			value: function render() {
				return _react3.default.createElement(
					'div',
					{ ref: 'box', style: [{ display: "inline-block", position: "relative", ":hover": {} }, this.props.style] },
					_react3.default.createElement(
						'div',
						{ style: { width: 180, textAlign: "center", float: "left", listStyle: "none", fontWeight: "bold", lineHeight: "35px", color: "#fff", fontSize: 16, background: colors.secondary } },
						'所有商品分类'
					),
					_react3.default.createElement(
						'div',
						{ style: { overflow: "hidden", transition: "all 0.5s", position: "absolute", left: 0, top: 35, zIndex: 4, width: 180, height: _radium2.default.getState(this.state, 'box', ':hover') || this.props.active ? 549 : 0, display: "inline-block", background: colors.bg, borderLeft: "1px solid " + colors.line, borderRight: "1px solid " + colors.line, borderBottom: "1px solid " + colors.line } },
						["精品男装", "淘款市场", "国际名流", "意法男装", "中纺服饰", "一号基地", "二号基地", "男衬衫", "品牌折扣", "外贸原单", "三号基地", "更多市场"].map(function (ii) {
							return _react3.default.createElement(
								'div',
								{ key: ii, style: { margin: "10px 0", height: 35, listStyle: "none" } },
								_react3.default.createElement(
									_reactRouter.Link,
									{ to: { pathname: "search.html", query: { word: ii } }, key: ii + ".child", style: { textAlign: "center", fontWeight: "normal", width: "100%", lineHeight: "35px", float: "left", color: "#000", ":hover": { color: colors.primary }, fontSize: 16 }, href: "/target/" + ii },
									ii
								)
							);
						})
					)
				);
			}
		}]);
		return MenuLeft;
	}(_react2.Component)) || _class3);

	var MenuBar = exports.MenuBar = _wrapComponent('MenuBar')((0, _radium2.default)(_class4 = function (_Component7) {
		(0, _inherits3.default)(MenuBar, _Component7);

		function MenuBar() {
			(0, _classCallCheck3.default)(this, MenuBar);
			return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(MenuBar).apply(this, arguments));
		}

		(0, _createClass3.default)(MenuBar, [{
			key: 'render',
			value: function render() {
				return _react3.default.createElement(
					'div',
					{ style: { background: colors.primary } },
					_react3.default.createElement(
						'div',
						{ style: { width: 1200, height: 35, margin: "0 auto" } },
						_react3.default.createElement(MenuLeft, { active: this.props.active, style: { marginRight: 100, float: "left" } }),
						(this.props.data || []).map(function (it, i) {
							return _react3.default.createElement(
								'div',
								{ key: i, style: { height: 35, float: "left", listStyle: "none", ":hover": { background: colors.secondary } } },
								_react3.default.createElement(
									_reactRouter.Link,
									{ to: it.link, style: { fontWeight: "bold", float: "left", lineHeight: "35px", color: "#fff", padding: "0px 15px", fontSize: 16 } },
									it.text
								)
							);
						})
					)
				);
			}
		}]);
		return MenuBar;
	}(_react2.Component)) || _class4);

	var ItemPanel = _wrapComponent('ItemPanel')((0, _radium2.default)(_class5 = function (_Component8) {
		(0, _inherits3.default)(ItemPanel, _Component8);

		function ItemPanel() {
			(0, _classCallCheck3.default)(this, ItemPanel);
			return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(ItemPanel).apply(this, arguments));
		}

		(0, _createClass3.default)(ItemPanel, [{
			key: 'render',
			value: function render() {
				return _react3.default.createElement(
					'div',
					{ style: { padding: 10, float: "left", width: 222, margin: "0 20px 20px 0", height: 300, border: "1px solid " + colors.line } },
					_react3.default.createElement(
						_reactRouter.Link,
						{ to: { pathname: "/item.html", query: { id: this.props.id } } },
						_react3.default.createElement(
							'div',
							{ style: { marginBottom: 10, height: 200, position: "relative" } },
							_react3.default.createElement('img', { src: this.props.img, style: { maxWidth: "100%", maxHeight: "100%", position: "absolute", top: 0, bottom: 0, left: 0, right: 0, margin: "auto" } })
						)
					),
					_react3.default.createElement(
						_reactRouter.Link,
						{ to: { pathname: "/item.html", query: { id: this.props.id } } },
						_react3.default.createElement(
							'div',
							{ style: { overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } },
							this.props.text
						)
					),
					_react3.default.createElement(
						'p',
						{ style: { overflow: "hidden", textOverflow: "ellipsis", color: colors.primary } },
						_react3.default.createElement(
							'b',
							null,
							'￥'
						),
						_react3.default.createElement(
							'span',
							null,
							this.props.price
						)
					)
				);
			}
		}]);
		return ItemPanel;
	}(_react2.Component)) || _class5);

	var TipBar = _wrapComponent('TipBar')(function (_Component9) {
		(0, _inherits3.default)(TipBar, _Component9);

		function TipBar() {
			(0, _classCallCheck3.default)(this, TipBar);
			return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(TipBar).apply(this, arguments));
		}

		(0, _createClass3.default)(TipBar, [{
			key: 'render',
			value: function render() {
				return _react3.default.createElement(
					'div',
					{ style: { borderBottom: "2px solid " + colors.primary, marginBottom: 20 } },
					_react3.default.createElement(
						'strong',
						{ style: { display: "inline-block", padding: "0 20px", height: 23, background: colors.primary, lineHeight: "23px", fontSize: 14, color: "#fff", textAlign: "center" } },
						this.props.title || "#"
					)
				);
			}
		}]);
		return TipBar;
	}(_react2.Component));

	var ItemList = exports.ItemList = _wrapComponent('ItemList')((0, _radium2.default)(_class6 = function (_Component10) {
		(0, _inherits3.default)(ItemList, _Component10);

		function ItemList() {
			(0, _classCallCheck3.default)(this, ItemList);
			return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(ItemList).apply(this, arguments));
		}

		(0, _createClass3.default)(ItemList, [{
			key: 'render',
			value: function render() {
				return _react3.default.createElement(
					'div',
					{ style: [{ width: 1200, margin: "0 auto" }, this.props.style] },
					this.props.title ? _react3.default.createElement(TipBar, { title: this.props.title }) : null,
					_react3.default.createElement(
						'div',
						{ style: { width: 1220 } },
						(this.props.data || []).map(function (it, index) {
							return _react3.default.createElement(ItemPanel, (0, _extends3.default)({ key: index }, it));
						})
					),
					_react3.default.createElement('div', { style: { clear: "both" } })
				);
			}
		}]);
		return ItemList;
	}(_react2.Component)) || _class6);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ },

/***/ 461:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Object$assign = __webpack_require__(462)["default"];

	exports["default"] = _Object$assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];

	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }

	  return target;
	};

	exports.__esModule = true;

/***/ },

/***/ 462:
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(463), __esModule: true };

/***/ },

/***/ 463:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(464);
	module.exports = __webpack_require__(21).Object.assign;

/***/ },

/***/ 464:
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(19);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(465)});

/***/ },

/***/ 465:
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.1 Object.assign(target, source, ...)
	var $        = __webpack_require__(29)
	  , toObject = __webpack_require__(16)
	  , IObject  = __webpack_require__(46);

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = __webpack_require__(24)(function(){
	  var a = Object.assign
	    , A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return a({}, A)[S] != 7 || Object.keys(a({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , $$    = arguments
	    , $$len = $$.length
	    , index = 1
	    , getKeys    = $.getKeys
	    , getSymbols = $.getSymbols
	    , isEnum     = $.isEnum;
	  while($$len > index){
	    var S      = IObject($$[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  }
	  return T;
	} : Object.assign;

/***/ },

/***/ 466:
/***/ function(module, exports, __webpack_require__) {

	/* MIT license */
	var convert = __webpack_require__(467);
	var string = __webpack_require__(469);

	var Color = function (obj) {
		if (obj instanceof Color) {
			return obj;
		}
		if (!(this instanceof Color)) {
			return new Color(obj);
		}

		this.values = {
			rgb: [0, 0, 0],
			hsl: [0, 0, 0],
			hsv: [0, 0, 0],
			hwb: [0, 0, 0],
			cmyk: [0, 0, 0, 0],
			alpha: 1
		};

		// parse Color() argument
		var vals;
		if (typeof obj === 'string') {
			vals = string.getRgba(obj);
			if (vals) {
				this.setValues('rgb', vals);
			} else if (vals = string.getHsla(obj)) {
				this.setValues('hsl', vals);
			} else if (vals = string.getHwb(obj)) {
				this.setValues('hwb', vals);
			} else {
				throw new Error('Unable to parse color from string "' + obj + '"');
			}
		} else if (typeof obj === 'object') {
			vals = obj;
			if (vals.r !== undefined || vals.red !== undefined) {
				this.setValues('rgb', vals);
			} else if (vals.l !== undefined || vals.lightness !== undefined) {
				this.setValues('hsl', vals);
			} else if (vals.v !== undefined || vals.value !== undefined) {
				this.setValues('hsv', vals);
			} else if (vals.w !== undefined || vals.whiteness !== undefined) {
				this.setValues('hwb', vals);
			} else if (vals.c !== undefined || vals.cyan !== undefined) {
				this.setValues('cmyk', vals);
			} else {
				throw new Error('Unable to parse color from object ' + JSON.stringify(obj));
			}
		}
	};

	Color.prototype = {
		rgb: function () {
			return this.setSpace('rgb', arguments);
		},
		hsl: function () {
			return this.setSpace('hsl', arguments);
		},
		hsv: function () {
			return this.setSpace('hsv', arguments);
		},
		hwb: function () {
			return this.setSpace('hwb', arguments);
		},
		cmyk: function () {
			return this.setSpace('cmyk', arguments);
		},

		rgbArray: function () {
			return this.values.rgb;
		},
		hslArray: function () {
			return this.values.hsl;
		},
		hsvArray: function () {
			return this.values.hsv;
		},
		hwbArray: function () {
			if (this.values.alpha !== 1) {
				return this.values.hwb.concat([this.values.alpha]);
			}
			return this.values.hwb;
		},
		cmykArray: function () {
			return this.values.cmyk;
		},
		rgbaArray: function () {
			var rgb = this.values.rgb;
			return rgb.concat([this.values.alpha]);
		},
		hslaArray: function () {
			var hsl = this.values.hsl;
			return hsl.concat([this.values.alpha]);
		},
		alpha: function (val) {
			if (val === undefined) {
				return this.values.alpha;
			}
			this.setValues('alpha', val);
			return this;
		},

		red: function (val) {
			return this.setChannel('rgb', 0, val);
		},
		green: function (val) {
			return this.setChannel('rgb', 1, val);
		},
		blue: function (val) {
			return this.setChannel('rgb', 2, val);
		},
		hue: function (val) {
			if (val) {
				val %= 360;
				val = val < 0 ? 360 + val : val;
			}
			return this.setChannel('hsl', 0, val);
		},
		saturation: function (val) {
			return this.setChannel('hsl', 1, val);
		},
		lightness: function (val) {
			return this.setChannel('hsl', 2, val);
		},
		saturationv: function (val) {
			return this.setChannel('hsv', 1, val);
		},
		whiteness: function (val) {
			return this.setChannel('hwb', 1, val);
		},
		blackness: function (val) {
			return this.setChannel('hwb', 2, val);
		},
		value: function (val) {
			return this.setChannel('hsv', 2, val);
		},
		cyan: function (val) {
			return this.setChannel('cmyk', 0, val);
		},
		magenta: function (val) {
			return this.setChannel('cmyk', 1, val);
		},
		yellow: function (val) {
			return this.setChannel('cmyk', 2, val);
		},
		black: function (val) {
			return this.setChannel('cmyk', 3, val);
		},

		hexString: function () {
			return string.hexString(this.values.rgb);
		},
		rgbString: function () {
			return string.rgbString(this.values.rgb, this.values.alpha);
		},
		rgbaString: function () {
			return string.rgbaString(this.values.rgb, this.values.alpha);
		},
		percentString: function () {
			return string.percentString(this.values.rgb, this.values.alpha);
		},
		hslString: function () {
			return string.hslString(this.values.hsl, this.values.alpha);
		},
		hslaString: function () {
			return string.hslaString(this.values.hsl, this.values.alpha);
		},
		hwbString: function () {
			return string.hwbString(this.values.hwb, this.values.alpha);
		},
		keyword: function () {
			return string.keyword(this.values.rgb, this.values.alpha);
		},

		rgbNumber: function () {
			return (this.values.rgb[0] << 16) | (this.values.rgb[1] << 8) | this.values.rgb[2];
		},

		luminosity: function () {
			// http://www.w3.org/TR/WCAG20/#relativeluminancedef
			var rgb = this.values.rgb;
			var lum = [];
			for (var i = 0; i < rgb.length; i++) {
				var chan = rgb[i] / 255;
				lum[i] = (chan <= 0.03928) ? chan / 12.92 : Math.pow(((chan + 0.055) / 1.055), 2.4);
			}
			return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
		},

		contrast: function (color2) {
			// http://www.w3.org/TR/WCAG20/#contrast-ratiodef
			var lum1 = this.luminosity();
			var lum2 = color2.luminosity();
			if (lum1 > lum2) {
				return (lum1 + 0.05) / (lum2 + 0.05);
			}
			return (lum2 + 0.05) / (lum1 + 0.05);
		},

		level: function (color2) {
			var contrastRatio = this.contrast(color2);
			if (contrastRatio >= 7.1) {
				return 'AAA';
			}

			return (contrastRatio >= 4.5) ? 'AA' : '';
		},

		dark: function () {
			// YIQ equation from http://24ways.org/2010/calculating-color-contrast
			var rgb = this.values.rgb;
			var yiq = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
			return yiq < 128;
		},

		light: function () {
			return !this.dark();
		},

		negate: function () {
			var rgb = [];
			for (var i = 0; i < 3; i++) {
				rgb[i] = 255 - this.values.rgb[i];
			}
			this.setValues('rgb', rgb);
			return this;
		},

		lighten: function (ratio) {
			this.values.hsl[2] += this.values.hsl[2] * ratio;
			this.setValues('hsl', this.values.hsl);
			return this;
		},

		darken: function (ratio) {
			this.values.hsl[2] -= this.values.hsl[2] * ratio;
			this.setValues('hsl', this.values.hsl);
			return this;
		},

		saturate: function (ratio) {
			this.values.hsl[1] += this.values.hsl[1] * ratio;
			this.setValues('hsl', this.values.hsl);
			return this;
		},

		desaturate: function (ratio) {
			this.values.hsl[1] -= this.values.hsl[1] * ratio;
			this.setValues('hsl', this.values.hsl);
			return this;
		},

		whiten: function (ratio) {
			this.values.hwb[1] += this.values.hwb[1] * ratio;
			this.setValues('hwb', this.values.hwb);
			return this;
		},

		blacken: function (ratio) {
			this.values.hwb[2] += this.values.hwb[2] * ratio;
			this.setValues('hwb', this.values.hwb);
			return this;
		},

		greyscale: function () {
			var rgb = this.values.rgb;
			// http://en.wikipedia.org/wiki/Grayscale#Converting_color_to_grayscale
			var val = rgb[0] * 0.3 + rgb[1] * 0.59 + rgb[2] * 0.11;
			this.setValues('rgb', [val, val, val]);
			return this;
		},

		clearer: function (ratio) {
			this.setValues('alpha', this.values.alpha - (this.values.alpha * ratio));
			return this;
		},

		opaquer: function (ratio) {
			this.setValues('alpha', this.values.alpha + (this.values.alpha * ratio));
			return this;
		},

		rotate: function (degrees) {
			var hue = this.values.hsl[0];
			hue = (hue + degrees) % 360;
			hue = hue < 0 ? 360 + hue : hue;
			this.values.hsl[0] = hue;
			this.setValues('hsl', this.values.hsl);
			return this;
		},

		/**
		 * Ported from sass implementation in C
		 * https://github.com/sass/libsass/blob/0e6b4a2850092356aa3ece07c6b249f0221caced/functions.cpp#L209
		 */
		mix: function (mixinColor, weight) {
			var color1 = this;
			var color2 = mixinColor;
			var p = weight === undefined ? 0.5 : weight;

			var w = 2 * p - 1;
			var a = color1.alpha() - color2.alpha();

			var w1 = (((w * a === -1) ? w : (w + a) / (1 + w * a)) + 1) / 2.0;
			var w2 = 1 - w1;

			return this
				.rgb(
					w1 * color1.red() + w2 * color2.red(),
					w1 * color1.green() + w2 * color2.green(),
					w1 * color1.blue() + w2 * color2.blue()
				)
				.alpha(color1.alpha() * p + color2.alpha() * (1 - p));
		},

		toJSON: function () {
			return this.rgb();
		},

		clone: function () {
			return new Color(this.rgb());
		}
	};

	Color.prototype.getValues = function (space) {
		var vals = {};

		for (var i = 0; i < space.length; i++) {
			vals[space.charAt(i)] = this.values[space][i];
		}

		if (this.values.alpha !== 1) {
			vals.a = this.values.alpha;
		}

		// {r: 255, g: 255, b: 255, a: 0.4}
		return vals;
	};

	Color.prototype.setValues = function (space, vals) {
		var spaces = {
			rgb: ['red', 'green', 'blue'],
			hsl: ['hue', 'saturation', 'lightness'],
			hsv: ['hue', 'saturation', 'value'],
			hwb: ['hue', 'whiteness', 'blackness'],
			cmyk: ['cyan', 'magenta', 'yellow', 'black']
		};

		var maxes = {
			rgb: [255, 255, 255],
			hsl: [360, 100, 100],
			hsv: [360, 100, 100],
			hwb: [360, 100, 100],
			cmyk: [100, 100, 100, 100]
		};

		var i;
		var alpha = 1;
		if (space === 'alpha') {
			alpha = vals;
		} else if (vals.length) {
			// [10, 10, 10]
			this.values[space] = vals.slice(0, space.length);
			alpha = vals[space.length];
		} else if (vals[space.charAt(0)] !== undefined) {
			// {r: 10, g: 10, b: 10}
			for (i = 0; i < space.length; i++) {
				this.values[space][i] = vals[space.charAt(i)];
			}

			alpha = vals.a;
		} else if (vals[spaces[space][0]] !== undefined) {
			// {red: 10, green: 10, blue: 10}
			var chans = spaces[space];

			for (i = 0; i < space.length; i++) {
				this.values[space][i] = vals[chans[i]];
			}

			alpha = vals.alpha;
		}

		this.values.alpha = Math.max(0, Math.min(1, (alpha === undefined ? this.values.alpha : alpha)));

		if (space === 'alpha') {
			return false;
		}

		var capped;

		// cap values of the space prior converting all values
		for (i = 0; i < space.length; i++) {
			capped = Math.max(0, Math.min(maxes[space][i], this.values[space][i]));
			this.values[space][i] = Math.round(capped);
		}

		// convert to all the other color spaces
		for (var sname in spaces) {
			if (sname !== space) {
				this.values[sname] = convert[space][sname](this.values[space]);
			}

			// cap values
			for (i = 0; i < sname.length; i++) {
				capped = Math.max(0, Math.min(maxes[sname][i], this.values[sname][i]));
				this.values[sname][i] = Math.round(capped);
			}
		}

		return true;
	};

	Color.prototype.setSpace = function (space, args) {
		var vals = args[0];

		if (vals === undefined) {
			// color.rgb()
			return this.getValues(space);
		}

		// color.rgb(10, 10, 10)
		if (typeof vals === 'number') {
			vals = Array.prototype.slice.call(args);
		}

		this.setValues(space, vals);
		return this;
	};

	Color.prototype.setChannel = function (space, index, val) {
		if (val === undefined) {
			// color.red()
			return this.values[space][index];
		} else if (val === this.values[space][index]) {
			// color.red(color.red())
			return this;
		}

		// color.red(100)
		this.values[space][index] = val;
		this.setValues(space, this.values[space]);

		return this;
	};

	module.exports = Color;


/***/ },

/***/ 467:
/***/ function(module, exports, __webpack_require__) {

	var conversions = __webpack_require__(468);

	var convert = function() {
	   return new Converter();
	}

	for (var func in conversions) {
	  // export Raw versions
	  convert[func + "Raw"] =  (function(func) {
	    // accept array or plain args
	    return function(arg) {
	      if (typeof arg == "number")
	        arg = Array.prototype.slice.call(arguments);
	      return conversions[func](arg);
	    }
	  })(func);

	  var pair = /(\w+)2(\w+)/.exec(func),
	      from = pair[1],
	      to = pair[2];

	  // export rgb2hsl and ["rgb"]["hsl"]
	  convert[from] = convert[from] || {};

	  convert[from][to] = convert[func] = (function(func) { 
	    return function(arg) {
	      if (typeof arg == "number")
	        arg = Array.prototype.slice.call(arguments);
	      
	      var val = conversions[func](arg);
	      if (typeof val == "string" || val === undefined)
	        return val; // keyword

	      for (var i = 0; i < val.length; i++)
	        val[i] = Math.round(val[i]);
	      return val;
	    }
	  })(func);
	}


	/* Converter does lazy conversion and caching */
	var Converter = function() {
	   this.convs = {};
	};

	/* Either get the values for a space or
	  set the values for a space, depending on args */
	Converter.prototype.routeSpace = function(space, args) {
	   var values = args[0];
	   if (values === undefined) {
	      // color.rgb()
	      return this.getValues(space);
	   }
	   // color.rgb(10, 10, 10)
	   if (typeof values == "number") {
	      values = Array.prototype.slice.call(args);        
	   }

	   return this.setValues(space, values);
	};
	  
	/* Set the values for a space, invalidating cache */
	Converter.prototype.setValues = function(space, values) {
	   this.space = space;
	   this.convs = {};
	   this.convs[space] = values;
	   return this;
	};

	/* Get the values for a space. If there's already
	  a conversion for the space, fetch it, otherwise
	  compute it */
	Converter.prototype.getValues = function(space) {
	   var vals = this.convs[space];
	   if (!vals) {
	      var fspace = this.space,
	          from = this.convs[fspace];
	      vals = convert[fspace][space](from);

	      this.convs[space] = vals;
	   }
	  return vals;
	};

	["rgb", "hsl", "hsv", "cmyk", "keyword"].forEach(function(space) {
	   Converter.prototype[space] = function(vals) {
	      return this.routeSpace(space, arguments);
	   }
	});

	module.exports = convert;

/***/ },

/***/ 468:
/***/ function(module, exports) {

	/* MIT license */

	module.exports = {
	  rgb2hsl: rgb2hsl,
	  rgb2hsv: rgb2hsv,
	  rgb2hwb: rgb2hwb,
	  rgb2cmyk: rgb2cmyk,
	  rgb2keyword: rgb2keyword,
	  rgb2xyz: rgb2xyz,
	  rgb2lab: rgb2lab,
	  rgb2lch: rgb2lch,

	  hsl2rgb: hsl2rgb,
	  hsl2hsv: hsl2hsv,
	  hsl2hwb: hsl2hwb,
	  hsl2cmyk: hsl2cmyk,
	  hsl2keyword: hsl2keyword,

	  hsv2rgb: hsv2rgb,
	  hsv2hsl: hsv2hsl,
	  hsv2hwb: hsv2hwb,
	  hsv2cmyk: hsv2cmyk,
	  hsv2keyword: hsv2keyword,

	  hwb2rgb: hwb2rgb,
	  hwb2hsl: hwb2hsl,
	  hwb2hsv: hwb2hsv,
	  hwb2cmyk: hwb2cmyk,
	  hwb2keyword: hwb2keyword,

	  cmyk2rgb: cmyk2rgb,
	  cmyk2hsl: cmyk2hsl,
	  cmyk2hsv: cmyk2hsv,
	  cmyk2hwb: cmyk2hwb,
	  cmyk2keyword: cmyk2keyword,

	  keyword2rgb: keyword2rgb,
	  keyword2hsl: keyword2hsl,
	  keyword2hsv: keyword2hsv,
	  keyword2hwb: keyword2hwb,
	  keyword2cmyk: keyword2cmyk,
	  keyword2lab: keyword2lab,
	  keyword2xyz: keyword2xyz,

	  xyz2rgb: xyz2rgb,
	  xyz2lab: xyz2lab,
	  xyz2lch: xyz2lch,

	  lab2xyz: lab2xyz,
	  lab2rgb: lab2rgb,
	  lab2lch: lab2lch,

	  lch2lab: lch2lab,
	  lch2xyz: lch2xyz,
	  lch2rgb: lch2rgb
	}


	function rgb2hsl(rgb) {
	  var r = rgb[0]/255,
	      g = rgb[1]/255,
	      b = rgb[2]/255,
	      min = Math.min(r, g, b),
	      max = Math.max(r, g, b),
	      delta = max - min,
	      h, s, l;

	  if (max == min)
	    h = 0;
	  else if (r == max)
	    h = (g - b) / delta;
	  else if (g == max)
	    h = 2 + (b - r) / delta;
	  else if (b == max)
	    h = 4 + (r - g)/ delta;

	  h = Math.min(h * 60, 360);

	  if (h < 0)
	    h += 360;

	  l = (min + max) / 2;

	  if (max == min)
	    s = 0;
	  else if (l <= 0.5)
	    s = delta / (max + min);
	  else
	    s = delta / (2 - max - min);

	  return [h, s * 100, l * 100];
	}

	function rgb2hsv(rgb) {
	  var r = rgb[0],
	      g = rgb[1],
	      b = rgb[2],
	      min = Math.min(r, g, b),
	      max = Math.max(r, g, b),
	      delta = max - min,
	      h, s, v;

	  if (max == 0)
	    s = 0;
	  else
	    s = (delta/max * 1000)/10;

	  if (max == min)
	    h = 0;
	  else if (r == max)
	    h = (g - b) / delta;
	  else if (g == max)
	    h = 2 + (b - r) / delta;
	  else if (b == max)
	    h = 4 + (r - g) / delta;

	  h = Math.min(h * 60, 360);

	  if (h < 0)
	    h += 360;

	  v = ((max / 255) * 1000) / 10;

	  return [h, s, v];
	}

	function rgb2hwb(rgb) {
	  var r = rgb[0],
	      g = rgb[1],
	      b = rgb[2],
	      h = rgb2hsl(rgb)[0],
	      w = 1/255 * Math.min(r, Math.min(g, b)),
	      b = 1 - 1/255 * Math.max(r, Math.max(g, b));

	  return [h, w * 100, b * 100];
	}

	function rgb2cmyk(rgb) {
	  var r = rgb[0] / 255,
	      g = rgb[1] / 255,
	      b = rgb[2] / 255,
	      c, m, y, k;

	  k = Math.min(1 - r, 1 - g, 1 - b);
	  c = (1 - r - k) / (1 - k) || 0;
	  m = (1 - g - k) / (1 - k) || 0;
	  y = (1 - b - k) / (1 - k) || 0;
	  return [c * 100, m * 100, y * 100, k * 100];
	}

	function rgb2keyword(rgb) {
	  return reverseKeywords[JSON.stringify(rgb)];
	}

	function rgb2xyz(rgb) {
	  var r = rgb[0] / 255,
	      g = rgb[1] / 255,
	      b = rgb[2] / 255;

	  // assume sRGB
	  r = r > 0.04045 ? Math.pow(((r + 0.055) / 1.055), 2.4) : (r / 12.92);
	  g = g > 0.04045 ? Math.pow(((g + 0.055) / 1.055), 2.4) : (g / 12.92);
	  b = b > 0.04045 ? Math.pow(((b + 0.055) / 1.055), 2.4) : (b / 12.92);

	  var x = (r * 0.4124) + (g * 0.3576) + (b * 0.1805);
	  var y = (r * 0.2126) + (g * 0.7152) + (b * 0.0722);
	  var z = (r * 0.0193) + (g * 0.1192) + (b * 0.9505);

	  return [x * 100, y *100, z * 100];
	}

	function rgb2lab(rgb) {
	  var xyz = rgb2xyz(rgb),
	        x = xyz[0],
	        y = xyz[1],
	        z = xyz[2],
	        l, a, b;

	  x /= 95.047;
	  y /= 100;
	  z /= 108.883;

	  x = x > 0.008856 ? Math.pow(x, 1/3) : (7.787 * x) + (16 / 116);
	  y = y > 0.008856 ? Math.pow(y, 1/3) : (7.787 * y) + (16 / 116);
	  z = z > 0.008856 ? Math.pow(z, 1/3) : (7.787 * z) + (16 / 116);

	  l = (116 * y) - 16;
	  a = 500 * (x - y);
	  b = 200 * (y - z);

	  return [l, a, b];
	}

	function rgb2lch(args) {
	  return lab2lch(rgb2lab(args));
	}

	function hsl2rgb(hsl) {
	  var h = hsl[0] / 360,
	      s = hsl[1] / 100,
	      l = hsl[2] / 100,
	      t1, t2, t3, rgb, val;

	  if (s == 0) {
	    val = l * 255;
	    return [val, val, val];
	  }

	  if (l < 0.5)
	    t2 = l * (1 + s);
	  else
	    t2 = l + s - l * s;
	  t1 = 2 * l - t2;

	  rgb = [0, 0, 0];
	  for (var i = 0; i < 3; i++) {
	    t3 = h + 1 / 3 * - (i - 1);
	    t3 < 0 && t3++;
	    t3 > 1 && t3--;

	    if (6 * t3 < 1)
	      val = t1 + (t2 - t1) * 6 * t3;
	    else if (2 * t3 < 1)
	      val = t2;
	    else if (3 * t3 < 2)
	      val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
	    else
	      val = t1;

	    rgb[i] = val * 255;
	  }

	  return rgb;
	}

	function hsl2hsv(hsl) {
	  var h = hsl[0],
	      s = hsl[1] / 100,
	      l = hsl[2] / 100,
	      sv, v;

	  if(l === 0) {
	      // no need to do calc on black
	      // also avoids divide by 0 error
	      return [0, 0, 0];
	  }

	  l *= 2;
	  s *= (l <= 1) ? l : 2 - l;
	  v = (l + s) / 2;
	  sv = (2 * s) / (l + s);
	  return [h, sv * 100, v * 100];
	}

	function hsl2hwb(args) {
	  return rgb2hwb(hsl2rgb(args));
	}

	function hsl2cmyk(args) {
	  return rgb2cmyk(hsl2rgb(args));
	}

	function hsl2keyword(args) {
	  return rgb2keyword(hsl2rgb(args));
	}


	function hsv2rgb(hsv) {
	  var h = hsv[0] / 60,
	      s = hsv[1] / 100,
	      v = hsv[2] / 100,
	      hi = Math.floor(h) % 6;

	  var f = h - Math.floor(h),
	      p = 255 * v * (1 - s),
	      q = 255 * v * (1 - (s * f)),
	      t = 255 * v * (1 - (s * (1 - f))),
	      v = 255 * v;

	  switch(hi) {
	    case 0:
	      return [v, t, p];
	    case 1:
	      return [q, v, p];
	    case 2:
	      return [p, v, t];
	    case 3:
	      return [p, q, v];
	    case 4:
	      return [t, p, v];
	    case 5:
	      return [v, p, q];
	  }
	}

	function hsv2hsl(hsv) {
	  var h = hsv[0],
	      s = hsv[1] / 100,
	      v = hsv[2] / 100,
	      sl, l;

	  l = (2 - s) * v;
	  sl = s * v;
	  sl /= (l <= 1) ? l : 2 - l;
	  sl = sl || 0;
	  l /= 2;
	  return [h, sl * 100, l * 100];
	}

	function hsv2hwb(args) {
	  return rgb2hwb(hsv2rgb(args))
	}

	function hsv2cmyk(args) {
	  return rgb2cmyk(hsv2rgb(args));
	}

	function hsv2keyword(args) {
	  return rgb2keyword(hsv2rgb(args));
	}

	// http://dev.w3.org/csswg/css-color/#hwb-to-rgb
	function hwb2rgb(hwb) {
	  var h = hwb[0] / 360,
	      wh = hwb[1] / 100,
	      bl = hwb[2] / 100,
	      ratio = wh + bl,
	      i, v, f, n;

	  // wh + bl cant be > 1
	  if (ratio > 1) {
	    wh /= ratio;
	    bl /= ratio;
	  }

	  i = Math.floor(6 * h);
	  v = 1 - bl;
	  f = 6 * h - i;
	  if ((i & 0x01) != 0) {
	    f = 1 - f;
	  }
	  n = wh + f * (v - wh);  // linear interpolation

	  switch (i) {
	    default:
	    case 6:
	    case 0: r = v; g = n; b = wh; break;
	    case 1: r = n; g = v; b = wh; break;
	    case 2: r = wh; g = v; b = n; break;
	    case 3: r = wh; g = n; b = v; break;
	    case 4: r = n; g = wh; b = v; break;
	    case 5: r = v; g = wh; b = n; break;
	  }

	  return [r * 255, g * 255, b * 255];
	}

	function hwb2hsl(args) {
	  return rgb2hsl(hwb2rgb(args));
	}

	function hwb2hsv(args) {
	  return rgb2hsv(hwb2rgb(args));
	}

	function hwb2cmyk(args) {
	  return rgb2cmyk(hwb2rgb(args));
	}

	function hwb2keyword(args) {
	  return rgb2keyword(hwb2rgb(args));
	}

	function cmyk2rgb(cmyk) {
	  var c = cmyk[0] / 100,
	      m = cmyk[1] / 100,
	      y = cmyk[2] / 100,
	      k = cmyk[3] / 100,
	      r, g, b;

	  r = 1 - Math.min(1, c * (1 - k) + k);
	  g = 1 - Math.min(1, m * (1 - k) + k);
	  b = 1 - Math.min(1, y * (1 - k) + k);
	  return [r * 255, g * 255, b * 255];
	}

	function cmyk2hsl(args) {
	  return rgb2hsl(cmyk2rgb(args));
	}

	function cmyk2hsv(args) {
	  return rgb2hsv(cmyk2rgb(args));
	}

	function cmyk2hwb(args) {
	  return rgb2hwb(cmyk2rgb(args));
	}

	function cmyk2keyword(args) {
	  return rgb2keyword(cmyk2rgb(args));
	}


	function xyz2rgb(xyz) {
	  var x = xyz[0] / 100,
	      y = xyz[1] / 100,
	      z = xyz[2] / 100,
	      r, g, b;

	  r = (x * 3.2406) + (y * -1.5372) + (z * -0.4986);
	  g = (x * -0.9689) + (y * 1.8758) + (z * 0.0415);
	  b = (x * 0.0557) + (y * -0.2040) + (z * 1.0570);

	  // assume sRGB
	  r = r > 0.0031308 ? ((1.055 * Math.pow(r, 1.0 / 2.4)) - 0.055)
	    : r = (r * 12.92);

	  g = g > 0.0031308 ? ((1.055 * Math.pow(g, 1.0 / 2.4)) - 0.055)
	    : g = (g * 12.92);

	  b = b > 0.0031308 ? ((1.055 * Math.pow(b, 1.0 / 2.4)) - 0.055)
	    : b = (b * 12.92);

	  r = Math.min(Math.max(0, r), 1);
	  g = Math.min(Math.max(0, g), 1);
	  b = Math.min(Math.max(0, b), 1);

	  return [r * 255, g * 255, b * 255];
	}

	function xyz2lab(xyz) {
	  var x = xyz[0],
	      y = xyz[1],
	      z = xyz[2],
	      l, a, b;

	  x /= 95.047;
	  y /= 100;
	  z /= 108.883;

	  x = x > 0.008856 ? Math.pow(x, 1/3) : (7.787 * x) + (16 / 116);
	  y = y > 0.008856 ? Math.pow(y, 1/3) : (7.787 * y) + (16 / 116);
	  z = z > 0.008856 ? Math.pow(z, 1/3) : (7.787 * z) + (16 / 116);

	  l = (116 * y) - 16;
	  a = 500 * (x - y);
	  b = 200 * (y - z);

	  return [l, a, b];
	}

	function xyz2lch(args) {
	  return lab2lch(xyz2lab(args));
	}

	function lab2xyz(lab) {
	  var l = lab[0],
	      a = lab[1],
	      b = lab[2],
	      x, y, z, y2;

	  if (l <= 8) {
	    y = (l * 100) / 903.3;
	    y2 = (7.787 * (y / 100)) + (16 / 116);
	  } else {
	    y = 100 * Math.pow((l + 16) / 116, 3);
	    y2 = Math.pow(y / 100, 1/3);
	  }

	  x = x / 95.047 <= 0.008856 ? x = (95.047 * ((a / 500) + y2 - (16 / 116))) / 7.787 : 95.047 * Math.pow((a / 500) + y2, 3);

	  z = z / 108.883 <= 0.008859 ? z = (108.883 * (y2 - (b / 200) - (16 / 116))) / 7.787 : 108.883 * Math.pow(y2 - (b / 200), 3);

	  return [x, y, z];
	}

	function lab2lch(lab) {
	  var l = lab[0],
	      a = lab[1],
	      b = lab[2],
	      hr, h, c;

	  hr = Math.atan2(b, a);
	  h = hr * 360 / 2 / Math.PI;
	  if (h < 0) {
	    h += 360;
	  }
	  c = Math.sqrt(a * a + b * b);
	  return [l, c, h];
	}

	function lab2rgb(args) {
	  return xyz2rgb(lab2xyz(args));
	}

	function lch2lab(lch) {
	  var l = lch[0],
	      c = lch[1],
	      h = lch[2],
	      a, b, hr;

	  hr = h / 360 * 2 * Math.PI;
	  a = c * Math.cos(hr);
	  b = c * Math.sin(hr);
	  return [l, a, b];
	}

	function lch2xyz(args) {
	  return lab2xyz(lch2lab(args));
	}

	function lch2rgb(args) {
	  return lab2rgb(lch2lab(args));
	}

	function keyword2rgb(keyword) {
	  return cssKeywords[keyword];
	}

	function keyword2hsl(args) {
	  return rgb2hsl(keyword2rgb(args));
	}

	function keyword2hsv(args) {
	  return rgb2hsv(keyword2rgb(args));
	}

	function keyword2hwb(args) {
	  return rgb2hwb(keyword2rgb(args));
	}

	function keyword2cmyk(args) {
	  return rgb2cmyk(keyword2rgb(args));
	}

	function keyword2lab(args) {
	  return rgb2lab(keyword2rgb(args));
	}

	function keyword2xyz(args) {
	  return rgb2xyz(keyword2rgb(args));
	}

	var cssKeywords = {
	  aliceblue:  [240,248,255],
	  antiquewhite: [250,235,215],
	  aqua: [0,255,255],
	  aquamarine: [127,255,212],
	  azure:  [240,255,255],
	  beige:  [245,245,220],
	  bisque: [255,228,196],
	  black:  [0,0,0],
	  blanchedalmond: [255,235,205],
	  blue: [0,0,255],
	  blueviolet: [138,43,226],
	  brown:  [165,42,42],
	  burlywood:  [222,184,135],
	  cadetblue:  [95,158,160],
	  chartreuse: [127,255,0],
	  chocolate:  [210,105,30],
	  coral:  [255,127,80],
	  cornflowerblue: [100,149,237],
	  cornsilk: [255,248,220],
	  crimson:  [220,20,60],
	  cyan: [0,255,255],
	  darkblue: [0,0,139],
	  darkcyan: [0,139,139],
	  darkgoldenrod:  [184,134,11],
	  darkgray: [169,169,169],
	  darkgreen:  [0,100,0],
	  darkgrey: [169,169,169],
	  darkkhaki:  [189,183,107],
	  darkmagenta:  [139,0,139],
	  darkolivegreen: [85,107,47],
	  darkorange: [255,140,0],
	  darkorchid: [153,50,204],
	  darkred:  [139,0,0],
	  darksalmon: [233,150,122],
	  darkseagreen: [143,188,143],
	  darkslateblue:  [72,61,139],
	  darkslategray:  [47,79,79],
	  darkslategrey:  [47,79,79],
	  darkturquoise:  [0,206,209],
	  darkviolet: [148,0,211],
	  deeppink: [255,20,147],
	  deepskyblue:  [0,191,255],
	  dimgray:  [105,105,105],
	  dimgrey:  [105,105,105],
	  dodgerblue: [30,144,255],
	  firebrick:  [178,34,34],
	  floralwhite:  [255,250,240],
	  forestgreen:  [34,139,34],
	  fuchsia:  [255,0,255],
	  gainsboro:  [220,220,220],
	  ghostwhite: [248,248,255],
	  gold: [255,215,0],
	  goldenrod:  [218,165,32],
	  gray: [128,128,128],
	  green:  [0,128,0],
	  greenyellow:  [173,255,47],
	  grey: [128,128,128],
	  honeydew: [240,255,240],
	  hotpink:  [255,105,180],
	  indianred:  [205,92,92],
	  indigo: [75,0,130],
	  ivory:  [255,255,240],
	  khaki:  [240,230,140],
	  lavender: [230,230,250],
	  lavenderblush:  [255,240,245],
	  lawngreen:  [124,252,0],
	  lemonchiffon: [255,250,205],
	  lightblue:  [173,216,230],
	  lightcoral: [240,128,128],
	  lightcyan:  [224,255,255],
	  lightgoldenrodyellow: [250,250,210],
	  lightgray:  [211,211,211],
	  lightgreen: [144,238,144],
	  lightgrey:  [211,211,211],
	  lightpink:  [255,182,193],
	  lightsalmon:  [255,160,122],
	  lightseagreen:  [32,178,170],
	  lightskyblue: [135,206,250],
	  lightslategray: [119,136,153],
	  lightslategrey: [119,136,153],
	  lightsteelblue: [176,196,222],
	  lightyellow:  [255,255,224],
	  lime: [0,255,0],
	  limegreen:  [50,205,50],
	  linen:  [250,240,230],
	  magenta:  [255,0,255],
	  maroon: [128,0,0],
	  mediumaquamarine: [102,205,170],
	  mediumblue: [0,0,205],
	  mediumorchid: [186,85,211],
	  mediumpurple: [147,112,219],
	  mediumseagreen: [60,179,113],
	  mediumslateblue:  [123,104,238],
	  mediumspringgreen:  [0,250,154],
	  mediumturquoise:  [72,209,204],
	  mediumvioletred:  [199,21,133],
	  midnightblue: [25,25,112],
	  mintcream:  [245,255,250],
	  mistyrose:  [255,228,225],
	  moccasin: [255,228,181],
	  navajowhite:  [255,222,173],
	  navy: [0,0,128],
	  oldlace:  [253,245,230],
	  olive:  [128,128,0],
	  olivedrab:  [107,142,35],
	  orange: [255,165,0],
	  orangered:  [255,69,0],
	  orchid: [218,112,214],
	  palegoldenrod:  [238,232,170],
	  palegreen:  [152,251,152],
	  paleturquoise:  [175,238,238],
	  palevioletred:  [219,112,147],
	  papayawhip: [255,239,213],
	  peachpuff:  [255,218,185],
	  peru: [205,133,63],
	  pink: [255,192,203],
	  plum: [221,160,221],
	  powderblue: [176,224,230],
	  purple: [128,0,128],
	  rebeccapurple: [102, 51, 153],
	  red:  [255,0,0],
	  rosybrown:  [188,143,143],
	  royalblue:  [65,105,225],
	  saddlebrown:  [139,69,19],
	  salmon: [250,128,114],
	  sandybrown: [244,164,96],
	  seagreen: [46,139,87],
	  seashell: [255,245,238],
	  sienna: [160,82,45],
	  silver: [192,192,192],
	  skyblue:  [135,206,235],
	  slateblue:  [106,90,205],
	  slategray:  [112,128,144],
	  slategrey:  [112,128,144],
	  snow: [255,250,250],
	  springgreen:  [0,255,127],
	  steelblue:  [70,130,180],
	  tan:  [210,180,140],
	  teal: [0,128,128],
	  thistle:  [216,191,216],
	  tomato: [255,99,71],
	  turquoise:  [64,224,208],
	  violet: [238,130,238],
	  wheat:  [245,222,179],
	  white:  [255,255,255],
	  whitesmoke: [245,245,245],
	  yellow: [255,255,0],
	  yellowgreen:  [154,205,50]
	};

	var reverseKeywords = {};
	for (var key in cssKeywords) {
	  reverseKeywords[JSON.stringify(cssKeywords[key])] = key;
	}


/***/ },

/***/ 469:
/***/ function(module, exports, __webpack_require__) {

	/* MIT license */
	var colorNames = __webpack_require__(470);

	module.exports = {
	   getRgba: getRgba,
	   getHsla: getHsla,
	   getRgb: getRgb,
	   getHsl: getHsl,
	   getHwb: getHwb,
	   getAlpha: getAlpha,

	   hexString: hexString,
	   rgbString: rgbString,
	   rgbaString: rgbaString,
	   percentString: percentString,
	   percentaString: percentaString,
	   hslString: hslString,
	   hslaString: hslaString,
	   hwbString: hwbString,
	   keyword: keyword
	}

	function getRgba(string) {
	   if (!string) {
	      return;
	   }
	   var abbr =  /^#([a-fA-F0-9]{3})$/,
	       hex =  /^#([a-fA-F0-9]{6})$/,
	       rgba = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,
	       per = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,
	       keyword = /(\D+)/;

	   var rgb = [0, 0, 0],
	       a = 1,
	       match = string.match(abbr);
	   if (match) {
	      match = match[1];
	      for (var i = 0; i < rgb.length; i++) {
	         rgb[i] = parseInt(match[i] + match[i], 16);
	      }
	   }
	   else if (match = string.match(hex)) {
	      match = match[1];
	      for (var i = 0; i < rgb.length; i++) {
	         rgb[i] = parseInt(match.slice(i * 2, i * 2 + 2), 16);
	      }
	   }
	   else if (match = string.match(rgba)) {
	      for (var i = 0; i < rgb.length; i++) {
	         rgb[i] = parseInt(match[i + 1]);
	      }
	      a = parseFloat(match[4]);
	   }
	   else if (match = string.match(per)) {
	      for (var i = 0; i < rgb.length; i++) {
	         rgb[i] = Math.round(parseFloat(match[i + 1]) * 2.55);
	      }
	      a = parseFloat(match[4]);
	   }
	   else if (match = string.match(keyword)) {
	      if (match[1] == "transparent") {
	         return [0, 0, 0, 0];
	      }
	      rgb = colorNames[match[1]];
	      if (!rgb) {
	         return;
	      }
	   }

	   for (var i = 0; i < rgb.length; i++) {
	      rgb[i] = scale(rgb[i], 0, 255);
	   }
	   if (!a && a != 0) {
	      a = 1;
	   }
	   else {
	      a = scale(a, 0, 1);
	   }
	   rgb[3] = a;
	   return rgb;
	}

	function getHsla(string) {
	   if (!string) {
	      return;
	   }
	   var hsl = /^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/;
	   var match = string.match(hsl);
	   if (match) {
	      var alpha = parseFloat(match[4]);
	      var h = scale(parseInt(match[1]), 0, 360),
	          s = scale(parseFloat(match[2]), 0, 100),
	          l = scale(parseFloat(match[3]), 0, 100),
	          a = scale(isNaN(alpha) ? 1 : alpha, 0, 1);
	      return [h, s, l, a];
	   }
	}

	function getHwb(string) {
	   if (!string) {
	      return;
	   }
	   var hwb = /^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/;
	   var match = string.match(hwb);
	   if (match) {
	    var alpha = parseFloat(match[4]);
	      var h = scale(parseInt(match[1]), 0, 360),
	          w = scale(parseFloat(match[2]), 0, 100),
	          b = scale(parseFloat(match[3]), 0, 100),
	          a = scale(isNaN(alpha) ? 1 : alpha, 0, 1);
	      return [h, w, b, a];
	   }
	}

	function getRgb(string) {
	   var rgba = getRgba(string);
	   return rgba && rgba.slice(0, 3);
	}

	function getHsl(string) {
	  var hsla = getHsla(string);
	  return hsla && hsla.slice(0, 3);
	}

	function getAlpha(string) {
	   var vals = getRgba(string);
	   if (vals) {
	      return vals[3];
	   }
	   else if (vals = getHsla(string)) {
	      return vals[3];
	   }
	   else if (vals = getHwb(string)) {
	      return vals[3];
	   }
	}

	// generators
	function hexString(rgb) {
	   return "#" + hexDouble(rgb[0]) + hexDouble(rgb[1])
	              + hexDouble(rgb[2]);
	}

	function rgbString(rgba, alpha) {
	   if (alpha < 1 || (rgba[3] && rgba[3] < 1)) {
	      return rgbaString(rgba, alpha);
	   }
	   return "rgb(" + rgba[0] + ", " + rgba[1] + ", " + rgba[2] + ")";
	}

	function rgbaString(rgba, alpha) {
	   if (alpha === undefined) {
	      alpha = (rgba[3] !== undefined ? rgba[3] : 1);
	   }
	   return "rgba(" + rgba[0] + ", " + rgba[1] + ", " + rgba[2]
	           + ", " + alpha + ")";
	}

	function percentString(rgba, alpha) {
	   if (alpha < 1 || (rgba[3] && rgba[3] < 1)) {
	      return percentaString(rgba, alpha);
	   }
	   var r = Math.round(rgba[0]/255 * 100),
	       g = Math.round(rgba[1]/255 * 100),
	       b = Math.round(rgba[2]/255 * 100);

	   return "rgb(" + r + "%, " + g + "%, " + b + "%)";
	}

	function percentaString(rgba, alpha) {
	   var r = Math.round(rgba[0]/255 * 100),
	       g = Math.round(rgba[1]/255 * 100),
	       b = Math.round(rgba[2]/255 * 100);
	   return "rgba(" + r + "%, " + g + "%, " + b + "%, " + (alpha || rgba[3] || 1) + ")";
	}

	function hslString(hsla, alpha) {
	   if (alpha < 1 || (hsla[3] && hsla[3] < 1)) {
	      return hslaString(hsla, alpha);
	   }
	   return "hsl(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%)";
	}

	function hslaString(hsla, alpha) {
	   if (alpha === undefined) {
	      alpha = (hsla[3] !== undefined ? hsla[3] : 1);
	   }
	   return "hsla(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%, "
	           + alpha + ")";
	}

	// hwb is a bit different than rgb(a) & hsl(a) since there is no alpha specific syntax
	// (hwb have alpha optional & 1 is default value)
	function hwbString(hwb, alpha) {
	   if (alpha === undefined) {
	      alpha = (hwb[3] !== undefined ? hwb[3] : 1);
	   }
	   return "hwb(" + hwb[0] + ", " + hwb[1] + "%, " + hwb[2] + "%"
	           + (alpha !== undefined && alpha !== 1 ? ", " + alpha : "") + ")";
	}

	function keyword(rgb) {
	  return reverseNames[rgb.slice(0, 3)];
	}

	// helpers
	function scale(num, min, max) {
	   return Math.min(Math.max(min, num), max);
	}

	function hexDouble(num) {
	  var str = num.toString(16).toUpperCase();
	  return (str.length < 2) ? "0" + str : str;
	}


	//create a list of reverse color names
	var reverseNames = {};
	for (var name in colorNames) {
	   reverseNames[colorNames[name]] = name;
	}


/***/ },

/***/ 470:
/***/ function(module, exports) {

	module.exports = {
		"aliceblue": [240, 248, 255],
		"antiquewhite": [250, 235, 215],
		"aqua": [0, 255, 255],
		"aquamarine": [127, 255, 212],
		"azure": [240, 255, 255],
		"beige": [245, 245, 220],
		"bisque": [255, 228, 196],
		"black": [0, 0, 0],
		"blanchedalmond": [255, 235, 205],
		"blue": [0, 0, 255],
		"blueviolet": [138, 43, 226],
		"brown": [165, 42, 42],
		"burlywood": [222, 184, 135],
		"cadetblue": [95, 158, 160],
		"chartreuse": [127, 255, 0],
		"chocolate": [210, 105, 30],
		"coral": [255, 127, 80],
		"cornflowerblue": [100, 149, 237],
		"cornsilk": [255, 248, 220],
		"crimson": [220, 20, 60],
		"cyan": [0, 255, 255],
		"darkblue": [0, 0, 139],
		"darkcyan": [0, 139, 139],
		"darkgoldenrod": [184, 134, 11],
		"darkgray": [169, 169, 169],
		"darkgreen": [0, 100, 0],
		"darkgrey": [169, 169, 169],
		"darkkhaki": [189, 183, 107],
		"darkmagenta": [139, 0, 139],
		"darkolivegreen": [85, 107, 47],
		"darkorange": [255, 140, 0],
		"darkorchid": [153, 50, 204],
		"darkred": [139, 0, 0],
		"darksalmon": [233, 150, 122],
		"darkseagreen": [143, 188, 143],
		"darkslateblue": [72, 61, 139],
		"darkslategray": [47, 79, 79],
		"darkslategrey": [47, 79, 79],
		"darkturquoise": [0, 206, 209],
		"darkviolet": [148, 0, 211],
		"deeppink": [255, 20, 147],
		"deepskyblue": [0, 191, 255],
		"dimgray": [105, 105, 105],
		"dimgrey": [105, 105, 105],
		"dodgerblue": [30, 144, 255],
		"firebrick": [178, 34, 34],
		"floralwhite": [255, 250, 240],
		"forestgreen": [34, 139, 34],
		"fuchsia": [255, 0, 255],
		"gainsboro": [220, 220, 220],
		"ghostwhite": [248, 248, 255],
		"gold": [255, 215, 0],
		"goldenrod": [218, 165, 32],
		"gray": [128, 128, 128],
		"green": [0, 128, 0],
		"greenyellow": [173, 255, 47],
		"grey": [128, 128, 128],
		"honeydew": [240, 255, 240],
		"hotpink": [255, 105, 180],
		"indianred": [205, 92, 92],
		"indigo": [75, 0, 130],
		"ivory": [255, 255, 240],
		"khaki": [240, 230, 140],
		"lavender": [230, 230, 250],
		"lavenderblush": [255, 240, 245],
		"lawngreen": [124, 252, 0],
		"lemonchiffon": [255, 250, 205],
		"lightblue": [173, 216, 230],
		"lightcoral": [240, 128, 128],
		"lightcyan": [224, 255, 255],
		"lightgoldenrodyellow": [250, 250, 210],
		"lightgray": [211, 211, 211],
		"lightgreen": [144, 238, 144],
		"lightgrey": [211, 211, 211],
		"lightpink": [255, 182, 193],
		"lightsalmon": [255, 160, 122],
		"lightseagreen": [32, 178, 170],
		"lightskyblue": [135, 206, 250],
		"lightslategray": [119, 136, 153],
		"lightslategrey": [119, 136, 153],
		"lightsteelblue": [176, 196, 222],
		"lightyellow": [255, 255, 224],
		"lime": [0, 255, 0],
		"limegreen": [50, 205, 50],
		"linen": [250, 240, 230],
		"magenta": [255, 0, 255],
		"maroon": [128, 0, 0],
		"mediumaquamarine": [102, 205, 170],
		"mediumblue": [0, 0, 205],
		"mediumorchid": [186, 85, 211],
		"mediumpurple": [147, 112, 219],
		"mediumseagreen": [60, 179, 113],
		"mediumslateblue": [123, 104, 238],
		"mediumspringgreen": [0, 250, 154],
		"mediumturquoise": [72, 209, 204],
		"mediumvioletred": [199, 21, 133],
		"midnightblue": [25, 25, 112],
		"mintcream": [245, 255, 250],
		"mistyrose": [255, 228, 225],
		"moccasin": [255, 228, 181],
		"navajowhite": [255, 222, 173],
		"navy": [0, 0, 128],
		"oldlace": [253, 245, 230],
		"olive": [128, 128, 0],
		"olivedrab": [107, 142, 35],
		"orange": [255, 165, 0],
		"orangered": [255, 69, 0],
		"orchid": [218, 112, 214],
		"palegoldenrod": [238, 232, 170],
		"palegreen": [152, 251, 152],
		"paleturquoise": [175, 238, 238],
		"palevioletred": [219, 112, 147],
		"papayawhip": [255, 239, 213],
		"peachpuff": [255, 218, 185],
		"peru": [205, 133, 63],
		"pink": [255, 192, 203],
		"plum": [221, 160, 221],
		"powderblue": [176, 224, 230],
		"purple": [128, 0, 128],
		"rebeccapurple": [102, 51, 153],
		"red": [255, 0, 0],
		"rosybrown": [188, 143, 143],
		"royalblue": [65, 105, 225],
		"saddlebrown": [139, 69, 19],
		"salmon": [250, 128, 114],
		"sandybrown": [244, 164, 96],
		"seagreen": [46, 139, 87],
		"seashell": [255, 245, 238],
		"sienna": [160, 82, 45],
		"silver": [192, 192, 192],
		"skyblue": [135, 206, 235],
		"slateblue": [106, 90, 205],
		"slategray": [112, 128, 144],
		"slategrey": [112, 128, 144],
		"snow": [255, 250, 250],
		"springgreen": [0, 255, 127],
		"steelblue": [70, 130, 180],
		"tan": [210, 180, 140],
		"teal": [0, 128, 128],
		"thistle": [216, 191, 216],
		"tomato": [255, 99, 71],
		"turquoise": [64, 224, 208],
		"violet": [238, 130, 238],
		"wheat": [245, 222, 179],
		"white": [255, 255, 255],
		"whitesmoke": [245, 245, 245],
		"yellow": [255, 255, 0],
		"yellowgreen": [154, 205, 50]
	};

/***/ },

/***/ 471:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "4a46d7a2659ad5aa5467ca0ac30d1730.png";

/***/ },

/***/ 627:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _getPrototypeOf = __webpack_require__(13);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(25);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(26);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(30);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(55);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _index = __webpack_require__(62);

	var _index2 = _interopRequireDefault(_index);

	var _index3 = __webpack_require__(225);

	var _index4 = _interopRequireDefault(_index3);

	var _react2 = __webpack_require__(63);

	var _react3 = _interopRequireDefault(_react2);

	var _index5 = __webpack_require__(226);

	var _index6 = _interopRequireDefault(_index5);

	var _main = __webpack_require__(460);

	var _radium = __webpack_require__(411);

	var _radium2 = _interopRequireDefault(_radium);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _components = {
		ItemInfo: {
			displayName: 'ItemInfo'
		},
		ImageInfo: {
			displayName: 'ImageInfo'
		},
		_component: {}
	};

	var _homeToyDesktopFuFuzhuangNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
		filename: '/home/toy/Desktop/fu/fuzhuang/src/home/item.jsx',
		components: _components,
		locals: [module],
		imports: [_react3.default]
	});

	var _homeToyDesktopFuFuzhuangNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
		filename: '/home/toy/Desktop/fu/fuzhuang/src/home/item.jsx',
		components: _components,
		locals: [],
		imports: [_react3.default, _index2.default]
	});

	function _wrapComponent(id) {
		return function (Component) {
			return _homeToyDesktopFuFuzhuangNode_modulesReactTransformHmrLibIndexJs2(_homeToyDesktopFuFuzhuangNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
		};
	}

	var ItemInfo = _wrapComponent('ItemInfo')(function (_Component) {
		(0, _inherits3.default)(ItemInfo, _Component);

		function ItemInfo() {
			(0, _classCallCheck3.default)(this, ItemInfo);
			return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(ItemInfo).apply(this, arguments));
		}

		(0, _createClass3.default)(ItemInfo, [{
			key: 'render',
			value: function render() {
				return _react3.default.createElement(
					'div',
					{ style: { border: "1px solid " + _main.colors.line, padding: 20 } },
					_react3.default.createElement(
						'div',
						{ style: { marginRight: 20, display: 'inline-block', verticalAlign: "top" } },
						_react3.default.createElement('img', { style: { width: 400, height: 400 }, src: __webpack_require__(471) }),
						_react3.default.createElement(
							'div',
							null,
							_react3.default.createElement('img', { style: { width: 78, height: 78, margin: 10, border: "1px solid" + _main.colors.primary }, src: __webpack_require__(471) }),
							_react3.default.createElement('img', { style: { width: 78, height: 78, margin: 10, border: "1px solid" + _main.colors.primary }, src: __webpack_require__(471) }),
							_react3.default.createElement('img', { style: { width: 78, height: 78, margin: 10, border: "1px solid" + _main.colors.primary }, src: __webpack_require__(471) }),
							_react3.default.createElement('img', { style: { width: 78, height: 78, margin: 10, border: "1px solid" + _main.colors.primary }, src: __webpack_require__(471) })
						)
					),
					_react3.default.createElement(
						'div',
						{ style: { display: 'inline-block', verticalAlign: "top", marginLeft: 20 } },
						_react3.default.createElement(
							'p',
							{ style: { fontSize: 20, width: 680, textAlign: "center" } },
							'2016夏季新款韩版修身显瘦白色T恤女士短袖圆领紧身纯色打底裤'
						),
						_react3.default.createElement(
							'div',
							{ style: { padding: "20px 50px", margin: "20px 0", background: _main.colors.bg, lineHeight: "50px", color: "#888" } },
							_react3.default.createElement(
								'p',
								null,
								_react3.default.createElement(
									'span',
									{ style: { marginRight: 50 } },
									'批发价'
								),
								_react3.default.createElement(
									'span',
									{ style: { color: _main.colors.primary, fontSize: 30 } },
									'¥10.00'
								)
							),
							_react3.default.createElement(
								'p',
								null,
								_react3.default.createElement(
									'span',
									{ style: { marginRight: 50 } },
									'淘宝价'
								),
								_react3.default.createElement(
									'span',
									null,
									'¥30.00'
								)
							)
						),
						_react3.default.createElement(
							'div',
							{ style: { borderBottom: "1px dotted " + _main.colors.line, padding: "15px 0" } },
							_react3.default.createElement(
								'span',
								{ style: { color: "#888" } },
								'服务'
							)
						),
						_react3.default.createElement(
							'div',
							{ style: { borderBottom: "1px dotted " + _main.colors.line, padding: "15px 0" } },
							_react3.default.createElement(
								'span',
								{ style: { color: "#888" } },
								'货号'
							)
						),
						_react3.default.createElement(
							'div',
							{ style: { borderBottom: "1px dotted " + _main.colors.line, padding: "15px 0" } },
							_react3.default.createElement(
								'span',
								{ style: { color: "#888" } },
								'尺寸'
							)
						),
						_react3.default.createElement(
							'div',
							{ style: { borderBottom: "1px dotted " + _main.colors.line, padding: "15px 0" } },
							_react3.default.createElement(
								'span',
								{ style: { color: "#888" } },
								'颜色'
							)
						),
						_react3.default.createElement(
							'div',
							{ style: { textAlign: "center" } },
							_react3.default.createElement(
								'div',
								{ style: { margin: 20, cursor: "pointer", background: _main.colors.primary, color: "#fff", padding: "5px 20px", display: "inline-block", fontSize: 20 } },
								'立即购买'
							),
							_react3.default.createElement(
								'div',
								{ style: { margin: 20, cursor: "pointer", border: "1px solid " + _main.colors.primary, color: _main.colors.primary, padding: "5px 20px", display: "inline-block", fontSize: 20 } },
								'收藏'
							),
							_react3.default.createElement(
								'div',
								{ style: { margin: 20, cursor: "pointer", border: "1px solid " + _main.colors.primary, color: _main.colors.primary, padding: "5px 20px", display: "inline-block", fontSize: 20 } },
								'加入购物车'
							)
						)
					)
				);
			}
		}]);
		return ItemInfo;
	}(_react2.Component));

	var ImageInfo = _wrapComponent('ImageInfo')(function (_Component2) {
		(0, _inherits3.default)(ImageInfo, _Component2);

		function ImageInfo() {
			(0, _classCallCheck3.default)(this, ImageInfo);
			return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(ImageInfo).apply(this, arguments));
		}

		(0, _createClass3.default)(ImageInfo, [{
			key: 'render',
			value: function render() {
				return _react3.default.createElement(
					'div',
					{ style: { marginTop: 30, border: "1px solid " + _main.colors.line } },
					_react3.default.createElement(
						'h2',
						{ style: { borderBottom: "1px solid " + _main.colors.line, padding: "15px 20px", background: _main.colors.bg, fontSize: 16, color: "#333" } },
						'商品详情'
					),
					_react3.default.createElement(
						'div',
						{ style: { padding: 20 } },
						_react3.default.createElement(
							'ul',
							{ style: { listStyle: "none", fontSize: 13, margin: "0 40px 20px 40px" } },
							[{ k: "裤长", v: "七分裤" }, { k: "货号", v: "872" }, { k: "女裤裤型", v: "毛裤" }].map(function (it) {
								return _react3.default.createElement(
									'li',
									{ style: { display: "inline-block", margin: 20 } },
									_react3.default.createElement(
										'span',
										{ style: { marginRight: 10, color: "#888" } },
										it.k,
										':'
									),
									_react3.default.createElement(
										'span',
										{ style: { color: "#333" } },
										it.v
									)
								);
							})
						),
						_react3.default.createElement(
							'p',
							{ style: { overflow: "hidden", textAlign: "center" } },
							_react3.default.createElement('img', { style: { maxWidth: 860 }, src: __webpack_require__(628) }),
							_react3.default.createElement('img', { style: { maxWidth: 860 }, src: __webpack_require__(628) })
						)
					)
				);
			}
		}]);
		return ImageInfo;
	}(_react2.Component));

	var _component = _wrapComponent('_component')(function (_Component3) {
		(0, _inherits3.default)(_class, _Component3);

		function _class() {
			(0, _classCallCheck3.default)(this, _class);
			return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(_class).apply(this, arguments));
		}

		(0, _createClass3.default)(_class, [{
			key: 'render',
			value: function render() {
				return _react3.default.createElement(
					'div',
					null,
					_react3.default.createElement(_main.BodyStyle, null),
					_react3.default.createElement(_main.Head, null),
					_react3.default.createElement(
						_main.TitleBar,
						null,
						_react3.default.createElement(_main.Search, null)
					),
					_react3.default.createElement(_main.MenuBar, { data: _main.menuData }),
					_react3.default.createElement(
						'div',
						{ style: { width: 1200, margin: "20px auto" } },
						_react3.default.createElement(ItemInfo, null),
						_react3.default.createElement(ImageInfo, null)
					),
					_react3.default.createElement(_main.Footer, null)
				);
			}
		}]);
		return _class;
	}(_react2.Component));

	exports.default = _component;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ },

/***/ 628:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "bc60928b2ad747d2e4e8c7ee66583faf.jpg";

/***/ }

});