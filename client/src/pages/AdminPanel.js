import React, { useState } from 'react'

import AdminNavigation from '../containers/AdminNavigation'

const AdminPanel = () => {

  const [isActive, setIsActive] = useState(false);
  
  return (
    <div>
      <AdminNavigation isActive={isActive} setIsActive={setIsActive} />
    </div>
  )
}

export default AdminPanel
