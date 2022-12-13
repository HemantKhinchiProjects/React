import React from 'react';
import UpdatedComponent from '../HOC/HOC';
const Person1 = ({ amount, increaseHandler }) => {
  return (
    <div>
      Jimmy is offering ${amount}
      <button onClick={increaseHandler}>Increase Money</button>
    </div>
  );
};
export default UpdatedComponent(Person1);
