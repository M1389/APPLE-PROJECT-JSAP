import React from 'react'
import { performanceImages } from '../Constants'

export default function Performance() {
  return (
    <section id='performance'>
        <h2>Next level graphic performace. Game On</h2>

        <div className='wrapper'>
            {performanceImages.map((image)=>(
              <img key={image.id} src={image.src} alt={image.id}/>
            ))}
        </div>


        <div className='content'>
            <p>Run Graphic intensive with workflows with responsiveness that keeps up your imagination
               The M4 family of chips feature a GPU with second-generation hardware-accelerated ray tracing engine
               that renders images faster
               <span className='text-white'> 
               so gaming feels more immersive and realastic than ever
               </span>
               and Dynamic
               Cashing optimazes fast on-chip memory to dramatically increase avarage GPU ulization -- driving a
               hyge performance boost for the most demanding pro apps and games.
            </p>
        </div>
    </section>
  )
}
