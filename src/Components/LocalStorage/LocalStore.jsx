//In React, localStorage is used to store key-value pairs in the browser that persist even after the page is refreshed or the browser is closed. It's a part of the Web Storage API and is commonly used for persisting small amounts of data, such as user preferences, tokens, or application state.
//localStorage only stores strings, so if you want to store objects or arrays, you need to convert them to a string format (usually JSON) before storing them. You can use JSON.stringify() to convert an object to a string and JSON.parse() to convert it back to an object.
//localStorage.setItem(key, value): This method is used to store/save data in localStorage. The key is a string that identifies the data, and the value is also a string. If the value is not a string, it will be converted to a string using the toString() method.
//localStorage.getItem(key): This method retrieves the value associated with the specified key from localStorage. If the key does not exist, it returns null.
//localStorage.removeItem(key): This method removes the specified key and its associated value from localStorage.
//localStorage.clear(): This method removes all key-value pairs from localStorage.

import React, { useEffect, useState } from 'react'

const LocalStore = () => {
    const [name, setName] = useState("")

    const objectdata = {
        name: "John",
        age: 30,
        city: "New York"
    }

    useEffect (() => {
        const storedName = localStorage.getItem("name")
        if (storedName) {
            setName(storedName)
        }
    }, [])
    const handleChange = () => {
        localStorage.setItem("name", name)
        alert("Name saved to localStorage")
    }
    const handledelete = () => {
        localStorage.removeItem("name")
        setName("")
        alert("Name deleted from localStorage")
    }
    const handleObject = () => {
        localStorage.setItem("objectdata", JSON.stringify(objectdata))
        alert("Object saved to localStorage")
    }
   const savedObject = JSON.parse(localStorage.getItem("objectdata"))
    
    return (
        <div>
            <h1>hello,{name || "guest name"} </h1>

            <input type="text" value={name} onChange={(e) => setName (e.target.value)} placeholder = "pls enter your name"/>
            <button onClick={handleChange} className='bg-blue-500 p-3 text-white border-black rounded-2xl hover:border-none cursor-pointer'>Save to localStorage</button>

             <button onClick={handledelete} className='bg-red-500 p-3 text-white border-black rounded-2xl hover:border-none cursor-pointer'>Delete from localStorage</button>
           
            <button onClick={handleObject} className='bg-green-500 p-3 text-white border-black rounded-2xl hover:border-none cursor-pointer'>Save Object to localStorage</button>

            <div className='mt-5 bg-blue-200 p-5 w-200 h-200'>
                <h1 className='text-2xl font-bold'>Object data from localStorage:</h1>
                <p className='text-xl'>{savedObject ? `Name: ${savedObject.name}, Age: ${savedObject.age}, City: ${savedObject.city}` : "No object data found"}</p>
            </div>
        </div>
    )
}

export default LocalStore
   



