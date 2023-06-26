import React, { useEffect } from 'react';
import './_loginScreen.scss';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/actions/auth.action';
import { useNavigate } from 'react-router-dom';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector(state => state.auth.accessToken);
  const navigate = useNavigate();

  const handleLogin = () => {
    dispatch(login());
  };

  useEffect(() => {
    if (accessToken) {
      navigate('/');
    }
  }, [accessToken, navigate]);

  return (
    <div className="login">
      <div className="login__container">
        <h2>Youtube Clone</h2>
        <img
          src="http://pngimg.com/uploads/youtube/youtube_PNG2.png"
          alt="Youtube Logo"
        />
        <button onClick={handleLogin}>Login with Google</button>
        <p>This project is made using the YouTube Data API</p>
      </div>
    </div>
  );
};

export default LoginScreen;

