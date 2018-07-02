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

var _routes = require("../routes");

var _web = require("../ethereum/web3");

var _web2 = _interopRequireDefault(_web);

var _campaign = require("../ethereum/campaign");

var _campaign2 = _interopRequireDefault(_campaign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/jamestuckett/Documents/Code/Learning/kickstart/components/RequestRow.js";


var RequestRow = function (_Component) {
    (0, _inherits3.default)(RequestRow, _Component);

    function RequestRow() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, RequestRow);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestRow.__proto__ || (0, _getPrototypeOf2.default)(RequestRow)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            approving: false,
            finalizing: false
        }, _this.onFinalize = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
            var address, campaign, accounts;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _this.setState({ finalizing: true });

                            address = _this.props.address;
                            campaign = (0, _campaign2.default)(address);
                            _context.next = 5;
                            return _web2.default.eth.getAccounts();

                        case 5:
                            accounts = _context.sent;
                            _context.next = 8;
                            return campaign.methods.finalizeRequest(_this.props.id).send({
                                from: accounts[0]
                            });

                        case 8:

                            _routes.Router.replaceRoute("/campaigns/" + address + "/requests");

                            _this.setState({ finalizing: false });

                        case 10:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _callee, _this2);
        })), _this.onApprove = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
            var address, campaign, accounts;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _this.setState({ approving: true });

                            address = _this.props.address;
                            campaign = (0, _campaign2.default)(address);
                            _context2.next = 5;
                            return _web2.default.eth.getAccounts();

                        case 5:
                            accounts = _context2.sent;
                            _context2.next = 8;
                            return campaign.methods.approveRequest(_this.props.id).send({
                                from: accounts[0]
                            });

                        case 8:

                            _routes.Router.replaceRoute("/campaigns/" + address + "/requests");

                            _this.setState({ approving: false });

                        case 10:
                        case "end":
                            return _context2.stop();
                    }
                }
            }, _callee2, _this2);
        })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(RequestRow, [{
        key: "render",
        value: function render() {
            var Row = _semanticUiReact.Table.Row,
                Cell = _semanticUiReact.Table.Cell;
            var _props = this.props,
                id = _props.id,
                approversCount = _props.approversCount;
            var _props$request = this.props.request,
                description = _props$request.description,
                value = _props$request.value,
                recipient = _props$request.recipient,
                approvalCount = _props$request.approvalCount,
                complete = _props$request.complete;

            var readyToFinalize = approvalCount > approversCount / 2;

            return _react2.default.createElement(Row, {
                disabled: complete,
                positive: readyToFinalize && !complete,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                }
            }, _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                }
            }, id), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 65
                }
            }, description), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 66
                }
            }, _web2.default.utils.fromWei(value, "ether")), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 67
                }
            }, recipient), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68
                }
            }, approvalCount, " / ", approversCount), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                }
            }, complete || readyToFinalize ? null : _react2.default.createElement(_semanticUiReact.Button, {
                loading: this.state.approving,
                onClick: this.onApprove,
                color: "green",
                basic: true,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
                }
            }, "Approve")), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 83
                }
            }, complete ? null : _react2.default.createElement(_semanticUiReact.Button, {
                loading: this.state.finalizing,
                onClick: this.onFinalize,
                color: "orange",
                basic: true,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 85
                }
            }, "Finalize")));
        }
    }]);

    return RequestRow;
}(_react.Component);

exports.default = RequestRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUmVxdWVzdFJvdy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlRhYmxlIiwiQnV0dG9uIiwiUm91dGVyIiwid2ViMyIsIkNhbXBhaWduIiwiUmVxdWVzdFJvdyIsInN0YXRlIiwiYXBwcm92aW5nIiwiZmluYWxpemluZyIsIm9uRmluYWxpemUiLCJzZXRTdGF0ZSIsImFkZHJlc3MiLCJwcm9wcyIsImNhbXBhaWduIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJmaW5hbGl6ZVJlcXVlc3QiLCJpZCIsInNlbmQiLCJmcm9tIiwicmVwbGFjZVJvdXRlIiwib25BcHByb3ZlIiwiYXBwcm92ZVJlcXVlc3QiLCJSb3ciLCJDZWxsIiwiYXBwcm92ZXJzQ291bnQiLCJyZXF1ZXN0IiwiZGVzY3JpcHRpb24iLCJ2YWx1ZSIsInJlY2lwaWVudCIsImFwcHJvdmFsQ291bnQiLCJjb21wbGV0ZSIsInJlYWR5VG9GaW5hbGl6ZSIsInV0aWxzIiwiZnJvbVdlaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU87O0FBQ2hCLEFBQVMsQUFBYzs7QUFFdkIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBYzs7Ozs7Ozs7O0ksQUFFQTs7Ozs7Ozs7Ozs7Ozs7O3dOQUNqQixBO3VCQUFRLEFBQ08sQUFDWDt3QkFGSSxBQUVRLEE7QUFGUixBQUNKLGlCLEFBSUosc0ZBQWEsbUJBQUE7bUNBQUE7MEVBQUE7MEJBQUE7cURBQUE7NkJBQ1Q7a0NBQUEsQUFBSyxTQUFTLEVBQUUsWUFBaEIsQUFBYyxBQUFjLEFBRXBCOztBQUhDLHNDQUdXLE1BSFgsQUFHZ0IsTUFIaEIsQUFHRCxBQUNGO0FBSkcsdUNBSVEsd0JBSlIsQUFJUSxBQUFTOzRDQUpqQjttQ0FLYyxjQUFBLEFBQUssSUFMbkIsQUFLYyxBQUFTOzs2QkFBMUI7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