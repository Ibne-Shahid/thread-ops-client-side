import React from 'react'
import useAxios from '../../Hooks/useAxios'
import { useQuery } from '@tanstack/react-query'
import Card from '../../components/Card/Card'
import Spinner from '../../components/Loaders/Spinner'
import NoApp from '../../components/Errors/NoApp'


const AllProducts = () => {
  const fetchAxios = useAxios()

  const { data: Products = [], isLoading, error } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const res = await fetchAxios.get('/products')
      return res.data
    }
  })

  if (isLoading) return <Spinner></Spinner>
  if (error) return <NoApp></NoApp>

  return (
    <div className="container mx-auto px-5 py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        All Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {Products.map((product) => (
          <Card key={product._id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default AllProducts
