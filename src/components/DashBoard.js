import React from 'react'
import userdetails from '../userdetails'

const DashBoard = () => {
  return (
    <div>
      <h1>DashBoard</h1>

      <ul>
        {userdetails.map((user) =>
          <li key={user.username} style={{ backgroundColor: "pink", fontWeight: 1000, margin: "20px", width: "50%" }}>{user.username}</li>
        )}
      </ul>

    </div>
  )
}

export default DashBoard