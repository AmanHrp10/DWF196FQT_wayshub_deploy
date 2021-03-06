import { createContext, useReducer } from 'react';

export const AppContext = createContext();

const initialState = {
  isLogin: false,
  isLoading: true,
  users: localStorage.getItem('user') ? localStorage.getItem('user') : null,
  token: localStorage.getItem('token') ? localStorage.getItem('token') : null,
  subscribtion: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isLogin: true,
        isLoading: false,
        user: localStorage.setItem(
          'user',
          JSON.stringify({
            id: action.payload.id,
            channelName: action.payload.channelName,
            description: action.payload.description,
            photo: action.payload.photo,
          })
        ),
        token: localStorage.setItem('token', action.payload.token),
      };

    case 'CHANNEL_LOADED':
      return {
        ...state,
        isLogin: true,
        isLoading: false,
        user: localStorage.setItem(
          'user',
          JSON.stringify({
            id: action.payload.id,
            channelName: action.payload.channelName,
            description: action.payload.description,
            photo: action.payload.photo,
          })
        ),
      };
    case 'SUBSCRIBE':
      return {
        ...state,
        subscribtion: action.payload.subscribtion,
      };
    case 'UNSUBSCRIBE':
      return {
        ...state,
        subscribtion: action.payload.subscribtion,
      };
    case 'LOAD_SUBSCRIBTION':
      return {
        ...state,
        subscribtion: action.payload.subscribed,
      };

    case 'AUTH_ERROR':
    case 'LOGOUT':
      return {
        ...state,
        isLogin: false,
        isLoading: false,
        token: localStorage.removeItem('token'),
      };
    default:
      throw new Error();
  }
};

export const AppContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={[state, dispatch]}>
      {props.children}
    </AppContext.Provider>
  );
};
