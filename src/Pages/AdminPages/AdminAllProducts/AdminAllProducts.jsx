import React from 'react'
import useAxiosSecure from '../../../Hooks/useAxiosSecure'
import { useQuery } from '@tanstack/react-query'
import { toast } from 'react-toastify'

const AdminAllProducts = () => {
    const axiosSecure = useAxiosSecure()

    const { data: products = [], refetch: refetchProducts } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await axiosSecure.get('/products')
            return res.data
        }
    })

    const { data: topProducts = [], refetch: refetchTop, isLoading: topLoading } = useQuery({
        queryKey: ['topProducts'],
        queryFn: async () => {
            const res = await axiosSecure.get('/topProducts')
            return res.data
        }
    })

    const handleToggleHome = async (product) => {
        console.log("toggle clicked:", product.productName);
        try {
            const updatedStatus = !product?.showOnHomePage
            const res = await axiosSecure.patch(`/products/${product._id}/showOnHome`, { showOnHomePage: updatedStatus })
            if (res.data.modifiedCount > 0) {
                await refetchProducts()
                await refetchTop()
                toast.success("Status Updated!")
            }
        } catch (err) {
            toast.error('Something went wrong!')
        }
    }

    return (
        <div className="p-4 md:p-8">
            <h1 className="text-2xl font-bold mb-6">All Products</h1>

            {/* Mobile Card View */}
            <div className="md:hidden space-y-4">
                {products.length === 0 ? (
                    <div className="text-center py-10 bg-white shadow rounded-lg">
                        <p className="text-gray-500">No products available</p>
                    </div>
                ) : (
                    products.map((product) => (
                        <div key={product._id} className="bg-white shadow rounded-lg p-4 border border-gray-100">
                            <div className="flex items-center space-x-4">
                                <img src={product.images[0]} alt={product.productName} className="w-20 h-20 object-cover rounded-md" />
                                <div className="flex-grow">
                                    <h3 className="font-semibold text-gray-800">{product.productName}</h3>
                                    <p className="text-sm text-gray-500">{product.category}</p>
                                    <p className="font-medium text-gray-900">${product.price}</p>
                                </div>
                            </div>

                            <div className="mt-4 flex justify-between items-center">
                                <div>
                                    <input
                                        type="checkbox"
                                        className="toggle toggle-primary"
                                        onChange={() => handleToggleHome(product)}
                                        checked={product.showOnHomePage}
                                        disabled={
                                            topProducts.length >= 6 && !product.showOnHomePage
                                        }
                                    />


                                    <label className="ml-2 text-sm">Show on Home</label>
                                </div>

                                <div className="flex gap-2">
                                    <button className="btn btn-primary text-white text-sm">Update</button>
                                    <button className="btn btn-error text-white text-sm">Delete</button>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* Desktop Table View */}
            <div className="hidden md:block overflow-x-auto bg-white shadow rounded-lg">
                <table className="min-w-full text-sm">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="p-3 text-left font-semibold">Image</th>
                            <th className="p-3 text-left font-semibold">Product Name</th>
                            <th className="p-3 text-left font-semibold">Price</th>
                            <th className="p-3 text-left font-semibold">Category</th>
                            <th className="p-3 text-left font-semibold">Created By</th>
                            <th className="p-3 text-left font-semibold">Show on Home</th>
                            <th className="p-3 text-center font-semibold">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {products.length === 0 ? (
                            <tr>
                                <td colSpan="7" className="p-8 text-center text-gray-500">
                                    No products available
                                </td>
                            </tr>
                        ) : (
                            products.map((product) => (
                                <tr key={product._id} className="border-b hover:bg-gray-50">
                                    <td className="p-3">
                                        <img src={product.images[0]} alt={product.productName} className="w-16 h-16 object-cover rounded-md" />
                                    </td>
                                    <td className="p-3 font-medium">{product.productName}</td>
                                    <td className="p-3">${product.price}</td>
                                    <td className="p-3">{product.category}</td>
                                    <td className="p-3">{product.createdBy}</td>
                                    <td className="p-3">
                                        <input
                                            type="checkbox"
                                            className="toggle toggle-primary"
                                            onChange={() => handleToggleHome(product)}
                                            checked={product.showOnHomePage}
                                            disabled={
                                                topProducts.length >= 6 && !product.showOnHomePage
                                            }
                                        />


                                    </td>
                                    <td className="p-3 text-center">
                                        <div className="flex gap-2 justify-center">
                                            <button className="btn btn-primary hover:bg-primary/90 text-white rounded text-sm font-medium transition-colors">
                                                Update
                                            </button>
                                            <button className="btn btn-error text-white rounded text-sm font-medium transition-colors">
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AdminAllProducts
