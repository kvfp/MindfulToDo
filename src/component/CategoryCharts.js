import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Tooltip } from "@material-ui/core";
import { LinearProgress } from "@material-ui/core";
import QuoteCard from "./QuoteCard";
import StatusBar from "./StatusBar";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
  schoolBar: {
    color: "#fff",
  },
  card: {
    bottom: 0,
  },
  progressHolder: {
    marginTop: "1rem",
  },
  progressBar: {
    height: "2rem",
    backgroundColor: "green",
  },
}));

export default function CategoryCharts() {
  const classes = useStyles();
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <div className={classes.root}>
        <Tooltip color="secondary" title="Hi there">
          <CircularProgress
            className={classes.schoolBar}
            variant="determinate"
            value={25}
          />
        </Tooltip>

        <Tooltip color="secondary" title="Hi there">
          <CircularProgress variant="determinate" value={25} thickness={10} />
        </Tooltip>

        <CircularProgress variant="determinate" value={75} />
        <CircularProgress variant="determinate" value={100} />
        <CircularProgress variant="determinate" value={progress} />
      </div>
      <div className={classes.progressHolder}>
        <LinearProgress
          variant="determinate"
          value={10}
          className={classes.progressBar}
        />
      </div>
      <div className={classes.progressHolder}>
        <LinearProgress variant="determinate" value={10} />
      </div>
      <div className={classes.progressHolder}>
        <LinearProgress variant="determinate" value={10} />
      </div>
      <div className={classes.progressHolder}>
        <LinearProgress variant="determinate" value={10} />
      </div>
      <div className={classes.progressHolder}>
        <LinearProgress variant="determinate" value={10} />
      </div>

      <QuoteCard />
    </>
  );
}
