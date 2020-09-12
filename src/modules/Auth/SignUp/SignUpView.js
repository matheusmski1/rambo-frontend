import Typography from "@material-ui/core/Typography";
import React from "react";
import useStyles from "./SignUpStyle";

export default function SignUpView() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography>
        SignUpView <b>Works!</b>
      </Typography>
    </div>
  );
}
