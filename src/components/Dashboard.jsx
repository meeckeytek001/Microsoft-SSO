import React from 'react';
import { useMsal } from '@azure/msal-react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { instance } = useMsal();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await instance.logoutPopup(); // Await the promise to handle async actions correctly
      sessionStorage.removeItem("msalAccount");
      navigate("/"); // Use navigate() from react-router-dom to redirect
    } catch (error) {
      console.error("Logout failed: ", error);
    }
  };
  const userName = JSON.parse(sessionStorage.getItem("msalAccount"))?.name || "User";
  
  return (
    <>
    <div className="dashboard">
      <header>
        <h1>Your Dashboard</h1>
        <button onClick={handleLogout}>Logout</button>
      </header>
      <div className="content">
        <h2>Welcome, {userName}</h2>
        <p>This is your dashboard where you can manage your settings and data.</p>
      </div>
    </div>
    </>
  );
};

export default Dashboard;

