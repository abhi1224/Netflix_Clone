import { useState } from 'react'
import './App.css'
import Section1 from './components/Section1'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  const data = [
    {
      text:"Stories tailored to your taste",
      imgUrl:""
    },
    {
      text:"card 2"
    }
  ]

  return (
    <>
     <div className="bg-black">
        <Section1 />
        {data.map((item , index) => (
          <Card  data = {item}/>
        ))}
        
     </div>
    </>
  )
}

export default App
