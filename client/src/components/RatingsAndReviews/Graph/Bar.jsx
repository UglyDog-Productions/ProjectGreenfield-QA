/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

const Bar = ({ percent }) => {
  return <div className="bar" style={{ width: `${percent}%` }} />;
};

export default Bar;
