import useAxiosSecure from '../../../Hooks/useAxiosSecure'
import { useQuery } from '@tanstack/react-query'
import Spinner from '../../../components/Loaders/Spinner'
import { Link } from 'react-router'
import useRoles from '../../../Hooks/useRoles'
import useAuth from '../../../Hooks/useAuth'
import { toast } from 'react-toastify'

const AdminAllOrders = () => {
    const axiosSecure = useAxiosSecure()
    const user = useRoles()
    const { firebaseUser } = useAuth()

    const { data: myPendingorders = [], isLoading, refetch } = useQuery({
        queryKey: ['orders', firebaseUser?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/orders?sellerEmail=${firebaseUser?.email}`)
            return res.data
        }
    })

    const pendingOrders = myPendingorders.filter(orders => orders?.status === "Pending")

    const handleApproveOrder = async (id) => {
        try {
            const res = await axiosSecure.patch(`/orders/${id}`, {
                status: 'Approved'
            });

            if (res.data.modifiedCount > 0) {
                refetch()
                toast.success('Order approved!')
            }
        } catch (error) {
            toast.error('Sorry, something went wrong!')
        }
    };

    const handleRejectOrder = async (id) => {
        try {
            const res = await axiosSecure.patch(`/orders/${id}`, {
                status: 'Rejected'
            });

            if (res.data.modifiedCount > 0) {
                refetch()
                toast.success('Order Rejected!')
            }
        } catch (error) {
            toast.error('Sorry, something went wrong!')
        }
    }


    if (isLoading) return <Spinner />
    if (user?.role === "manager" & user?.status === "pending") return <ManagerApprovalPending></ManagerApprovalPending>

    return (
        <div className="p-4 md:p-8 min-h-screen">
            <h1 className="text-2xl font-bold mb-6">Pending Orders</h1>

            {/* Mobile Card View */}
            <div className="md:hidden space-y-4">
                {pendingOrders.length === 0 ? (
                    <div className="text-center py-10 bg-white shadow rounded-lg">
                        <p className="text-gray-500">No orders found</p>
                    </div>
                ) : (
                    pendingOrders.map((order) => (
                        <div
                            key={order._id}
                            className="bg-white shadow rounded-lg p-4 border border-gray-100"
                        >
                            <div className="flex justify-between items-start mb-3">
                                <div>
                                    <h3 className="font-semibold text-gray-800">{order.productTitle}</h3>
                                    <p className="text-xs text-gray-500 mt-1">
                                        Order ID: {order._id}
                                    </p>
                                    <p className="text-xs text-gray-500 mt-1">
                                        Customer: {order.firstName} {order.lastName}
                                    </p>
                                    <p className="text-xs text-gray-500 mt-1"> Order Date:{" "}
                                        {new Date(order.orderDate).toLocaleDateString('en-US', {
                                            year: 'numeric',
                                            month: 'numeric',
                                            day: 'numeric',
                                        })}{" "}
                                        {new Date(order.orderDate).toLocaleTimeString('en-US', {
                                            hour: '2-digit',
                                            minute: '2-digit',
                                        })}
                                    </p>
                                </div>
                            </div>

                            <div className='mb-2'>
                                <p className="text-gray-500 text-xs">Quantity</p>
                                <p className="font-medium">{order.quantity}</p>
                            </div>

                            <div className='flex gap-2'>
                                <button onClick={() => handleApproveOrder(order._id)} className='btn btn-success text-white flex-1'>Approve</button>
                                <button onClick={() => handleRejectOrder(order._id)} className='btn btn-error text-white flex-1'>Reject</button>
                                <Link to={`order-details/${order._id}`}>
                                    <button className="btn btn-primary hover:bg-primary/90 text-white rounded text-sm font-medium transition-colors flex-1">
                                        View Details
                                    </button>
                                </Link>

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
                            <th className="p-3 text-left font-semibold">Order ID</th>
                            <th className="p-3 text-left font-semibold">Customer</th>
                            <th className="p-3 text-left font-semibold">Product</th>
                            <th className="p-3 text-left font-semibold">Quantity</th>
                            <th className="p-3 text-left font-semibold">Order Date</th>
                            <th className="p-3 text-center font-semibold">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {pendingOrders.length === 0 ? (
                            <tr>
                                <td colSpan="7" className="p-8 text-center text-gray-500">
                                    No orders found
                                </td>
                            </tr>
                        ) : (
                            pendingOrders.map((order) => (
                                <tr key={order._id} className="border-b hover:bg-gray-50">
                                    <td className="p-3 font-mono text-gray-600">{order._id}</td>
                                    <td className="p-3">{order.firstName} {order.lastName}</td>
                                    <td className="p-3 font-medium">{order.productTitle}</td>
                                    <td className="p-3">{order.quantity}</td>
                                    <td className="p-3">
                                        {new Date(order.orderDate).toLocaleDateString('en-US', {
                                            year: 'numeric',
                                            month: 'numeric',
                                            day: 'numeric',
                                        })}{" "}
                                        {new Date(order.orderDate).toLocaleTimeString('en-US', {
                                            hour: '2-digit',
                                            minute: '2-digit',
                                        })}
                                    </td>

                                    <td className="p-3 text-center">
                                        <div className="flex justify-center gap-2">
                                            <button onClick={() => handleApproveOrder(order._id)} className="py-2 px-3 bg-success hover:bg-success/90 text-white rounded text-sm font-medium transition-colors cursor-pointer">
                                                Approve
                                            </button>
                                            <button onClick={() => handleRejectOrder(order._id)} className="py-2 px-3 bg-error hover:bg-error/90 text-white rounded text-sm font-medium transition-colors cursor-pointer">
                                                Reject
                                            </button>
                                            <Link to={`order-details/${order._id}`}>
                                                <button className="py-2 px-3 bg-primary hover:bg-primary/90 text-white rounded text-sm font-medium transition-colors cursor-pointer">
                                                    View
                                                </button>
                                            </Link>
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

export default AdminAllOrders
