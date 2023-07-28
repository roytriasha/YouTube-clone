import React, { useEffect, useState } from 'react'; // Add useState import
import { Container } from 'react-bootstrap';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import HomeScreen from './screens/homeScreen/HomeScreen';
import LoginScreen from './screens/loginScreen/LoginScreen';
import WatchScreen from './screens/watchScreen/WatchScreen';
import SearchScreen from './screens/SearchScreen';
import SubscriptionsScreen from './screens/subscriptionsScreen/SubscriptionsScreen';
import ChannelScreen from './screens/channelScreen/ChannelScreen';

import './_app.scss';

const Layout = ({ children }) => {
  const [sidebar, toggleSidebar] = useState(false); // Add useState here

  const handleToggleSidebar = () => toggleSidebar((value) => !value);

  return (
    <>
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div className='app__container'>
        <Sidebar
          sidebar={sidebar}
          handleToggleSidebar={handleToggleSidebar}
        />
        <Container fluid className='app__main '>
          {children}
        </Container>
      </div>
    </>
  );
};

const App = () => {
  const { loading } = useSelector((state) => state.auth);
  const accessToken = localStorage.getItem('ytc-access-token');
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !accessToken) {
      navigate('/auth');
    }
  }, [accessToken, loading, navigate]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeScreen />} />
      </Route>

      <Route path="/auth" element={<LoginScreen />} />

      <Route path="/search/:query" element={<Layout />}>
        <Route index element={<SearchScreen />} />
      </Route>

      <Route path="/watch/:id" element={<Layout />}>
        <Route index element={<WatchScreen />} />
      </Route>

      <Route path="/feed/subscriptions" element={<Layout />}>
        <Route index element={<SubscriptionsScreen />} />
      </Route>

      <Route path="/channel/:channelId" element={<Layout />}>
        <Route index element={<ChannelScreen />} />
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
