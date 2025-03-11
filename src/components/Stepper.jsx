import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { useAtom } from "jotai";
import { counterAtom, currentIndexAtom, currentKindAtom } from "../../Utils";

const steps = [
  { label: "Select Color Suit", validate: "step1Validated" },
  { label: "Create an ad group", validate: "step2Validated" },
  { label: "Create an ad", validate: "step3Validated" },
];

export default function StyledStepper() {
  const [counterArray] = useAtom(counterAtom);
  const [activeStep, setActiveStep] = useAtom(currentIndexAtom);
  const [completed, setCompleted] = React.useState({});
  const [currentKind] = useAtom(currentKindAtom);

  const totalSteps = steps.length;
  const isLastStep = activeStep === totalSteps - 1;
  const allStepsCompleted = Object.keys(completed).length === totalSteps;
  const isStepValid =
    activeStep === 1
      ? !!currentKind
      : counterArray[activeStep]?.[steps[activeStep].validate];

  const handleNext = () => {
    if (!isStepValid) return;
    setCompleted((prev) => ({ ...prev, [activeStep]: true }));
    if (!isLastStep) setActiveStep((prev) => prev + 1);
  };

  const handleBack = () => {
    if (activeStep > 0) setActiveStep((prev) => prev - 1);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        backgroundColor: "#F5F5F7",
      }}
    >
      <Stepper nonLinear activeStep={activeStep} sx={{ width: "60%" }}>
        {steps.map((step, index) => (
          <Step key={step.label} completed={completed[index]}>
            <StepButton color="inherit" onClick={() => setActiveStep(index)}>
              {step.label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <Typography sx={{ mt: 2, mb: 1 }}>שלב {activeStep + 1}</Typography>
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 2 }}>
        <Button
          color="inherit"
          disabled={activeStep === 0}
          onClick={handleBack}
        >
          Back
        </Button>
        {isLastStep ? (
          <Link to="/indexSizes">
            <Button>Finish</Button>
          </Link>
        ) : (
          <Button onClick={handleNext} disabled={!isStepValid}>
            Next
          </Button>
        )}
      </Box>
      {allStepsCompleted && (
        <Box sx={{ mt: 3 }}>
          <Typography>כל השלבים הושלמו - סיימת!</Typography>
          <Link to={"/sizes"}>
            <Button sx={{ mt: 1 }}>Rest</Button>
          </Link>
        </Box>
      )}
    </Box>
  );
}
