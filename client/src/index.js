import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
<<<<<<< HEAD:src/index.js
import CommentForm from './components/Discussion/CommentForm';
import HomePage from './components/Homepage/HomePage';
=======
import { BrowserRouter } from 'react-router-dom';

>>>>>>> 3302a3a6a3b580dc4a0a62d39aed598bdc22739c:client/src/index.js

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
<<<<<<< HEAD:src/index.js
        <CommentForm />
=======
        <BrowserRouter>
            <App />
        </BrowserRouter>

>>>>>>> 3302a3a6a3b580dc4a0a62d39aed598bdc22739c:client/src/index.js
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
