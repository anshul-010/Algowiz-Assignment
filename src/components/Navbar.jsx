import React, { useEffect, useState } from 'react'
import useWebSocket from 'react-use-websocket';

const Navbar = () => {
  const [data, setData] = useState([]);
    const socketUrl  = "wss://functionup.fintarget.in/ws?id=fintarget-functionup"
    const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl);

    useEffect(() =>{
        if(lastMessage){
            const StringData = JSON.parse(lastMessage.data);
            setData(StringData)
        }
    },[lastMessage])
    // console.log(data)
  return (
    <div style={{border:"1px solid", display:"flex",justifyContent:"space-evenly"}}>
      <h3>Nifty: <span>{data?.Nifty}</span></h3>
      <h3>BankNifty: <span>{data?.Banknifty}</span></h3>
      <h3>FinNifty: <span>{data?.Finnifty}</span></h3>
    </div>
  )
}

export default Navbar