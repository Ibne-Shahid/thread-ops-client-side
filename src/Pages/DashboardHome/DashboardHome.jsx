import React, { useState } from 'react';
import { FaUserShield, FaUserTie, FaUserCircle } from 'react-icons/fa';
import { useDashboardData } from '../../Hooks/useDashboardData';
import { AdminDashboard } from '../../components/dashboard/AdminDashboard';
import { ManagerDashboard } from '../../components/dashboard/ManagerDashboard';
import { BuyerDashboard } from '../../components/dashboard/BuyerDashboard';

const DashboardHome = () => {
  const [timeRange, setTimeRange] = useState('month');
  
  const {
    currentUser,
    userRole,
    userEmail,
    products,
    allUsers,
    orders,
    firebaseUser
  } = useDashboardData();

  // Loading state
  if (!userRole) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="loading loading-spinner loading-lg text-primary"></div>
          <p className="mt-4 text-gray-600">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  // Prepare user data
  const userData = {
    ...currentUser,
    email: userEmail,
    photoURL: currentUser?.photoURL || firebaseUser?.photoURL,
    name: currentUser?.name || firebaseUser?.displayName || 'User'
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Role Badge */}
        <div className="flex justify-end mb-4">
          <div className={`badge badge-lg ${userRole === 'admin' ? 'badge-primary' : 
                         userRole === 'manager' ? 'badge-secondary' : 'badge-accent'}`}>
            {userRole === 'admin' && <FaUserShield className="mr-2" />}
            {userRole === 'manager' && <FaUserTie className="mr-2" />}
            {userRole === 'buyer' && <FaUserCircle className="mr-2" />}
            {userRole?.charAt(0).toUpperCase() + userRole?.slice(1)}
          </div>
        </div>

        {/* Render Dashboard Based on Role */}
        {userRole === 'admin' && (
          <AdminDashboard
            userData={userData}
            firebaseUser={firebaseUser}
            products={products}
            allUsers={allUsers}
            orders={orders}
            timeRange={timeRange}
            onTimeRangeChange={setTimeRange}
          />
        )}

        {userRole === 'manager' && (
          <ManagerDashboard
            userData={userData}
            firebaseUser={firebaseUser}
            products={products}
            orders={orders}
          />
        )}

        {userRole === 'buyer' && (
          <BuyerDashboard
            userData={userData}
            firebaseUser={firebaseUser}
            orders={orders}
          />
        )}
      </div>
    </div>
  );
};

export default DashboardHome;