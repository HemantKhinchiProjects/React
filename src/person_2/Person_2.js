import React, { useState } from 'react';
import updatedComponent from '../HOC/HOC';
const Person2 = ({ amount, increaseHandler }) => {
  return (
    <div>
      Jimmy is offering ${amount}
      <button onClick={increaseHandler}>Increase Money</button>
    </div>
  );
};
export default updatedComponent(Person2);
