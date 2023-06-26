import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { authReducer } from './reducers/auth.reducer';
import { homeVideosReducer } from './reducers/videos.reducer';


const rootReducer = combineReducers({
  auth: authReducer,
  homeVideos:homeVideosReducer,

});

const initialState = {
  // Define your initial state properties here
  auth: {
    isLoggedIn: false,
    user: null,
  },
};

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;