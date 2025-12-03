import { useGSAP } from '@gsap/react';
import React from 'react'
import { useMediaQuery } from 'react-responsive';
import gsap from 'gsap';

export default function Showcase() {

    const isTablet = useMediaQuery({query: 'max-width: 1024px'});

    useGSAP(()=>{
        if(!isTablet){
            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: '#showcase',
                    start : 'top top',
                    end: 'bottom top',
                    scrub: true,
                    pin: true
                }
            });

            timeline.to('.mask img',{
                transform: 'scale(1.1)'
            }).to('.content', {opacity: 1 , y: 0 ,ease: 'power1.in'} )
        }
    },[isTablet])
  return (
    <section id='showcase'>
        <div className='media'>
            <video src="/videos/game.mp4" loop muted autoPlay playsInline />
            <div className='mask'>
                <img src="/mask-logo.svg" alt="apple-Logo" />
            </div>

        </div>

        <div className='content'>
            <div className='wrapper'>
                <div className='lg:max-w-md'>
                    <h2>Rock chip</h2>
                    <div className='space-y-5 mt-7 pe-10'>
                        <p>
                            introducing {" "}
                            <span className='text-white'>
                                the next generation of Apple silicon      
                            </span>
                            .M4 powers
                        </p>
                        <p>
                            It drives apple inteligence on Ipad , So you can write ,create and accomplish more with
                            ease. All in a design and unbelievabily, thin , light and powerfull.
                        </p>
                        <p>
                            A brand new display engine delivers breathtaking precisio. color accuracity and brightness
                            and next-gen CPU with hardware accelerated ray tracing brings console level graphics to your fingertips 
                        </p>
                        <p className='text-primary'>
                            Learn more about Apple intelligence 
                        </p>
                    </div>
                </div>
                <div className='max-w-3xs space-y-14'>
                    <div className='space-y-2'>
                        <p>Up to</p>
                        <h3>4X faster</h3>
                        <p>Pro rendering performace than M2 </p>
                    </div>
                    <div className='space-y-2'>
                        <p>Up to</p>
                        <h3>1.5X faster</h3>
                        <p>Pro rendering than M2</p>
                    </div>
                </div>
            </div>
            
        </div>
    </section>
  )
}
