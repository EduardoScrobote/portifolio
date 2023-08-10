import React from 'react'
import {Route, Routes} from 'react-router-dom'

import About from '../Components/About'
import Sidebar from '../Components/Sidebar'
import Projects from '../Components/Projects'

function MainPage() {

return (
    <div className='flex justify-center bg-purple-bg w-screen h-screen'>
        <div className='flex text-start'>
        <Sidebar />
        </div>
        <div className='w-screen h-screen flex justify-center'>
        <div className=' self-center shadow-lg shadow-purple-400 bg-purple-700 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border-2 border-purple-400 w-2/4 h-3/4'>
        <Routes>
        <Route path='/' element={<About />}/>
        <Route path='/projects' element={<Projects />}/>
        </Routes>
        </div>
        </div>
    </div>
)
}

export default MainPage