import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseContextApi from './Context/useContextApi'
import ApiContext from './ApiContext'
import ItemList from './assets/ItemList'
import Index from './LastQuestionAnswer/question'

function App() {
  const [count, setCount] = useState(0)

  return (

    <>
      <UseContextApi>
        <h1>This is a Context api question</h1>
        <ApiContext />
        <ItemList />
        <Index />
      </UseContextApi>
    </>
  )
}

export default App
