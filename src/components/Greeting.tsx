import React from 'react';
import NpmSpinner from './NpmSpinner';

const Greeting = () => {
  return (
    // <section className='prose prose-base '>
    <div className='my-6'>
      <pre data-prefix='$'>
        <code>
          npm i create-react-app <NpmSpinner />
        </code>
      </pre>
      <pre data-prefix='>'>
        <code className='type-fruit'></code>
      </pre>
    </div>
    // </section>
  );
};

export default Greeting;
