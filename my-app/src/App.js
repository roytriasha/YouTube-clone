import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router'; // Import useNavigate from react-router
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import HomeScreen from './screens/homeScreen/HomeScreen';
import LoginScreen from './screens/loginScreen/LoginScreen';
import WatchScreen from './screens/watchScreen/WatchScreen'; // Import WatchScreen
import './_app.scss';
import { useSelector } from 'react-redux';
import { getAuth } from 'firebase/auth'

const Layout = ({ children }) => {
  const [sidebar, toggleSidebar] = useState(false);

  const handleToggleSidebar = () => toggleSidebar((value) => !value);

  return (
    <>
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div className="app__container">
        <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
        <Container fluid className="app__main">
          {children}
        </Container>
      </div>
    </>
  );
};

const App = () => {
  const { accessToken, loading } = useSelector(state => state.auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !accessToken) {
      navigate('/auth');
    }
  }, [accessToken, loading, navigate]);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/auth" element={<LoginScreen />} />
        <Route
          path="/search"
          element={
            <Layout>
              <h1>Search Results</h1>
            </Layout>
          }
        />
        <Route path="/watch/:id" element={<WatchScreen />} /> 
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </Layout>
  );
};

export default App;

