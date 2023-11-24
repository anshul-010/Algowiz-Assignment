import React, { useState, useCallback, useEffect } from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';
import CandlestickChart from './CandlestickChart';
import Navbar from './Navbar';


const WebSocket = () => {
    const [data, setData] = useState([]);
    const [time,setTime] = useState(0)
    const socketUrl  = "wss://functionup.fintarget.in/ws?id=fintarget-functionup"
    const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl);

    useEffect(() =>{
        if(lastMessage){
            const StringData = JSON.parse(lastMessage.data);
            // console.log(lastMessage)
            setTime(lastMessage.timeStamp)
            setData((pre)=>[...pre,StringData])
        }
    },[lastMessage])

    console.log(data)

  return (
    <div style={{margin:"auto"}}>
        <Navbar/>
        <CandlestickChart data={data} time={time}/>
        {/* {data?.map((ele)=><CandlestickChart data={ele}/>)} */}
    </div>
  )
}

export default WebSocket