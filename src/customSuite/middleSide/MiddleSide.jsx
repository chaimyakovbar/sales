import React from "react";
import { makeStyles } from "@mui/styles";
import ImageFilterComponent from "../../components/ImageCollector";

const useStyles = makeStyles({
  topDiv: {
    position: 'absolute',
    left: '33%',
    maxHeight: "400px",
  },
});

const MiddleSide = () => {
  const classes = useStyles()

  return (
    <div className={classes.topDiv}>
      <ImageFilterComponent />
    </div>
  );
};

export default MiddleSide;
