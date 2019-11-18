import React from 'react';

import './error-indicator.scss';

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <span>
        Что-то пошло не так!
      </span>
      <span>
        Перезагрузите страницу!
      </span>
    </div>
  );
};

export default ErrorIndicator;
