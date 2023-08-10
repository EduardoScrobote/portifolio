import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {

  return (
    <div className='text-white flex-col w-12 self-center'>
      <h1 className='p-4 hover:cursor-pointer hover:text-xl hover:text-sky-400'>Sobre</h1>
      <h1 className='p-4 hover:cursor-pointer hover:text-xl hover:text-sky-400'><Link to={'/projects'}>Projetos</Link></h1>
    </div>
  )
}

export default Sidebar