"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = require("react");
var _socket = _interopRequireDefault(require("socket.io-client"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const useFlagProvider = accountKey => {
  const [data, setData] = (0, _react.useState)(null);
  (0, _react.useEffect)(() => {
    var _atob;
    const clientId = ((_atob = atob(accountKey)) === null || _atob === void 0 ? void 0 : _atob.split(':')[0]) || "";
    const newSocket = (0, _socket.default)('https://socket-runtime-flag-service.onrender.com');
    newSocket.emit('getFlagData', accountKey);
    newSocket.on(accountKey, notificationData => {
      setData(notificationData);
    });
    if (clientId) {
      newSocket.on(clientId, notificationData => {
        setData(notificationData);
      });
    }
  }, []);
  return [data];
};
var _default = useFlagProvider;
exports.default = _default;