import React from 'react';
import './index.css'; 

export const Principal = ({ color }) => {

    const Cuadrado = {
    backgroundColor: color,
    width: '100px',
    height: '100px'
    };

    return (
    <div className="square" style={Cuadrado}></div>
    );
};