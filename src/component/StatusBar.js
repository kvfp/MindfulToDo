import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { indigo, orange, pink, cyan } from "@material-ui/core/colors";

const colorStyles = makeStyles({
  text: {
    color: "#ffffff",
  },
});

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  workHeader: {
    textColor: pink["main"],
  },
  progressHolder: {
    marginTop: "1rem",
  },
  progressBar: {
    color: pink["main"],
    backgroundColor: "#182D35",
  },
});

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

export default function LinearDeterminate() {
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
  ]);

  var WorkTotal = 0;
  var SchoolTotal = 0;
  var SelfCareTotal = 0;
  var HobbiesTotal = 0;
  var SocialTotal = 0;
  var ChoresTotal = 0;

  allEntries.forEach((entry) => {
    console.log(entry);
    if (entry.category === "work") WorkTotal++;
    if (entry.category === "school") SchoolTotal++;
    if (entry.category === "self-care") SelfCareTotal++;
    if (entry.category === "hobbies") HobbiesTotal++;
    if (entry.category === "social") SocialTotal++;
    if (entry.category === "chores") ChoresTotal++;
  });

  var WorkDone = 0;
  var SchoolDone = 0;
  var SelfCareDone = 0;
  var HobbiesDone = 0;
  var SocialDone = 0;
  var ChoresDone = 0;

  allEntries.forEach((entry) => {
    if (entry.done === true && entry.category === "work") WorkDone++;
    if (entry.done === true && entry.category === "school") SchoolDone++;
    if (entry.done === true && entry.category === "self-care") SelfCareDone++;
    if (entry.done === true && entry.category === "hobbies") HobbiesDone++;
    if (entry.done === true && entry.category === "social") SocialDone++;
    if (entry.done === true && entry.category === "chores") ChoresDone++;
  });

  var WorkProgress = 0;
  var SchoolProgress = 0;
  var SelfCareProgress = 0;
  var HobbiesProgress = 0;
  var SocialProgress = 0;
  var ChoresProgress = 0;

  if (WorkTotal !== 0) WorkProgress = (WorkDone / WorkTotal) * 100;

  if (SchoolTotal !== 0) SchoolProgress = (SchoolDone / SchoolTotal) * 100;

  if (SelfCareTotal !== 0)
    var SelfCareProgress = (SelfCareDone / SelfCareTotal) * 100;

  if (HobbiesTotal !== 0)
    var HobbiesProgress = (HobbiesDone / HobbiesTotal) * 100;

  if (SocialTotal !== 0) var SocialProgress = (SocialDone / SocialTotal) * 100;

  if (ChoresTotal !== 0) var ChoresProgress = (ChoresDone / ChoresTotal) * 100;

  console.log(
    WorkProgress,
    SchoolProgress,
    SelfCareProgress,
    HobbiesProgress,
    SocialProgress,
    ChoresProgress
  );

  // Think about how MainGrid.js will be keeping track of progress
  // If there are n categories we need n progress bars
  // Progress can be set by either number of items on list or if we later implement time for each item

  // Basic example, four categories: Work, School, Self Care, Hobbies
  // User must choose category when adding item
  // Progress is calculated by number of items of each category, not time

  // Logic for calculating progress bar values

  return (
    <div className={classes.root}>
      <Box m={5}>
        <Typography
          className={classes.workHeader}
          variant="h6"
          component="h2"
          gutterBottom
        >
          Work
        </Typography>
        <LinearProgress
          variant="determinate"
          value={WorkProgress}
          className={classes.progressBar}
        />
      </Box>
      <Box m={5}>
        <Typography
          variant="h6"
          component="h2"
          gutterBottom
          color="textSecondary"
        >
          School
        </Typography>
        <LinearProgress variant="determinate" value={SchoolProgress} />
      </Box>
      <Box m={5}>
        <Typography variant="h6" component="h2" gutterBottom color="Primary">
          Self Care
        </Typography>
        <LinearProgress
          variant="buffer"
          valueBuffer={1}
          value={SelfCareProgress}
        />
      </Box>
      <Box m={5}>
        <Typography variant="h6" component="h2" gutterBottom>
          Hobbies
        </Typography>
        <LinearProgress
          value={HobbiesProgress}
          variant="buffer"
          valueBuffer={10}
        />
      </Box>
      <Box m={5}>
        <Typography variant="h6" component="h2" gutterBottom>
          Social
        </Typography>
        <LinearProgress variant="determinate" value={SocialProgress} />
      </Box>
      <Box m={5}>
        <Typography variant="h6" component="h2" gutterBottom>
          Chores
        </Typography>
        <LinearProgress variant="determinate" value={ChoresProgress} />
      </Box>
    </div>
  );
}
