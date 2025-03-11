import React, { useState } from "react"
import { Button } from "@mui/material"
import { makeStyles } from "@mui/styles" 
import { useAtom } from "jotai"
import {
  currentKindAtom,
  selectedCollarAtom,
  selectedLapelTypeAtom,
  selectedPacketTypeAtom,
} from "../../../Utils"

import wide from "../../assets/kinds/wide.png"
import slim from "../../assets/kinds/slim.png"
import standard from "../../assets/kinds/standard.png"
import kind1Img from "../../assets/kinds/kind1.png"
import kind2Img from "../../assets/kinds/kind2.png"
import kind3Img from "../../assets/kinds/kind3.png"
import kind4Img from "../../assets/kinds/kind4.png"
import collarTight from "../../assets/kinds/collarTight.png"
import collarDistant from "../../assets/kinds/collarDistant.png"
import packet1 from "../../assets/kinds/1.png"
import packet2 from "../../assets/kinds/2.png"
import packet3 from "../../assets/kinds/3.png"

const useStyles = makeStyles({
  buttonImg: {
    height: "80px",
    cursor: "pointer",
    transition: "filter 0.3s ease-in-out",
  },
  container: {
    display: "flex",
    gap: "12px",
    flexWrap: "wrap",
    // justifyContent: "center",
  },
  button: {
    width: "100px",
    height: "100px",
    transition: "all 0.1s ease-in-out",
    "&:hover": {
      backgroundColor: "#e0e0e0",
      transform: "scale(1.10)",
    },
  },
  selectedButton: {
    backgroundColor: "#ff000059 !important",
    boxShadow: "0 6px 12px rgba(0,0,0,0.4) !important",
    transform: "scale(1.1) !important",
  },
  title: {
    // textAlign: "center",
    fontSize: "22px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
})

function StepTwo() {
  const classes = useStyles()
  const [selectedKind, setSelectedKind] = useState(null)
  const [, setKindColor] = useAtom(currentKindAtom)
  const [selectedPacketType, setSelectedPacketType] = useAtom(selectedPacketTypeAtom)
  const [selectedCollar, setSelectedCollar] = useAtom(selectedCollarAtom)
  const [selectedLapelType, setSelectedLapelType] = useAtom(selectedLapelTypeAtom)

  const suitKinds = [
    { name: "kind1", image: kind1Img },
    { name: "kind2", image: kind2Img },
    { name: "kind3", image: kind3Img },
    { name: "kind4", image: kind4Img },
  ]

  const Laplekinds = [
    { name: "collarTight", image: collarTight },
    { name: "collarDistant", image: collarDistant },
  ]

  const collarTypes = [
    { name: "Slim", image: slim },
    { name: "Standard", image: standard },
    { name: "Wide", image: wide },
  ]

  const packetType = [
    { name: "packet1", image: packet1 },
    { name: "packet2", image: packet2 },
    { name: "3", image: packet3 },
  ]

  return (
    <>
      <h2 className={classes.title}>בחר את סוג החליפה</h2>
      <div className={classes.container}>
        {suitKinds.map((kind) => (
          <Button
            key={kind.name}
            onClick={() => {
              setKindColor(kind.name)
              setSelectedKind(kind.name)
            }}
            className={`${classes.button} ${selectedKind === kind.name ? classes.selectedButton : ""}`}
          >
            <img src={kind.image} alt={kind.name} className={classes.buttonImg} />
          </Button>
        ))}
      </div>

      <h3 className={classes.title}>בחר את סוג הצווארון</h3>
      <div className={classes.container}>
        {Laplekinds.map((kind) => (
          <Button
            key={kind.name}
            onClick={() => setSelectedCollar(kind.name)}
            className={`${classes.button} ${selectedCollar === kind.name ? classes.selectedButton : ""}`}
          >
            <img src={kind.image} alt={kind.name} className={classes.buttonImg} />
          </Button>
        ))}
      </div>

      <h3 className={classes.title}>בחר את סגנון הצווארון</h3>
      <div className={classes.container}>
        {collarTypes.map((type) => (
          <Button
            key={type.name}
            onClick={() => setSelectedLapelType(type.name)}
            className={`${classes.button} ${selectedLapelType === type.name ? classes.selectedButton : ""}`}
          >
            <img src={type.image} alt={type.name} className={classes.buttonImg} />
          </Button>
        ))}
      </div>

      <h3 className={classes.title}>בחר את סגנון הכיס שלך</h3>
      <div className={classes.container}>
        {packetType.map((type) => (
          <Button
            key={type.name}
            onClick={() => setSelectedPacketType(type.name)}
            className={`${classes.button} ${selectedPacketType === type.name ? classes.selectedButton : ""}`}
          >
            <img src={type.image} alt={type.name} className={classes.buttonImg} />
          </Button>
        ))}
      </div>
    </>
  )
}

export default StepTwo
