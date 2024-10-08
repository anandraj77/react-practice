import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {

  return (
    <>
      <h1 className='bg-green-400 text-black p-4
      rounded-xl mb-4'>Tailwind Test</h1>
      <Card username="Anand" btnText="view Anand" />
      <Card username="Kaju" />
      <Card username="Kaju" btnText="view Kaju" />
    </>
  )
}

export default App
