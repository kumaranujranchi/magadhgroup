import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'react-modal-video/css/modal-video.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "swiper/css/bundle";
import './components/assets/css/animate.css';
import './components/assets/css/fontawesome.css';
import './components/assets/css/meanmenu.min.css';
import './components/assets/font/flaticon_flexitype.css';
import './components/assets/sass/style.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import WOW from "wowjs";

export const animationCreate = () => {
  if (typeof window !== "undefined") {
    new WOW.WOW({ live: false }).init();
  }
};



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
