import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Normalize } from 'styled-normalize'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <Normalize/>
        <App />
    </div>
    
);


