import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { InputLabel, MenuItem } from "@material-ui/core";
import Select from '@material-ui/core/Select';
import Paper from "@material-ui/core/Paper";

// STYLING
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "40ch",
    },
    label: {},
  },
}));
////////////////////////////////////////////////////////////////////////////////
function CategorySelect() {
  // category is "chores", "hobbies", "school", "self-care", "social", or "work"
  const [category, setCategory] = React.useState("");

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  }
  return (
    <Paper id="category-selector-component">
      <InputLabel>Category</InputLabel>
      <Select
        variant="outlined"
        id="category-selection"
        value={category}
        onChange={handleCategoryChange}
      >
        <MenuItem value={"chores"}>Chores</MenuItem>
        <MenuItem value={"hobbies"}>Hobbies</MenuItem>
        <MenuItem value={"school"}>School</MenuItem>
        <MenuItem value={"self-care"}>Self-care</MenuItem>
        <MenuItem value={"Social"}>Social</MenuItem>
        <MenuItem value={"work"}>Work</MenuItem>
      </Select>
    </Paper>
  )
}
// EXPORT
export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="standard-basic"
        label="Task"
        inputProps={{
          min: 0,
          style: { textAlign: "left", verticalAlign: "center" },
        }}
      />
      <CategorySelect/>
    </form>
  );
}
