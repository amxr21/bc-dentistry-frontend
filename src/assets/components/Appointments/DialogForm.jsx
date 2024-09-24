import React, { useState } from 'react';

const DialogForm = () => {
  const [step, setStep] = useState(1);
  const [isShrunk, setIsShrunk] = useState(false);

  const handleNext = () => {
    if (step === 1) {
      setIsShrunk(true);
      setTimeout(() => {
        setStep(step + 1);
        setIsShrunk(false);
      }, 500); // Transition time matches the CSS duration
    } else {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  return (
    <div className="max-w-lg mx-auto p-8 border rounded-lg shadow-lg">
      <div className={`transition-all duration-500 ease-in-out ${isShrunk ? 'scale-50 opacity-0' : 'scale-100 opacity-100'}`}>
        {step === 1 && (
          <div>
            <h2 className="text-xl font-bold mb-2">Part 1</h2>
            <p className="text-gray-600">This is the first part of the form.</p>
          </div>
        )}
        {step === 2 && (
          <div>
            <h2 className="text-xl font-bold mb-2">Part 2</h2>
            <p className="text-gray-600">This is the second part of the form.</p>
          </div>
        )}
        {step === 3 && (
          <div>
            <h2 className="text-xl font-bold mb-2">Part 3</h2>
            <p className="text-gray-600">This is the third part of the form.</p>
          </div>
        )}
        {step === 4 && (
          <div>
            <h2 className="text-xl font-bold mb-2">Part 4</h2>
            <p className="text-gray-600">This is the final part of the form.</p>
          </div>
        )}
      </div>
      <div className="flex justify-between mt-6">
        {step > 1 && (
          <button 
            onClick={handleBack}
            className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-700"
          >
            Back
          </button>
        )}
        {step < 4 && (
          <button 
            onClick={handleNext}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 ml-auto"
          >
            Next
          </button>
        )}
        {step === 4 && (
          <button 
            onClick={() => alert("Form completed!")}
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700 ml-auto"
          >
            Finish
          </button>
        )}
      </div>
    </div>
  );
};

export default DialogForm;
