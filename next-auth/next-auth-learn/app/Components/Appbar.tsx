'use client'
import { signIn, signOut, useSession } from 'next-auth/react'
import React from 'react'

// We can use useSession Hook to show all the user data 
///But this is client side Component
const Appbar = () => {
  const session = useSession()
  return (
    <div>
       <button onClick={()=>{
        signIn()
       }}>Signin</button>
       <button onClick={()=>{
        signOut()
       }}>Logout</button> 
       {JSON.stringify(session)}
    </div>
  )
}

export default Appbar
