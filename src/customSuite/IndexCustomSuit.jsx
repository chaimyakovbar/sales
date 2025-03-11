import React from "react";
import MiddleSide from "./middleSide/MiddleSide";
import LeftSide from "./leftSide/LeftSide";
import MostPoPular from "../homePage/MostPoPular";
import Stepper2 from "../components/Stepper";
import RightSide from "./rightSide/RightSide";

const IndexCustomSuit = () => {
  return (
    <div>
      <Stepper2 />
      <div style={{ display: "flex"}}>
        <LeftSide />

        <MiddleSide />

        <RightSide />
      </div>
    </div>
  );
};

export default IndexCustomSuit;
