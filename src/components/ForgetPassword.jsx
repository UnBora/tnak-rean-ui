import React from "react";
import Stepper from "./Stepper";
import StepperControl from "./StepperControl";
import { useState } from "react";
import FindAcc from "./steps/FindAcc";
import SecurCode from "./steps/SecurCode";
import Newpw from "./steps/Newpw";
import Final from "./steps/Final";
import { UseContextProvider } from "../contexts/StepperContext";

export default function Mystepper() {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    "Find Account",
    "Enter Security Code",
    "Create new password",
    "Complete",
  ];

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <FindAcc />;
      case 2:
        return <SecurCode />;
      case 3:
        return <Newpw />;
      case 4:
        return <Final />;
      default:
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;

    direction === "next" ? newStep++ : newStep--;
    // check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  return (
    <div>
      <input type="checkbox" id="my-modal-4" class="modal-toggle" />
      <div className="modal">
     
        <div className="pb-2 mx-auto shadow-xl bg-smoke rounded-2xl md:w-1/2">
          
          {/* Stepper */}
          <div className="container mt-5 horizontal ">
            <Stepper steps={steps} currentStep={currentStep} />

            <div className="p-10 ">
              <UseContextProvider>
                {displayStep(currentStep)}
              </UseContextProvider>
            </div>
          </div>

          {/* navigation button */}
          {currentStep !== steps.length && (
            <StepperControl
              handleClick={handleClick}
              currentStep={currentStep}
              steps={steps}
            />
          )}
          
        </div>
      </div>
    </div>
  );
}
