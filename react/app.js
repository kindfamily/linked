"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var form = {
  steps: [{
    id: 1,
    color: "yellow",
    question: "What's your name?",
    answer: "text",
    options: ["Yes", "No", "Maybe"],
    info: "If you need some help, call us at 5489584584"
  }, {
    id: 2,
    color: "orangered",
    question: "Do you like to party?",
    answer: "selection",
    options: ["Yes", "No", "Maybe"],
    info: ":D"
  }, {
    id: 3,
    color: "lightgreen",
    question: "Really?",
    answer: "selection",
    options: ["Of course", "I'm not sure", "o_O"],
    info: "It's fine!"
  }]
};

var NUM_SLIDES = form.steps.length;
var slidenum = 0;

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.state = {
      currentslide: form.steps[0]
    };

    _this.navigateLeft = _this.navigateLeft.bind(_this);
    _this.navigateRight = _this.navigateRight.bind(_this);
    return _this;
  }

  App.prototype.navigateLeft = function navigateLeft() {
    if (slidenum > 0) {
      slidenum--;
      this.setState(function () {
        return { currentslide: form.steps[slidenum] };
      });
    }
  };

  App.prototype.navigateRight = function navigateRight() {
    if (slidenum < NUM_SLIDES - 1) {
      slidenum++;
      this.setState({ currentslide: form.steps[slidenum] });
    }
  };

  App.prototype.render = function render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "section",
        { className: "slide-header" },
        React.createElement(
          "div",
          { className: "slide-question" },
          React.createElement(
            "h1",
            null,
            this.state.currentslide.question
          )
        ),
        React.createElement(
          "div",
          { className: "slide-id", style: { backgroundColor: this.state.currentslide.color } },
          React.createElement(
            "p",
            null,
            this.state.currentslide.id
          )
        )
      ),
      React.createElement(
        "section",
        { className: "slide-answer" },
        this.state.currentslide.answer === "text" && React.createElement("input", { type: "text", className: "input-text" }),
        this.state.currentslide.answer === "selection" && this.state.currentslide.options.map(function (option) {
          return React.createElement(
            "a",
            null,
            option
          );
        })
      ),
      React.createElement(
        "section",
        { className: "slider-footer" },
        React.createElement(
          "div",
          { className: "slider-info" },
          "INFO: ",
          this.state.currentslide.info
        ),
        React.createElement(
          "div",
          { className: "slider-nav" },
          React.createElement(
            "a",
            { onClick: this.navigateLeft, style: this.state.currentslide.id === 1 ? { display: 'none' } : { display: 'flex' }, className: "nav-arrow left-arrow" },
            "◀ PREVIOUS"
          ),
          React.createElement(
            "a",
            { onClick: this.navigateRight, className: "nav-arrow right-arrow" },
            this.state.currentslide.id === NUM_SLIDES ? 'SUBMIT' : 'NEXT ▶'
          )
        )
      )
    );
  };

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('container'));