import React from 'react';
import NpmSpinner from './NpmSpinner';

const Greeting = () => {
  return (
    <section>
      <pre data-prefix='$'>
        <code>
          npm i create-react-app <NpmSpinner />
        </code>
      </pre>
      <pre data-prefix='>'>
        <code className='type-fruit'></code>
      </pre>
    </section>
  );
};

export default Greeting;
