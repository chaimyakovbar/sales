import React from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import { useAtom } from "jotai";
import { currentIndexAtom } from "../../../Utils";

const LeftSide = () => {
  const [currentIndex] = useAtom(currentIndexAtom);
  if (currentIndex === 2) return null;
  return (
    <div
      style={{
        width: "30%",
        backgroundColor: "#F5F5F7",
        height: "80vh",
        overflowY: "auto",
        padding: "30px",
        boxSizing: "border-box",
        marginRight: "20px",
      }}
    >
      {currentIndex === 0 && <StepOne />}
      {currentIndex === 1 && <StepTwo />}
    </div>
  );
};

export default LeftSide;
