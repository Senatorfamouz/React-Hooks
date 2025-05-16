import React, { useReducer } from 'react'

const ACTIONS = {
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT',
    RESET: 'RESET'
}

const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.INCREMENT:
            return {count: state.count + 1};
            case ACTIONS.DECREMENT:
                return {count: Math.max(0, state.count - 1)};
                case ACTIONS.RESET:
                    return {count: 0}
    }
}
const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, {count: 0})
  return (
    <div className='flex gap-4 justify-center items-center mt-7 bg-blue-500 h-100'>
        <p>{state.count}</p>
        <button className='bg-green-600 p-3 text-white border-black rounded-2xl hover:border-none cursor-pointer' onClick={() => dispatch ({type: ACTIONS.DECREMENT})}>Decrement</button>
        <button className='bg-blue-600 p-3 text-white border-black rounded-2xl hover:border-none cursor-pointer' onClick={() => dispatch ({type: ACTIONS.INCREMENT})}>Increment</button>
        <button className='bg-red-600 p-3 text-white border-black rounded-2xl hover:border-none cursor-pointer' onClick={() => dispatch ({type: ACTIONS.RESET})}>Reset</button>
    </div>
  )
}
export default UseReducer

