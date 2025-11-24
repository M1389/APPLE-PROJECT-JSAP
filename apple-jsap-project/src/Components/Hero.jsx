import React, { useEffect, useRef } from 'react'

export default function Hero() {
    const videoRef = useRef()

    useEffect(()=>{
        if(videoRef.current) videoRef.current.playbackRate = 2;
    },[])
  return (
    <section id='hero'>
        <div>
            <h1>MacBook Pro</h1>
            <img src="/title.png" alt="Macbook img" />
        </div>

        <video ref={videoRef} src="/videos/hero.mp4" autoPlay muted playsInline></video>

        <button>Buy</button>

        <p>from 1599 or 133/month for 12 month</p>
    </section>
  )
}
