import React from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import "../../public/css/styles.css";

export default function Header() {
  return (
    <div className="MainHeader">
      <Paper style={{ alignSelf: "center" }}>
        {/* We can add some text here if we'd like. Try uncommenting the line below! */}
        {/* <Typography variant="h1">Hello world! :D</Typography> */}
      </Paper>
    </div>
  );
}
