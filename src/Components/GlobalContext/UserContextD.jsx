import React, {useContext} from 'react'
import { myContext } from './UserContextA'


const UserContextD = () => {
    const uservalue = useContext(myContext)
  return (
    <div className=' border-2 border-purple-500 p-5'>
        <h1 className='text-2xl font-bold'>Usertext D </h1>
        <p> {`hello ${uservalue.user}`} </p>
        <p> {`hello ${uservalue.age}`} </p>
        
      
    </div>
  )
}

export default UserContextD
