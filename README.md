# React

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/react-tsfqr3)

# what is the difference between HOC and custom hook in react js?

[⚡️ In React, a higher-order component (HOC) is a function that takes a component as an argument and returns a new component. HOCs are a pattern that emerged in the React community that can be used to reuse code, abstract logic, and extend the behavior of existing components.

A custom hook is a function that follows a specific naming convention and can be used to share logic across multiple components. Custom hooks allow you to extract stateful logic from a component and share it with other components.

One key difference between HOCs and custom hooks is that HOCs operate at the component level, while custom hooks operate at the logic level. This means that HOCs are used to wrap components and provide additional functionality, while custom hooks are used to share logic and state between components.

Here is an example of a simple HOC that takes a component as an argument and returns a new component that wraps the original component in a div element: ]

import React from 'react';

const withDiv = (WrappedComponent) => {
return (props) => {
return (

<div>
<WrappedComponent {...props} />
</div>
);
};
};

export default withDiv;

# And here is an example of a custom hook that can be used to track the mouse position:

import { useState, useEffect } from 'react';

const useMousePosition = () => {
const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

useEffect(() => {
const handleMouseMove = (event) => {
setMousePosition({
x: event.clientX,
y: event.clientY,
});
};

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };

}, []);

return mousePosition;
};

export default useMousePosition;

# In summary, HOCs are used to extend the behavior of existing components, while custom hooks are used to share logic and state between components.
