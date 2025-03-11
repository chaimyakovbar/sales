import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useAtom } from "jotai";
import { currentIndexAtom } from "../../../Utils";

import inside from "../../assets/kinds/insid.svg";
import poshet from "../../assets/kinds/poshet.svg";
import button from "../../assets/kinds/button.svg";
import holes from "../../assets/kinds/AllSuit2.png";

import ButtonInside from "./ButtonInside";
import ButtonHoles from "./ButtonHoles";
import ButtonPoshet from "./ButtonPoshet";
import ButtonButton from "./ButtonButton";

const useStyles = makeStyles({
  container: {
    position: "absolute",
    right: -12,
    gap: "12px",
    justifyContent: "center",
    width: "30%",
    backgroundColor: "#F5F5F7",
    height: "80vh",
    overflowY: "auto",
    padding: "30px",
    boxSizing: "border-box",
    marginRight: "20px",
  },
  buttonImg: {
    height: "80px",
    cursor: "pointer",
    transition: "filter 0.3s ease-in-out",
  },
  leftComponent: {
    width: '200px',
    backgroundColor: "#F5F5F7",
  }
});

const RightSide = () => {
  const classes = useStyles();
  const [currentIndex] = useAtom(currentIndexAtom);
  const [leftComponent, setLeftComponent] = useState(null);

  if (currentIndex !== 2) return null;

  const handleClick = (category) => {
    switch (category) {
      case "imagesInsideUp":
        setLeftComponent(<ButtonInside />);
        break;
      case "imagesHoles":
        setLeftComponent(<ButtonHoles />);
        break;
      case "imagesPoshet":
        setLeftComponent(<ButtonPoshet />);
        break;
      case "imageButton":
        setLeftComponent(<ButtonButton />);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className={classes.container}>
        <h2>תבחר את הבפנים</h2>
        <Button onClick={() => handleClick("imagesInsideUp")}>
          <img src={inside} className={classes.buttonImg} alt="inside" />
        </Button>

        <h2>תבחר את פושה</h2>
        <Button onClick={() => handleClick("imagesPoshet")}>
          <img src={poshet} className={classes.buttonImg} alt="poshet" />
        </Button>

        <h2>תבחר את כפתור</h2>
        <Button onClick={() => handleClick("imageButton")}>
          <img src={button} className={classes.buttonImg} alt="button" />
        </Button>

        <h2>תבחר את הצבע של החור של הכפתור</h2>
        <Button onClick={() => handleClick("imagesHoles")}>
          <img src={holes} className={classes.buttonImg} alt="hole" />
        </Button>
      </div>

      <div className={classes.leftComponent}>{leftComponent}</div>
    </>
  );
};

export default RightSide;
