import React from 'react'
import UseState from './Components/Static/UseState'
import LandingPage from './Components/Static/LandingPage'
import UserContextA from './Components/GlobalContext/UserContextA'
import UseReducer from './Components/Static/UseReducer'
import UseEffect from './Components/Static/UseEffect'
import LocalStore from './Components/LocalStorage/LocalStore'



function App() {
  return (
    <div>
      {/* <UseState /> */}
      {/* <LandingPage /> */}
      {/* <UserContextA /> */}
      {/* <UserContextB /> */}
      {/* <UserContextC /> */}
      {/* <UserContextD /> */}
    
      {/* <UseReducer/> */}
      <UseEffect />
      <LocalStore />
     
    </div>
  )
}

export default App
