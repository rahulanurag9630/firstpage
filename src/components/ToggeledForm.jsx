import React, { useState } from 'react';
import Form from './Form';
import Form2 from './Form2';

function ToggledForm() {
  const [isIndividualForm, setIsIndividualForm] = useState(true);

  const toggleForm = () => {
    setIsIndividualForm(!isIndividualForm);
  };

  return (
    <div>
      <div className="flex  mb-4 pl-3">
        <div className="w-full lg:w-full h-16  flex bg-gray-300 rounded-lg">
          <button
            className={`py-2 lg:py-4 w-1/2  lg:w-8/12 text-black text-lg lg:text-xl rounded-lg`}
            style={{
              backgroundColor: isIndividualForm ? '#2C8DB6' : '#d1d5db',
              color: isIndividualForm ? '#ffffff' : '#000000'
            }}
            onClick={() => toggleForm()}
          >
            For Individuals
          </button>
          <button
            className={`py-2 lg:py-4 w-1/2 lg:w-8/12 rounded-lg text-black text-lg lg:text-xl`}
            style={{
              backgroundColor: isIndividualForm ? '#d1d5db' : '#2C8DB6',
              color: isIndividualForm ? '#000000' : '#ffffff'
            }}
            onClick={() => toggleForm()}
          >
            For Corporate
          </button>
        </div>
      </div>
     {isIndividualForm?  <div className="p-1">
        <Form />
      </div>: <div className="p-1">
        <Form2 />
      </div>}
    </div>
  );
}

export default ToggledForm;
