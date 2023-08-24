import { useState, useEffect } from "react";
import socketIO from 'socket.io-client';

const useFlagProvider=(accountKey)=>{
    const [data, setData] = useState(null);

    useEffect(() => {
        const clientId = atob(accountKey)?.split(':')[0] || "";
        const newSocket = socketIO('https://socket-runtime-flag-service.onrender.com');
        newSocket.emit('getFlagData',accountKey);
        newSocket.on(accountKey, (notificationData)=>{
            setData(notificationData);
        });
        if(clientId)
        {
            newSocket.on(clientId, (notificationData)=>{
                setData(notificationData);
            });
        }
      },[]);
      return [data];
}



export default useFlagProvider;