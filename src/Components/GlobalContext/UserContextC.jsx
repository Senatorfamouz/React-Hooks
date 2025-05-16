import React from 'react'
import UserContextD from './UserContextD'

const UserContextC = () => {
  return (
    <div className=' border-2 border-red-500 p-5'>
        <h1 className='text-2xl font-bold'>Usertext C </h1>
        <p>hello</p>
        <UserContextD />
      
    </div>
  )
}

export default UserContextC
