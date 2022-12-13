import React, { useState } from 'react';
const UpdatedComponent = (originalComponent) => {
  function NewComponent() {
    const [amount, setAmount] = useState(10);
    const increaseHandler = () => {
      setAmount(amount * 2);
    };
    return <originalComponent />;
  }
  return NewComponent;
};
export default UpdatedComponent;
