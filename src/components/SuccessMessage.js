import React from 'react';

const SuccessMessage = ({ message }) => {
  if (!message) return null;

  return (
    <div className="success-message show">
      <span className="success-text">{message}</span>
    </div>
  );
};

export default SuccessMessage;
