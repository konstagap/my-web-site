import React from 'react';
import NpmSpinner from './NpmSpinner';
import TypeWriter from './TypeWriter';

const Greeting = () => {
  return (
    <section>
      <pre data-prefix='>'>
        <code>npx create-next-app@latest</code>
      </pre>
      <pre data-prefix='>'>
        <code>
          <NpmSpinner />
        </code>
      </pre>
      <pre data-prefix='>'>
        <code>
          <TypeWriter />
        </code>
      </pre>
    </section>
  );
};

export default Greeting;
