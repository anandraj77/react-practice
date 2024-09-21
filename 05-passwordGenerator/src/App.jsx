import { parse } from 'postcss'
import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  // useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) {
      str += "0123456789"
    }if (charAllowed) {
      str += "!@#$%^&*-_+=[]{}~`"
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword]) //usecallback trying to optimize

  // trying to re-run in case of any updates(updating values)
  useEffect(() => {passwordGenerator()}, [length, numberAllowed, charAllowed, passwordGenerator])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 999)
    window.navigator.clipboard.writeText(password)
  }, [password])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md
        rounded-lg p-4 my-8 text-orange-500 bg-gray-600">
          <h1 className='text-2xl text-center text-white'>Password Generator</h1>
          <div className="flex shadow rounded-lg overflow-hidden m-4">
            <input
              type="text" 
              value={password}
              className='outline-none w-full py-2 px-3'
              placeholder='password'
              readOnly
              ref={passwordRef}
            />
            <button className='outline-none bg-blue-700 text-white
              px-3 py-0.5 shrink-0' onClick={copyPasswordToClipboard}>Copy</button>
          </div>
          <div className="flex text-sm gap-x-2">
            <div className="flex items-center gap-x-1">
              <input 
                className='cursor-pointer'
                type="range" 
                min={6}
                max={50}
                value={length}
                onChange={(e) => {setLength(e.target.value)}}
              />
              <label>Length: {length}</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input 
                type="checkbox" 
                defaultChecked={numberAllowed}
                id='numberInput'
                onChange={() => {
                  setNumberAllowed((prev) => !prev);
                }}
              />
              <label htmlFor="numberInput">Numbers</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input 
                type="checkbox" 
                defaultChecked={charAllowed}
                id='charInput'
                onChange={() => {
                  setCharAllowed((prev) => !prev);
                }}
              />
              <label htmlFor="charInput">Characters</label>
            </div>

          </div>
      </div>
    </>
  )
}

export default App
