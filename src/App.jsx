import { useState } from 'react'
import './App.css'
import Section1 from './components/Section1'
import Section4 from './components/Section4'
import Card from './components/Card'
import MyAccordian from './components/MyAccordian'

function App() {
  // const [count, setCount] = useState(0)

  const data = [
    {
      text: "Stories tailored to your taste",
      image:"https://images.unsplash.com/photo-1556848527-f7c548b972b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhhbmR8ZW58MHx8MHx8fDA%3D"
    },
    {
      text: "Cancel or switch plans anytime",
      image:"https://images.unsplash.com/photo-1596633607590-7156877ef734?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hha2luZyUyMGhhbmR8ZW58MHx8MHx8fDA%3D"
    },
    {
      text: "A place just for kids",
      image:"https://images.unsplash.com/photo-1617114890850-421519e5eabb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJlZCUyMGhlYXJ0fGVufDB8fDB8fHww"
    },
    {
      text: "For your phone, tablet, laptop, and TV",
      image:"https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9uaXRlciUyMHdpdGglMjBtb2JpbGV8ZW58MHx8MHx8fDA%3D"
    },
  ]

 

  return (
    <>
      <div className="bg-black">
        <Section1 />

        <div className="text-white w-[90%] m-auto mt-10">
          <h3 className='text-3xl px-10 py-5 font-semibold'>More reasons to join</h3>
          <div className="flex justify-center items-center flex-wrap gap-10 py-10">
            {data.map((item, index) => (
              <Card data={item} />
            ))}
          </div>
        </div>
        <MyAccordian />
        <Section4 />
      </div>
    </>
  )
}

export default App
