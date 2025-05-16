//The useEffect Hook allows you to perform side effects in your components.Some examples of side effects are: fetching data, directly updating the DOM, and timers.useEffect accepts two arguments. The second argument is optional. it listens to re-rendering of the component. 
import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [name, setName] = useState("")

    useEffect(() => {
       console.log("Name changed to: ", name)
    }, [name])

  return (
    <div className='h-30 flex gap-5 bg-red-500'>
      <input type="text"  value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter your name' className='border-2 border-black rounded-2xl p-2 w-[500px] h-[60px] mt-10' />

        <p className='text-2xl font-bold text-white'>{name}</p>
    </div>
  )
}

export default UseEffect
