import React from 'react'
import { Link } from 'react-router'

const Hero = () => {
    return (
        <div>
            <div className='relative'>
                <img className='h-[450px] w-full' src="/hero-img.jpg" alt="" />
                <div className='absolute left-1/2 top-1/2 transform -translate-x-1/2 translate-y-12 flex space-x-4'>
                    <Link className='btn btn-primary'>Purchase Now</Link>
                    <Link className='btn btn-secondary'>Sell Now</Link>
                </div>

            </div>
        </div>
    )
}

export default Hero