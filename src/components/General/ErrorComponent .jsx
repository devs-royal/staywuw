import React from 'react';

const ErrorComponent = ({ message }) => {
  return (
    <div style={{ margin: '20px', padding: '20px', backgroundColor: '#ffcccc', color: '#333', borderRadius: '8px', textAlign: 'center' }}>
      <h2>Error Occurred</h2>
      <p>{message}</p>
    </div>
  );
};

export default ErrorComponent;
