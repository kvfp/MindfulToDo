import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import SaveIcon from '@material-ui/icons/Save';
import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import AlarmIcon from '@material-ui/icons/Alarm';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));

export default function ButtonDemo() {
    const classes = useStyles();

    return (
        <div>
            <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                startIcon={<DeleteIcon />}
            >
                Delete
            </Button>
            <Button
                variant="contained"
                color="default"
                className={classes.button}
                startIcon={<CloudUploadIcon />}
            >
                Upload
            </Button>
            <Button
                variant="contained"
                disabled
                color="secondary"
                className={classes.button}
                startIcon={<KeyboardVoiceIcon />}
            >
                Talk
            </Button>
            <Button
                variant="contained"
                color="primary"
                size="small"
                className={classes.button}
                startIcon={<SaveIcon />}
            >
                Save
            </Button>
            <Button
                variant="contained"
                color="primary"
                size="large"
                className={classes.button}
                startIcon={<SaveIcon />}
            >
                Save
            </Button>
            <IconButton aria-label="delete">
                <DeleteIcon />
            </IconButton>
            <IconButton aria-label="delete" disabled color="primary">
                <DeleteIcon />
            </IconButton>
            <IconButton color="secondary" aria-label="add an alarm">
                <AlarmIcon />
            </IconButton>
            <IconButton color="primary" aria-label="add to shopping cart">
                <AddShoppingCartIcon />
            </IconButton>
            <div>
                <div>
                    <Button size="small" className={classes.margin}>
                        Small
                    </Button>
                    <Button size="medium" className={classes.margin}>
                        Medium
                    </Button>
                    <Button size="large" className={classes.margin}>
                        Large
                    </Button>
                </div>
                <div>
                    <Button variant="outlined" size="small" color="primary" className={classes.margin}>
                        Small
                    </Button>
                    <Button variant="outlined" size="medium" color="primary" className={classes.margin}>
                        Medium
                    </Button>
                    <Button variant="outlined" size="large" color="primary" className={classes.margin}>
                        Large
                    </Button>
                </div>
                <div>
                    <Button variant="contained" size="small" color="primary" className={classes.margin}>
                        Small
                    </Button>
                    <Button variant="contained" size="medium" color="primary" className={classes.margin}>
                        Medium
                    </Button>
                    <Button variant="contained" size="large" color="primary" className={classes.margin}>
                        Large
                    </Button>
                </div>
                <div>
                    <IconButton aria-label="delete" className={classes.margin} size="small">
                        <ArrowDownwardIcon fontSize="inherit" />
                    </IconButton>
                    <IconButton aria-label="delete" className={classes.margin}>
                        <DeleteIcon fontSize="small" />
                    </IconButton>
                    <IconButton aria-label="delete" className={classes.margin}>
                        <DeleteIcon />
                    </IconButton>
                    <IconButton aria-label="delete" className={classes.margin}>
                        <DeleteIcon fontSize="large" />
                    </IconButton>
                </div>
            </div>
        </div>
    );
}
