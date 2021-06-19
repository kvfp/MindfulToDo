import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TabPanel from "./TabPanel";
import CategoryCharts from "./CategoryCharts";
import { Typography } from "@material-ui/core";
import StatusBar from "./StatusBar";

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
  greeting: {
    paddingBottom: "1rem",
  },
}));

let curId = 0;
class Task {
  /* someone remind me to make a default value for category because I might die if I
     have to continue using this language without every conceivable type hint. It's
     going to be an as yet undefined object though so I still have to think about it.
  */
  constructor(title = "Do homework", category, isDone) {
    this.title = title;
    this.category = category;
    this.id = curId;
    curId = curId + 1;
    this.done = isDone;
    // optional: this.date = new Date() if anyone wants encapsulation of the date
  }
}

// EXPORT
export default function MainGrid() {
  const classes = useStyles();

  const [allEntries, setAllEntries] = useState([
    new Task("Do homework", "school", true),
    new Task("Eat dinner", "self-care", true),
    new Task("Spend time with family", "social", false),
    new Task("Watch k-dramas", "hobbies", true),
    new Task("Watch anime", "hobbies", false),
    new Task("Do chores", "chores", false),
    new Task("Cook breakfast", "chores", false),
    new Task("Go to work", "work", true),
    ,
  ]);

  // const remotelyS

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {/* This one's the big box that will contain our to-do list! */}
        <Grid item xs>
          <Paper className={classes.paper}>
            {/* This component is what actually houses the to-do list
            and manages the state of the list. */}
            <TabPanel listOfEntries={allEntries} />
          </Paper>
        </Grid>
        {/* This is the smaller box to the side that we can use for adding more things. */}
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            {/* <Typography variant="h4" className={classes.greeting}>
              I hate mornings.
            </Typography> */}
            <StatusBar />
            {/* <CategoryCharts /> */}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
