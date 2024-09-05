import React from 'react';
import Carousel from './Carousel';
import { useMsal } from '@azure/msal-react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const { instance } = useMsal();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const loginResponse = await instance.loginPopup();
      sessionStorage.setItem('msalAccount', JSON.stringify(loginResponse.account));
      navigate('/dashboard');
    } catch (error) {
      console.error('Login failed: ', error);
    }
  };

  return (
    <div className="home-page">
      <header className="header">
        <div className="logo">
          <h1>My Application</h1>
        </div>
        <nav className="nav">
          <button className="login-btn" onClick={handleLogin}>
            Login with Microsoft
          </button>
        </nav>
      </header>

      <main className="main-content">
        <section className="intro">
          <h2>Welcome to My Application</h2>
          <p>
            This is a simple web application designed to demonstrate Microsoft
            SSO login, a dynamic carousel, and a dashboard interface. Explore
            the features and see how smoothly you can navigate through the app.
          </p>
        </section>

        <Carousel />
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} My Application. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
