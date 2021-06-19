import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

// STYLING
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "40ch",
      textAlign: "left",
      justifyContent: "left",
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  fabRoot: {},
}));

// EXPORT
export default function BasicTextFields() {
  const classes = useStyles();

  // ***For Lauren***
  // Just a basic text field and add button to get you started. Feel free to style it as you'd like!
  // List state is stored inside of MainGrid.js, so you'll need to make your DeleteFunction there
  // Because the file structure is MainGrid.js > TabPanel.js > BasicTextField, you'll need to pass
  // the function as a prop down more than once!

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Toolbar style={{ width: "100%" }}>
        <TextField
          id="standard-basic"
          label="I need to..."
          color="secondary"
          inputProps={{
            style: {
              textAlign: "left",
              verticalAlign: "center",
              width: "36rem",
            },
          }}
        />
        <div className={classes.fabRoot}>
          <Fab color="primary" aria-label="add" variant="extended">
            <AddIcon
              onClick={() => {
                alert("Ability to add entry is not yet functional");
              }}
            />
          </Fab>
        </div>
      </Toolbar>
    </form>
  );
}
