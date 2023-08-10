import React from 'react'

import About from '../Components/About'

function MainPage() {

return (
    <div className='flex justify-center bg-purple-bg w-screen h-screen'>
        <div className=' self-center bg-purple-700 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border-2 border-purple-400 w-2/4 h-3/4'>
        <About />
        </div>
    </div>
)
}

export default MainPage