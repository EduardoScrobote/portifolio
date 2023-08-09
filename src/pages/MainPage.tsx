import React from 'react'

import About from '../Components/About'

function MainPage() {

return (
    <div className='flex justify-center bg-purple-bg w-screen h-screen'>
        <div className=' border-purple-500 mt-28 border-2 rounded-2xl w-2/4 h-3/4'>
        <About />
        </div>
    </div>
)
}

export default MainPage