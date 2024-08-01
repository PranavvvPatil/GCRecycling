import React from 'react'
import {TEAMMATES} from '../constants'
import Team from './Team'

const Team2 = () => {
  return (
    <section className='container mx-auto py-16' id="team">
        <h2 className='mb-8 text-center text-3xl tracking-tighter lg:text-4xl'>Our Team</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
         {TEAMMATES.map((project,index)=> (
            <Team key={index} project={project} />

         ))}

        </div>
    </section>
  )
}

export default Team2