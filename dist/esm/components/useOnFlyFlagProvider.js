import { useState, useEffect } from 'react';
import socketIO from 'socket.io-client';
var useOnFlyFlagProvider = function (accountKey) {
    var _a = useState(null), data = _a[0], setData = _a[1];
    useEffect(function () {
        var _a;
        var clientId = ((_a = atob(accountKey)) === null || _a === void 0 ? void 0 : _a.split(':')[0]) || '';
        var newSocket = socketIO('https://socket-runtime-flag-service.onrender.com');
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
export default useOnFlyFlagProvider;
//# sourceMappingURL=useOnFlyFlagProvider.js.map