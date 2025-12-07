import { useQuery } from '@tanstack/react-query'
import React from 'react'
import useAxios from '../../Hooks/useAxios'
import Card from '../Card/Card'
import { Link } from 'react-router'
import { motion } from 'motion/react'

const OurProducts = () => {
  const fetchAxios = useAxios()

  const { data: ourProducts = [] } = useQuery({
    queryKey: ['topProducts'],
    queryFn: async () => {
      const res = await fetchAxios.get('/topProducts')
      return res.data
    },
  })

  return (
    <div className="py-15 px-10">
      <motion.h1 initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }} className="text-4xl text-center font-bold mb-10">Our Products</motion.h1>


      <div className=" grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center">
        {ourProducts.map((product) => <Card key={product._id} product={product}></Card>)}
      </div>
      <div className='text-center mt-15'>
        <Link to="/all-products"><button className='btn btn-primary'>View More</button></Link>
      </div>
    </div>

  )
}

export default OurProducts
