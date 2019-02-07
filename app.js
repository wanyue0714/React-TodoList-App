var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Todo = function (_React$Component) {
	_inherits(Todo, _React$Component);

	function Todo(props) {
		_classCallCheck(this, Todo);

		var _this = _possibleConstructorReturn(this, (Todo.__proto__ || Object.getPrototypeOf(Todo)).call(this, props));

		_this.state = { done: props.done, text: props.text };

		_this.handleClick = _this.handleClick.bind(_this);
		_this.handleChange = _this.handleChange.bind(_this);
		_this.handleSubmit = _this.handleSubmit.bind(_this);
		return _this;
	}

	_createClass(Todo, [{
		key: "handleClick",
		value: function handleClick(event) {
			this.setState(function (state) {
				return { done: !state.done };
			}, function (event) {
				this.handleSubmit(event);
			});
		}
	}, {
		key: "handleChange",
		value: function handleChange(event) {
			var text = event.target.value;
			console.log(text);
			this.setState(function (state) {
				return { text: text };
			});
		}
	}, {
		key: "handleSubmit",
		value: function handleSubmit(event) {
			console.log("submit");
			this.setState(function (state) {});
		}
	}, {
		key: "render",
		value: function render() {

			return React.createElement(
				"div",
				{ className: "todo" },
				React.createElement(
					"span",
					null,
					React.createElement("input", { type: "checkbox", checked: this.props.done, onClick: this.handleClick }),
					React.createElement("input", { type: "text", value: this.props.text, onChange: this.handleChange, onBlur: this.handleSubmit, placeholder: "Enter your Todo here" })
				)
			);
		}
	}]);

	return Todo;
}(React.Component);

ReactDOM.render(React.createElement(Todo, null), document.getElementById('root'));