import React from 'react'
import useRoles from '../../../Hooks/useRoles'
import ManagerApprovalPending from '../../../components/ManagerApprovalPending/ManagerApprovalPending'

const AddProducts = () => {

    const user = useRoles()

    if (user?.role === "manager" & user?.status === "pending") return <ManagerApprovalPending></ManagerApprovalPending>

  return (
    <div>AddProducts</div>
  )
}

export default AddProducts