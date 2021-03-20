import React from 'react';
import Form from '../../components/Form';
import Header from '../../components/Header';

const Create: React.FC = () => (
  <div>
    <Header />
    <div className="w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-2/3 m-auto">
      <Form />
    </div>
  </div>
);

export default Create;
