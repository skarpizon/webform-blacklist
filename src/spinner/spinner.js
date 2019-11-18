import React from 'react';

import './spinner.scss';

const Spinner = ({isLogin}) => {
  let classNames = isLogin ? "spinner spinner__login" : "spinner";
  return (
    <div className={classNames}>
      <div className="lds-hourglass"></div>
    </div>
  );
};

export default Spinner;
