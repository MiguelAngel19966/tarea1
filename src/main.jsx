import React from 'react';
import ReactDOM from 'react-dom';
import { Principal } from './Principal';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="container">
      <h1>Color Change</h1>
      <div className="principal">
        <Principal color="blue" />
        <Principal color="red" />
        <Principal color="green" />
        <Principal color="orange" />
        <Principal color="yellow" />
      </div>
    </div>
  </React.StrictMode>,
);