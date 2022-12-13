import React from 'react';
import './style.css';
//component important
import Person1 from '././person_1/Person_1';
import Person2 from '././person_2/Person_2';
export default function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>HOC Example</h2>
      <p>
        A higher-order component (HOC) is an advanced technique in React for
        reusing component logic. HOCs are not part of the React API, per se.
        They are a pattern that emerges from React's compositional nature.
        Concretely, a higher-order component is a function that takes a
        component and returns a new component.
      </p>
      <hr></hr>
      <i>Example</i>
      <Person1 />
      <Person2 />
    </div>
  );
}
