import Typography from "@material-ui/core/Typography";
import React from "react";
import useStyles from "./SignInStyle";

export default function SignInView() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography>
        SignInView <b>Works!</b>
      </Typography>
    </div>
  );
}
