"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require("semantic-ui-react");

var _campaign = require("../../../ethereum/campaign");

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require("../../../ethereum/web3");

var _web2 = _interopRequireDefault(_web);

var _routes = require("../../../routes");

var _Layout = require("../../../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/jamestuckett/Documents/Code/Learning/kickstart/pages/campaigns/requests/new.js?entry";


var RequestNew = function (_Component) {
    (0, _inherits3.default)(RequestNew, _Component);

    function RequestNew() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, RequestNew);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestNew.__proto__ || (0, _getPrototypeOf2.default)(RequestNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            value: "",
            description: "",
            recipient: "",
            loading: false,
            errorMessage: ""
        }, _this.onSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var campaign, _this$state, description, value, recipient, accounts;

                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                event.preventDefault();
                                _this.setState({ loading: true, errorMessage: "" });

                                campaign = (0, _campaign2.default)(_this.props.address);
                                _this$state = _this.state, description = _this$state.description, value = _this$state.value, recipient = _this$state.recipient;
                                _context.prev = 4;
                                _context.next = 7;
                                return _web2.default.eth.getAccounts();

                            case 7:
                                accounts = _context.sent;
                                _context.next = 10;
                                return campaign.methods.createRequest(description, _web2.default.utils.toWei(value, "ether"), recipient).send({ from: accounts[0] });

                            case 10:
                                _routes.Router.pushRoute("/campaigns/" + _this.props.address + "/requests");
                                _context.next = 16;
                                break;

                            case 13:
                                _context.prev = 13;
                                _context.t0 = _context["catch"](4);

                                _this.setState({ errorMessage: _context.t0.message });

                            case 16:
                                _this.setState({ loading: false });

                            case 17:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[4, 13]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(RequestNew, [{
        key: "render",
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }, _react2.default.createElement(_routes.Link, {
                route: "/campaigns/" + this.props.address + "/requests",
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }, _react2.default.createElement("a", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            }, "Back")), _react2.default.createElement("h3", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            }, "Create a Request"), _react2.default.createElement(_semanticUiReact.Form, {
                onSubmit: this.onSubmit,
                error: !!this.state.errorMessage,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                }
            }, _react2.default.createElement("label", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                }
            }, "Description"), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.description,
                onChange: function onChange(event) {
                    return _this3.setState({
                        description: event.target.value
                    });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 65
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                }
            }, _react2.default.createElement("label", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 75
                }
            }, "Value In Ether"), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.value,
                onChange: function onChange(event) {
                    return _this3.setState({
                        value: event.target.value
                    });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 76
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 85
                }
            }, _react2.default.createElement("label", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 86
                }
            }, "Recipient"), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.recipient,
                onChange: function onChange(event) {
                    return _this3.setState({
                        recipient: event.target.value
                    });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 87
                }
            })), _react2.default.createElement(_semanticUiReact.Message, {
                error: true,
                header: "Oops!",
                content: this.state.errorMessage,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 96
                }
            }), _react2.default.createElement(_semanticUiReact.Button, {
                type: "submit",
                loading: this.state.loading,
                primary: true,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 101
                }
            }, "Create")));
        }
    }], [{
        key: "getInitialProps",
        value: function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(props) {
                var address;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                address = props.query.address;
                                return _context2.abrupt("return", { address: address });

                            case 2:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function getInitialProps(_x2) {
                return _ref3.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return RequestNew;
}(_react.Component);

exports.default = RequestNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9yZXF1ZXN0cy9uZXcuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJGb3JtIiwiQnV0dG9uIiwiSW5wdXQiLCJNZXNzYWdlIiwiQ2FtcGFpZ24iLCJ3ZWIzIiwiTGluayIsIlJvdXRlciIsIkxheW91dCIsIlJlcXVlc3ROZXciLCJzdGF0ZSIsInZhbHVlIiwiZGVzY3JpcHRpb24iLCJyZWNpcGllbnQiLCJsb2FkaW5nIiwiZXJyb3JNZXNzYWdlIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJjYW1wYWlnbiIsInByb3BzIiwiYWRkcmVzcyIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiY3JlYXRlUmVxdWVzdCIsInV0aWxzIiwidG9XZWkiLCJzZW5kIiwiZnJvbSIsInB1c2hSb3V0ZSIsIm1lc3NhZ2UiLCJ0YXJnZXQiLCJxdWVyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU0sQUFBUSxBQUFPOztBQUM5QixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVMsQUFBTSxBQUFjOztBQUM3QixBQUFPLEFBQVk7Ozs7Ozs7OztJLEFBRWI7Ozs7Ozs7Ozs7Ozs7Ozt3TkFDRixBO21CQUFRLEFBQ0csQUFDUDt5QkFGSSxBQUVTLEFBQ2I7dUJBSEksQUFHTyxBQUNYO3FCQUpJLEFBSUssQUFDVDswQixBQUxJLEFBS1U7QUFMVixBQUNKLGlCLEFBYUo7aUdBQVcsaUJBQUEsQUFBTSxPQUFOOzBFQUFBOzs4RUFBQTs4QkFBQTt5REFBQTtpQ0FDUDtzQ0FBQSxBQUFNLEFBQ047c0NBQUEsQUFBSyxTQUFTLEVBQUUsU0FBRixBQUFXLE1BQU0sY0FBL0IsQUFBYyxBQUErQixBQUV2Qzs7QUFKQywyQ0FJVSx3QkFBUyxNQUFBLEFBQUssTUFKeEIsQUFJVSxBQUFvQjs4Q0FDSyxNQUxuQyxBQUt3QyxPQUx4QyxBQUtDLDBCQUxELEFBS0MsYUFMRCxBQUtjLG9CQUxkLEFBS2MsT0FMZCxBQUtxQix3QkFMckIsQUFLcUI7Z0RBTHJCO2dEQUFBO3VDQVFvQixjQUFBLEFBQUssSUFSekIsQUFRb0IsQUFBUzs7aUNBQTFCO0FBUkgsb0RBQUE7Z0RBQUE7dUNBU0csU0FBQSxBQUFTLFFBQVQsQUFDRCxjQURDLEFBRUUsYUFDQSxjQUFBLEFBQUssTUFBTCxBQUFXLE1BQVgsQUFBaUIsT0FIbkIsQUFHRSxBQUF3QixVQUgxQixBQUlFLFdBSkYsQUFNRCxLQUFLLEVBQUUsTUFBTSxTQWZmLEFBU0csQUFNSSxBQUFRLEFBQVM7O2lDQUMzQjsrQ0FBQSxBQUFPLDBCQUNXLE1BQUEsQUFBSyxNQUR2QixBQUM2QixVQWpCMUI7Z0RBQUE7QUFBQTs7aUNBQUE7Z0RBQUE7Z0VBb0JIOztzQ0FBQSxBQUFLLFNBQVMsRUFBRSxjQUFjLFlBcEIzQixBQW9CSCxBQUFjLEFBQW9COztpQ0FFdEM7c0NBQUEsQUFBSyxTQUFTLEVBQUUsU0F0QlQsQUFzQlAsQUFBYyxBQUFXOztpQ0F0QmxCO2lDQUFBO2dEQUFBOztBQUFBO3lDQUFBO0E7Ozs7Ozs7Ozs7aUNBeUJGO3lCQUNMOzttQ0FDSSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSxhQUFBLGtCQUNJLEFBQUM7dUNBRU8sS0FBQSxBQUFLLE1BRFQsQUFDZSxVQUZuQjs7OEJBQUE7Z0NBQUEsQUFLSTtBQUxKO0FBQ0ksK0JBSUEsY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBTlIsQUFDSSxBQUtJLEFBRUosMEJBQUEsY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBUkosQUFRSSxBQUNBLHFDQUFBLEFBQUM7MEJBQ2EsS0FEZCxBQUNtQixBQUNmO3VCQUFPLENBQUMsQ0FBQyxLQUFBLEFBQUssTUFGbEIsQUFFd0I7OzhCQUZ4QjtnQ0FBQSxBQUlJO0FBSko7QUFDSSwrQkFHQyxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDQSxnQ0FBQSxBQUFDO3VCQUNVLEtBQUEsQUFBSyxNQURoQixBQUNzQixBQUNsQjswQkFBVSx5QkFBQTtrQ0FDTixBQUFLO3FDQUNZLE1BQUEsQUFBTSxPQUZqQixBQUNOLEFBQWMsQUFDZ0I7QUFEaEIsQUFDVixxQkFESjtBQUhSOzs4QkFBQTtnQ0FOUixBQUlJLEFBRUksQUFTSjtBQVRJO0FBQ0ksaUNBUVAsY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBQ0EsbUNBQUEsQUFBQzt1QkFDVSxLQUFBLEFBQUssTUFEaEIsQUFDc0IsQUFDbEI7MEJBQVUseUJBQUE7a0NBQ04sQUFBSzsrQkFDTSxNQUFBLEFBQU0sT0FGWCxBQUNOLEFBQWMsQUFDVTtBQURWLEFBQ1YscUJBREo7QUFIUjs7OEJBQUE7Z0NBakJSLEFBZUksQUFFSSxBQVNKO0FBVEk7QUFDSSxpQ0FRUCxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDQSw4QkFBQSxBQUFDO3VCQUNVLEtBQUEsQUFBSyxNQURoQixBQUNzQixBQUNsQjswQkFBVSx5QkFBQTtrQ0FDTixBQUFLO21DQUNVLE1BQUEsQUFBTSxPQUZmLEFBQ04sQUFBYyxBQUNjO0FBRGQsQUFDVixxQkFESjtBQUhSOzs4QkFBQTtnQ0E1QlIsQUEwQkksQUFFSSxBQVNKO0FBVEk7QUFDSSxpQ0FRUixBQUFDO3VCQUFELEFBRUk7d0JBRkosQUFFVyxBQUNQO3lCQUFTLEtBQUEsQUFBSyxNQUhsQixBQUd3Qjs7OEJBSHhCO2dDQXJDSixBQXFDSSxBQUtBO0FBTEE7QUFDSSxnQ0FJSixBQUFDO3NCQUFELEFBQ1MsQUFDTDt5QkFBUyxLQUFBLEFBQUssTUFGbEIsQUFFd0IsQUFDcEI7eUJBSEo7OzhCQUFBO2dDQUFBO0FBQUE7QUFDSSxlQXJEaEIsQUFDSSxBQVNJLEFBMENJLEFBVWY7Ozs7O21IQTlGNEIsQTs7Ozs7aUNBQ2pCO0EsMENBQVksTUFBTSxBLE1BQWxCLEE7a0VBRUQsRUFBRSxTQUFGLEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFaVSxBLEFBMEd6Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJuZXcuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2phbWVzdHVja2V0dC9Eb2N1bWVudHMvQ29kZS9MZWFybmluZy9raWNrc3RhcnQifQ==