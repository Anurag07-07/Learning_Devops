import axios from "axios"
import { useState } from "react"
import Turnstile from "react-turnstile"

const App = () => {

  const [token,setToken] = useState<string>("")

  return (
    <div>
      <input type="text" placeholder="Enter the OTP" />
      <input type="text" placeholder="Enter The Password" />
      <Turnstile onSuccess={(token)=>{
        setToken(token)
      }} sitekey="0x4AAAAAACD_9k8iBE7PO2lB"></Turnstile>
      <button onClick={()=>{
        axios.post('http://localhost:3000/reset-password',{
          email:"anurag07raj@gmail.com",
          otp:"123545",
          token:token
        })
      }}>Update password</button>
    </div>
  )
}

export default App