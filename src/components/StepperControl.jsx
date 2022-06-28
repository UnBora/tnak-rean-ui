export default function StepperControl({ handleClick, currentStep, steps }) {
    return (
      <div className="container flex justify-center mb-8 space-x-10">
        <label className="px-10 py-2 font-semibold text-white rounded-full btn btn-error"  for="my-modal-4">Cancel</label>
        
        <button
          onClick={() => handleClick()}
          className={`cursor-pointer rounded-full   bg-myorange py-2 px-12 font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-orange-500 hover:text-white  ${
            currentStep === 1 ? " cursor-not-allowed opacity-50 " : ""
          }`}
        >
          Back
        </button>
  
        <button
          onClick={() => handleClick("next")}
          className="px-12 py-2 font-semibold text-white uppercase transition duration-200 ease-in-out rounded-full cursor-pointer bg-mygreen hover:bg-gray-400 hover:text-white"
        >
          {currentStep === steps.length - 1 ? "Confirm" : "Next"}
        </button>

        
      </div>
    );
  }
  