"use client"
import Image from 'next/image'
import img from 'public/images/imagensprincipais.jpg'
import img2 from 'public/images/imagensprincipais2.jpg'
import img3 from 'public/images/imagensprincipais3.jpg'
import img4 from 'public/images/imagensprincipais4.jpg'

import { useState } from 'react'

const slides = [img,img2,img3,img4]

export default function Carrossel(){

    const [atual, setAtual] = useState(0)
 
    const prev = ()=> setAtual(atual === 0 ? slides.length -1 : atual -1)
    const next = ()=> setAtual(atual === slides.length -1 ? 0 : atual +1)
   
    return(
        <div className='max-w-lg'>
            <div className='overflow-hidden relative'>
                <div className='flex transition-transform ease-out duration-500' style={{transform: `translatex(-${atual * 100}%)`}}>
                    {slides.map((s, i)=>(
                        <Image key={i} src={s} alt=''/>
                    ))}
                </div>
                <div className='absolute inset-0 flex items-center justify-between p-4'>
                    <button className='text-3xl font-black p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white' onClick={prev}>{'<'}</button>
                    <button className='text-3xl font-black p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white' onClick={next}>{'>'}</button>
                </div>

                <div>
                    <div>

                        {slides.map((_,i)=>(
                            <div key={i} onClick={() =>setAtual (i) } className='bg-indigo-700 transition-all w-3 h-3 rounded-full'></div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}