import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Form from './Form.jsx'
import List from './List.jsx'
import './App.css'

function App() {
  const [list, setList] = useState(document.cookie.length ? JSON.parse(document.cookie) : []);
  
  return (
    <div className='container h-full'>
      <h1 className='mb-10'>To Do List</h1>
      <div className='h-4/5 flex flex-col justify-between border-2'>
        <Form list={list} setList={setList} />
        <List list={list} setList={setList}/>
      </div>
    </div>
  )
}

export default App
