import React from 'react';
import './error-indicator.css';

const ErrorIndicator = ({error}) => {
    console.log(error);
    return (
        <div className="error-message">
           <span>{error.toString()}</span>
        </div>
    );
};

export default ErrorIndicator;
