
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';


ReactDOM.render(
  <Auth0Provider
    domain="dev-5h6hxvkovgo3whzl.us.auth0.com"
    clientId="9TBgU1No97o4vVG8fyuvl5kwX8mRP69E"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <BrowserRouter>
    
    <App />
    

    </BrowserRouter>
  </Auth0Provider>
  
    
 ,
  document.getElementById('root')
);
