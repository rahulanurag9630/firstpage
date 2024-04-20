import React, { useState } from 'react';
import Form from './Form';

function ToggledForm() {
  const [isIndividualForm, setIsIndividualForm] = useState(true);

  const toggleForm = () => {
    setIsIndividualForm(!isIndividualForm);
  };

  return (
    <div>
      <div className="flex justify-center mb-4">
        <div className='w-10/12 justify-center flex bg-gray-300 rounded-lg'>
          <button
            className={`py-2 w-8/12 px-4 text-black text-xl rounded-lg ${isIndividualForm ? 'bg-blue-400 text-white' : 'bg-gray-300 '}`}
            onClick={() => toggleForm()}
          >
           For Individuals
          </button>
          <button
            className={`py-2 px-4 w-8/12 rounded-lg text-black text-xl ${isIndividualForm ? 'bg-gray-300 ' : 'bg-blue-400 text-white'}`}
            onClick={() => toggleForm()}
          >
            For Corporate
          </button>
        </div>
      </div>
      {isIndividualForm ? (
        <div className="max-w-md p-4">
          <Form />
        </div>
      ) : (
        <div className="max-w-md p-4">
          <Form />
        </div>
      )}
    </div>
  );
}

export default ToggledForm;
