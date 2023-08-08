import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import i18n (needs to be bundled ;)) 
import './i18n';
import { Suspense } from 'react';
import { StrictMode } from 'react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suspense fallback={(<div> Loading...? </div>)}>
    <StrictMode>
      <App />
    </StrictMode>
  </Suspense>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
reportWebVitals();
