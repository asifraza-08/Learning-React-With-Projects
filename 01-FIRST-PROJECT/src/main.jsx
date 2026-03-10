/* eslint-disable no-unused-vars */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App.jsx'



// eslint-disable-next-line react-refresh/only-export-components
function MyApp(){
  return(
    <div>
      <h1>Hi I Am ASIF !</h1>
    </div>
  )
}

// const ReactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "click me to visit google",
// };




const anotherElement =(
  <a href='https://google.com' target='_blank'>Click here to visit google</a> 
)


// core React 

const anotherUser = "HELLO!"

const createELementByReact = React.createElement(
  'a',
  {href:'https://google.com', target:"_blank"},
  'click me to visit google',
  anotherUser
)














createRoot(document.getElementById('root')).render(
    // <MyApp />
    // <ReactElement />
    // anotherElement
    createELementByReact
)
