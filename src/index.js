import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from "./reportWebVitals";
import App from './App';
import {BrowserRouter } from "react-router-dom";
import { AppProvider } from './context';
import {ProductaProvider} from "./component/Products";
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Auth0Provider
  domain={ process.env.REACT_APP_DOMAIN}
  clientId={ process.env.REACT_APP_CLIENT_ID}
  authorizationParams={{redirect_uri: window.location.origin }}>
    <AppProvider>
    <BrowserRouter>
    <ProductaProvider>
      <App/>
      </ProductaProvider>
    </BrowserRouter>
    </AppProvider>
   
  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
