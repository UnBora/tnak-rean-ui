import React from 'react'
import Stepper from './components/Stepper'
import StepperControl from './components/StepperControl'
import { useState } from "react";
import FindAcc from './components/steps/FindAcc';
import SecurCode from './components/steps/SecurCode';
import Newpw from './components/steps/Newpw';
import Final from './components/steps/Final';
import { UseContextProvider } from "./contexts/StepperContext";

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
          return <FindAcc/>;
        case 2:
          return <SecurCode/>;
        case 3:
          return <Newpw/>;
        case 4:
          return <Final/>;
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
      <div className="pb-2 mx-auto shadow-xl bg-smoke rounded-2xl md:w-1/2">
        {/* Stepper */}
        <div className="container mt-5 horizontal ">
          <Stepper steps={steps} currentStep={currentStep} />
  
          <div className="p-10 ">
            <UseContextProvider>{displayStep(currentStep)}</UseContextProvider>
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
    );
}
