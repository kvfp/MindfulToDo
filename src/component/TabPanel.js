import PropTypes from "prop-types";
import clsx from "clsx";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Zoom from "@material-ui/core/Zoom";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import UpIcon from "@material-ui/icons/KeyboardArrowUp";
import { green } from "@material-ui/core/colors";
import Box from "@material-ui/core/Box";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { indigo, orange, pink, cyan } from "@material-ui/core/colors";
import Paper from "@material-ui/core/Paper";
import { fontWeight } from "@material-ui/system";
import React, { useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Checkbox from "@material-ui/core/Checkbox";
import Avatar from "@material-ui/core/Avatar";
import BasicTextFields from "./BasicTextField";
import { Chip } from "@material-ui/core";
////////////////////////////////////////////////////////////////////////////////
// Each new instantiated Task increments curId by one:
let curId = 0;
class Task {
  /**
   * Creates a Task object given the name of the task (any string) and the name
   * of its category (strings from a predetermined set: "work", "school","self-
   * care", "hobbies", and "social").
   * 
   * @param {string} title the name of the task that appears in the list
   * @param {string} category the name of the task category
   */
 constructor(title="Do homework", category) {
    this.title = title;
    this.category = category;
    this.id = curId;
    curId = curId + 1;
    this.done = false;
    // optional: this.date = new Date() if anyone wants encapsulation of the date
  }
}

// This overrides the default MUI theme colors.
const customTheme = createMuiTheme({
  palette: {
    primary: {
      main: cyan[500],
    },
    secondary: {
      main: pink[500],
    },
  },
});

// STYLING
const useStyles = makeStyles((theme) => ({
  listItem: {
    color: theme.palette.secondary,
  },
  root: {
    backgroundColor: "transparent",
    width: "100%",
    position: "relative",
    height: "100%",
  },
  fab: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  fabGreen: {
    color: theme.palette.common.white,
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[600],
    },
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    "aria-controls": `action-tabpanel-${index}`,
  };
}

export default function FloatingActionButtonZoom() {
  const classes = useStyles();
  const theme = useTheme();

  // STATE
  const [value, setValue] = React.useState(0);
  const [checked, setChecked] = React.useState([]);
  /* !!! The following must be replaced with not a generic list of tasks !!! */
  const [allEntries, setAllEntries] = useState([
    new Task("Do homework"),
    new Task("Eat dinner"),
    new Task("Spend time with family")
  ]);

  // FUNCTIONS
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };

  // FAB stands for Floating Action Buttton. This is how they are currently styled.
  // Notice we only see the `Add` fab. The others can be made visible
  // by uncommenting some parts below.
  const fabs = [
    {
      color: "primary",
      className: classes.fab,
      icon: <AddIcon />,
      label: "Add",
    },
    {
      color: "secondary",
      className: classes.fab,
      icon: <EditIcon />,
      label: "Edit",
    },
    {
      color: "inherit",
      className: clsx(classes.fab, classes.fabGreen),
      icon: <UpIcon />,
      label: "Expand",
    },
  ];

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);

    var newState = [];
    allEntries.map((_value) => {
      if (_value.id === value.id) {
        _value.done = !_value.done;
      }
      newState.push(_value);
    });
    setAllEntries(newState);
  };

  const CheckboxListSecondary = () => {
    return (
      <Paper style={{ width: "100%", maxHeight: "33rem", overflow: "auto" }}>
        <List dense className={classes.root}>
          {allEntries.map((value) => {
            const labelId = `checkbox-list-secondary-label-${value.id}`;

            // This dictates what appears in each list entry!
            return (
              <ListItem
                className={classes.listItem}
                key={value.id}
                disabled={true}
                style={{
                  width: "100%",
                  height: "5rem",
                  // Opacity changes when the item is marked as complete.
                  opacity: value.done === false ? 1 : 0.5,
                }}
              >
                {/* Displays an avatar. Maybe we can replace this with an icon later,
                depending on what they categorize the task as? */}
                <ListItemAvatar>
                  <Avatar
                    alt={`Avatar n°${value + 1}`}
                    src={`/static/images/avatar/${value + 1}.jpg`}
                  />
                </ListItemAvatar>

                {/* This would be a great place to display the date and time of list entry creation. 
                It may be referenced `value.creationTime` after implementation. */}
                <Chip
                  label="6/17/21 1:29 AM"
                  color="secondary"
                  style={{ marginRight: "1rem", width: "auto" }}
                />

                {/* Displays name (title) of task. */}
                <ListItemText id={labelId} primary={value.title} />

                {/* Checkbox components; shows task status. */}
                <ListItemSecondaryAction>
                  <Checkbox
                    edge="end"
                    onChange={handleToggle(value)}
                    checked={checked.indexOf(value) !== -1}
                    inputProps={{ "aria-labelledby": labelId }}
                  />
                </ListItemSecondaryAction>
              </ListItem>
            );
            // End of list entry display ^
          })}
        </List>
      </Paper>
    );
  };

  return (
    <ThemeProvider theme={customTheme}>
      <div className={classes.root}>
        <AppBar style={{ background: "white" }} position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="primary"
            variant="fullWidth"
            aria-label="action tabs example"
          >
            <Tab
              style={{
                backgroundColor: "#264653",
                fontWeight: "bold",
                fontSize: "3rem",
              }}
              label="NOW"
              {...a11yProps(0)}
            ></Tab>

            {/* So these allow there to be multiple tabs in this grid box.
            Try uncommenting below. It's pretty cool! 😎 As it adds more complexity,
            we probably shouldn't worry about doing anything with it right now. */}

            {/* <Tab
              style={{
                backgroundColor: "#264653",
                fontWeight: "bold",
                fontSize: "3rem",
              }}
              label="SOON"
              {...a11yProps(1)}
            />
            <Tab
              style={{
                backgroundColor: "#264653",
                fontWeight: "bold",
                fontSize: "3rem",
              }}
              label="LATER"
              {...a11yProps(2)}
            /> */}
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel
            value={value}
            index={0}
            dir={theme.direction}
            style={{ backgroundColor: "#264653", width: "100%" }}
          >
            {/* Contents of tab 1. */}
            <Paper
              style={{
                backgroundColor: "red",
                width: "100%",
                margin: 0,
                padding: 0,
              }}
            >
              {CheckboxListSecondary()}
            </Paper>
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            {/* Contents of tab 2. */}
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            {/* Contents of tab 3. */}
            Item Three
          </TabPanel>
        </SwipeableViews>

        {/* Fab component stuff below. */}
        {fabs.map((fab, index) => (
          <Zoom
            key={fab.color}
            in={value === index}
            timeout={transitionDuration}
            style={{
              transitionDelay: `${
                value === index ? transitionDuration.exit : 0
              }ms`,
            }}
            unmountOnExit
          >
            <Fab
              aria-label={fab.label}
              className={fab.className}
              color={fab.color}
              onClick={() => {
                /* We should use this to implement adding new to-do entries!
                   They can be added as objects of the form:

                      new Task("string that describes the task", [Category object])
                      
                   The Task.title attribute of each instantiated Task contains
                   the first string (handy for confirming we have no duplicate
                   items). The Task.category attribute of each instantiated Task
                   contains the Category object, which is a data type yet to be
                   defined that will represent categories, details TBD.
                */
                console.log("onClick")
              }}
            >
              {fab.icon}
            </Fab>
          </Zoom>
        ))}
      </div>
    </ThemeProvider>
  );
}
