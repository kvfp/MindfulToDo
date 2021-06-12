import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ButtonDemo from '../demo/buttonDemo';
import SelectDemo from '../demo/selectDemo';
import TextFieldDemo from '../demo/textFieldDemo/textFieldDemo';
import FloatingActionButtonDemo from '../demo/floatingActionButtonDemo';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function ComponentGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                        <Typography variant="h3" component="h2" gutterBottom>
                            Button
                        </Typography>
                        <ButtonDemo/>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>
                        <Typography variant="h3" component="h2" gutterBottom>
                            Select
                        </Typography>
                        <SelectDemo/>
                    </Paper>
                </Grid>
                <Grid item xs={5}>
                    <Paper className={classes.paper}>
                        <Typography variant="h3" component="h2" gutterBottom>
                            Floating Action Button<br/>+ Swipeable Views 
                            <FloatingActionButtonDemo/>
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={5}>
                    <Paper className={classes.paper}>
                        <Typography variant="h3" component="h2" gutterBottom>
                            Text Field
                            <TextFieldDemo/>
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs>
                    <Paper className={classes.paper}>xs</Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>xs=6</Paper>
                </Grid>
                <Grid item xs>
                    <Paper className={classes.paper}>xs</Paper>
                </Grid>
            </Grid>
        </div>
    );
}
