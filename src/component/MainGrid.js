import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TabPanel from "./TabPanel";

// STYLING
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "90rem",
    height: "42rem",
    marginTop: "2rem",
    margin: "auto",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    height: "38rem",
    color: theme.palette.text.secondary,
    backgroundColor: "#264653",
    borderRadius: "0rem",
  },
}));

// EXPORT
export default function MainGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {/* This one's the big box that will contain our to-do list! */}
        <Grid item xs>
          <Paper className={classes.paper}>
            {/* This component is what actually houses the to-do list
            and manages the state of the list. */}
            <TabPanel />
          </Paper>
        </Grid>
        {/* This is the smaller box to the side that we can use for adding more things. */}
        <Grid item xs={3}>
          <Paper className={classes.paper}></Paper>
        </Grid>
      </Grid>
    </div>
  );
}
