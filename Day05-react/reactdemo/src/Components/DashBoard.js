import React from 'react';

// show the user a welcome message using sessionStorage



const DashBoard = () => {
    const user = sessionStorage.getItem('loggedInUser');
  return (
    <h1>
        Welcome back, {user}
    </h1>


  )
}

export default DashBoard;