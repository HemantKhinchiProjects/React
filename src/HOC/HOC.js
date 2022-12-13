import React, { useState } from 'react';
const UpdatedComponent = (OriginalComponent) => {
  function NewComponent() {
    const [amount, setAmount] = useState(10);
    const increaseHandler = () => {
      setAmount(amount * 2);
    };
    return (
      <OriginalComponent amount={amount} increaseHandler={increaseHandler} />
    );
  }
  return NewComponent;
};
export default UpdatedComponent;
