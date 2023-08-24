"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var socket_io_client_1 = tslib_1.__importDefault(require("socket.io-client"));
var useOnFlyFlagProvider = function (accountKey) {
    var _a = (0, react_1.useState)(null), data = _a[0], setData = _a[1];
    (0, react_1.useEffect)(function () {
        var _a;
        var clientId = ((_a = atob(accountKey)) === null || _a === void 0 ? void 0 : _a.split(':')[0]) || '';
        var newSocket = (0, socket_io_client_1.default)('https://socket-runtime-flag-service.onrender.com');
        newSocket.emit('getFlagData', accountKey);
        newSocket.on(accountKey, function (notificationData) {
            setData(notificationData);
        });
        if (clientId) {
            newSocket.on(clientId, function (notificationData) {
                setData(notificationData);
            });
        }
    }, []);
    return [data];
};
exports.default = useOnFlyFlagProvider;
//# sourceMappingURL=useOnFlyFlagProvider.js.map