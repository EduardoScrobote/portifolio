import React from 'react'

import { BiLogoTailwindCss, BiLogoJavascript, BiLogoTypescript, BiLogoReact, BiLogoNodejs } from 'react-icons/bi'
import { GrMysql } from 'react-icons/gr'

function About() {
  return (
    <div>
        <div className='flex items-center flex-col text-white p-8'>
          <div className='flex justify-center bg-perf-img bg-cover ml-14 w-44 h-44 rounded-full'></div>
            <h1 className='text-2xl mt-14'>Olá, me chamo Eduardo Rafael Scrobote!</h1>
            <h2 className='mt-4 mb-4 text-xl'>Desenvolvedor front-end!</h2>
            <p className='text-center text-xl'>
              Comecei a programar a menos de um ano, 
              estudei sozinho, utilizando cursos técnicos e documentação.
              Atualmente estou focado em entrar no mercado para isso continuo 
              estudando e aprendendo constantemente!
            </p>
            <p className='mt-4 text-2xl'>
              Minhas principais habilidades são:
            </p>
            <div className='flex flex-row mt-14'>
                <BiLogoJavascript color='yellow' size='54'/>
                <BiLogoTypescript size='54' color="#0d36db"/>
                <BiLogoReact size='54'/>
                <BiLogoNodejs size='54' color="green"/>
                <BiLogoTailwindCss size='54' color="cyan"/>
                <GrMysql size='54' color="#205cd4"/>
            </div>
          </div>
    </div>
  )
}

export default About