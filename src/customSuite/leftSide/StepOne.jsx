import React, { useState } from "react";
import { suitsColors } from "../../consts/KindOfColors";
import Button from "@mui/material/Button";
import { useAtom } from "jotai";
import { counterAtom, currentColorAtom } from "../../../Utils"

const StepOne = () => {

  const [counterArray, setCounterArray] = useAtom(counterAtom); 
  const [ _, setCurrentColor ] = useAtom(currentColorAtom); 
  const [selectedColor, setSelectedColor] = useState(null); 

  const handleClick = (color) => {
    setSelectedColor(color)
    setCurrentColor(color)
    const updatedCounter = [...counterArray];
    updatedCounter[0] = { step1Validated: true };
    setCounterArray(updatedCounter);
  };
  

  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px 10px",
          justifyItems: "center",
        }}
      >
        {suitsColors.map((color) => (
          <div style={{ textAlign: "center" }}>
            <Button
              onClick={() => handleClick(color)}
              variant="contained"
              style={{
                backgroundImage: `url(${color.color})`, 
                backgroundSize: 'cover',
                // color: "#FFF",
                // padding: "15px 20px",
                borderRadius: "50px",
                cursor: "pointer",
                fontWeight: "bold",
                transition: "0.3s",
                boxShadow: "0px 4px 8px rgba(0,0,0,0.2)",
                width: "100px",
                height: "100px",
                border:
                  selectedColor?.colorId === color.colorId
                    ? "3px solid red"
                    : " 2px solid black", 
              }}
              onMouseOver={(e) =>
                (e.target.style.backgroundColor = "rgba(0, 0, 0, 0.5)")
              }
              onMouseOut={(e) =>
                (e.target.style.backgroundColor = color.hexCode)
              }
            >
            </Button>
            <p
              style={{
                marginTop: "10px",
                fontSize: "16px",
                color: "#bdbdbd",
                display: "flex",
                justifyContent: "center",
                gap: "8px",
              }}
            >
              <span
                style={{ textShadow: "1px 1px 1px black", fontWeight: "bold" }}
              >
                {color.name}
              </span>{" "}
              <span
                style={{ textShadow: "1px 1px 1px black", fontWeight: "bold" }}
              >
                {color.price}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepOne;
