import { useEffect, useState } from "react"

const App = () => {
  const [socket,setSocket] = useState<WebSocket | null>(null)
  const [message,setMessage] = useState<string>("") 
  const [latestmessage,setLatestMessage] = useState<string>("") 
  useEffect(()=>{

    const socket = new WebSocket('ws://localhost:8080')
    socket.onopen = ()=>{
      console.log(`Connected`);
      setSocket(socket)
    }

    socket.onmessage = (message)=>{
      console.log(`Message is ${message.data}`);
      setLatestMessage(message.data)
    }
    return ()=>{
      socket.close()
    }
  },[]) 

  if (!socket) {
    console.log(` Connection take a while`);
  }

  return (
    <div>
      <input type=" text" placeholder="Enter the Message" onChange={(e)=>setMessage(e.target.value)}></input>
      <button onClick={()=>{
        socket?.send(message)
      }}>Send</button>
      <div>{latestmessage}</div>
    </div>
  )
}

export default App