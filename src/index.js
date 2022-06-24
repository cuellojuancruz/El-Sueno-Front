import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/index';
import  { Auth0Provider } from "@auth0/auth0-react"

ReactDOM.render(
  <Provider store={store}>
    {/* <React.StrictMode> */}
      <BrowserRouter>
        <Auth0Provider domain="dev-tr0vgaux.us.auth0.com" clientId="3hAsdKBCYROUx1kCPzsdeXnTDlXfj79y" redirectUri="http://localhost:3000/home">
          <App/>
        </Auth0Provider>
      </BrowserRouter>
    {/* </React.StrictMode> */}
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
