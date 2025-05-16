import React, { createContext, useState} from 'react'
import UserContextB from './UserContextB'

export const myContext = createContext()
const UserContextA = () => {
    const [user, setUser] = useState("Famous")
    const [age, setAge] = useState(20)

   
  return (
    <div style={{border: "2px solid black", padding: "10px", backgroundColor: "white"}}>
      <h1>User Context A</h1>
      {`hello ${user}`}
      <myContext.Provider value={{user, setUser, age, setAge}}>
        <UserContextB  />
        </myContext.Provider>
      
    </div>
  )
}

export default UserContextA
