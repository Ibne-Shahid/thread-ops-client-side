import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';

export const useDashboardData = () => {
  const axiosSecure = useAxiosSecure();
  const { firebaseUser } = useAuth();

  const { data: currentUser = {} } = useQuery({
    queryKey: ["current-user", firebaseUser?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users?email=${firebaseUser?.email}`);
      return res.data;
    },
    enabled: !!firebaseUser?.email
  });

  const userRole = currentUser?.role || 'buyer';
  const userEmail = firebaseUser?.email;

  const { data: products = [], isLoading: productsLoading } = useQuery({
    queryKey: ["products", userRole, userEmail],
    queryFn: async () => {
      if (userRole === 'admin') {
        const res = await axiosSecure.get('/products');
        return res.data;
      } else if (userRole === 'manager') {
        const res = await axiosSecure.get(`/products?email=${userEmail}`);
        return res.data;
      }
      return [];
    },
    enabled: !!userRole && !!userEmail && (userRole === 'admin' || userRole === 'manager')
  });

  const { data: allUsers = [], isLoading: usersLoading } = useQuery({
    queryKey: ["all-users"],
    queryFn: async () => {
      const res = await axiosSecure.get('/users');
      return Array.isArray(res.data) ? res.data : [res.data];
    },
    enabled: userRole === 'admin'
  });

  const { data: orders = [], isLoading: ordersLoading } = useQuery({
    queryKey: ["orders", userRole, userEmail],
    queryFn: async () => {
      if (userRole === 'admin') {
        const res = await axiosSecure.get('/orders');
        return res.data;
      } else if (userRole === 'manager') {
        const res = await axiosSecure.get(`/orders?sellerEmail=${userEmail}`);
        return res.data;
      } else if (userRole === 'buyer') {
        const res = await axiosSecure.get(`/orders?email=${userEmail}`);
        return res.data;
      }
      return [];
    },
    enabled: !!userRole && !!userEmail
  });

  return {
    currentUser,
    userRole,
    userEmail,
    products,
    allUsers,
    orders,
    productsLoading,
    usersLoading,
    ordersLoading,
    firebaseUser
  };
};