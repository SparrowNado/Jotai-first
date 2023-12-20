import { useState } from 'react'


import './App.css'
import { Provider, atom, useAtom } from 'jotai';


const WordAtom = atom('')
const WordLengthAtom = atom((get)  => get(WordAtom).length)
const ForceUpperCase = atom((get ) => get(WordAtom).toUpperCase ()) 


const Input = ()  => {
const [text, setText] = useAtom(WordAtom)
return <input value={text} onChange={(e) => setText(e.target.value)}/>
}

const CharCount = () => {
const [len] = useAtom(WordLengthAtom)
return <div>Length: {len}</div>
}

const Uppercase = () => {
const [uppercase] = useAtom(ForceUpperCase)
return <div>Uppercase: {uppercase}</div>
}









function App() {
  

  return (
    <>
    <Provider>
      <Input/>
      <CharCount/>
      <Uppercase/>
      
    </Provider>
    </>
  )
}

export default App
