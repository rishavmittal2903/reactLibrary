import { useState, useEffect } from 'react'
import socketIO from 'socket.io-client'

const useOnFlyFlagProvider = (accountKey: string) => {
  const [data, setData] = useState(null)

  useEffect(() => {
    const clientId:string = atob(accountKey)?.split(':')[0] || ''
    const newSocket:any = socketIO('https://socket-runtime-flag-service.onrender.com')
    newSocket.emit('getFlagData', accountKey)
    newSocket.on(accountKey, (notificationData:any) => {
      setData(notificationData)
    })
    if (clientId) {
      newSocket.on(clientId, (notificationData:any) => {
        setData(notificationData)
      })
    }
  }, [])
  return [data]
}

export default useOnFlyFlagProvider
