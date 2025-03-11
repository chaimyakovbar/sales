import React from "react";
import { makeStyles } from "@mui/styles";

import Drawer from "./Drawer2";
import OpenDrawer from "./OpenDrawer";
import { Link } from "react-router-dom";
import backgroundImage from "../assets/photoBackGround.jpg";
import { useMediaQuery } from "react-responsive";
import MostPoPular from "./MostPoPular";

const useStyles = makeStyles({
  topDiv: {
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
  },
  img: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    objectFit: "cover",
  },
  drawerForIphone: {
    position: "absolute",
    top: "20px",
    right: "20px",
    zIndex: 10,
  },
  drawer: {
    position: "absolute",
    top: "20px",
    left: "20px",
    zIndex: 10,
  },
  divLink: {
    position: "absolute",
    bottom: "50px",
    left: "50px",
    zIndex: 10,
  },
  link: {
    backgroundColor: "#8B5E3C",
    color: "#FFF",
    padding: "10px 20px",
    fontSize: "18px",
    borderRadius: "5px",
    textDecoration: "none",
    fontWeight: "bold",
    transition: "0.3s",
    boxShadow: "0px 4px 8px rgba(0,0,0,0.2)",
  },
});

const Index = () => {
  const classes = useStyles();

  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  return (
    <div className={classes.topDiv}>
      <img className={classes.img} src={backgroundImage} alt="Background" />

      {isMobile ? (
        <div className={classes.drawerForIphone}>
          <Drawer />
        </div>
      ) : (
        <div className={classes.drawer}>
          <OpenDrawer />
        </div>
      )}

      <div className={classes.divLink}>
        <Link
          to="/customSuit"
          className={classes.link}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#5E3C1B")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#8B5E3C")}
        >
          Custom Your Suit
        </Link>
      </div>
      <MostPoPular />
    </div>
  );
};

export default Index;
