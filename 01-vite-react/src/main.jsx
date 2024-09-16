import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react';

function MyApp(){
  return(
    <div>
      <h1>Custom App</h1>
    </div>
  )
}

// THIS DOESN'T WORK
// const ReactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit google'
// }

const anotherElement = (
  <a href='https://google.com' target='_blank'>Visit Google !</a>
)

const anotherUser = "chai aur react"

// WILL HAVE TO USE THIS
const ReactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'click me to visit google',
  anotherUser
)


createRoot(document.getElementById('root')).render(
  ReactElement
  // <App />
)
 