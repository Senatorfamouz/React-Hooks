import React from 'react'
import UserContextC from './UserContextC'

const UserContextB = () => {
  return (
    <div className=' border-2 border-blue-500 p-5'>
        <h1 className='text-2xl font-bold'>Usertext B </h1>
        <p></p> 
        <UserContextC />
      
    </div>
  )
}

export default UserContextB
