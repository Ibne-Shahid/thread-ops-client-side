import React from 'react'
import Hero from '../../components/HomeComponents/Hero'
import OurProducts from '../../components/HomeComponents/OurProducts'
import HowItWorks from '../../components/HomeComponents/HowItWorks'
import Review from '../../components/HomeComponents/Review'

const reviewsPromise = fetch('/review.json').then(res=>res.json())


const Home = () => {
    
  return (
    <div>
        <Hero></Hero>
        <OurProducts></OurProducts>
        <HowItWorks></HowItWorks>
        <Review reviewsPromise={reviewsPromise}></Review>
    </div>
  )
}

export default Home