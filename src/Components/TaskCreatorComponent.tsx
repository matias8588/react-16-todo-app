import React, { useState } from "react";
import {
  TextField,
  Button,
  makeStyles,
  Theme,
  createStyles,
} from "@material-ui/core";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      paddingTop: 20,
      paddingBottom: 40,
      display: "flex",
    },
    button: { marginLeft: 50 },
  }),
);

export const TaskCreatorComponent = (props: any) => {
  const [newTaskName, setNewTaskName] = useState("");

  const updateNewTaskValue = (e: any) => setNewTaskName(e.target.value);

  const createNewTask = () => {
    props.callback(newTaskName);
    setNewTaskName("");
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TextField
        id="standard-basic"
        label="Add a task"
        type="text"
        value={newTaskName}
        onChange={updateNewTaskValue}
      />
      <Button
        variant="contained"
        onClick={createNewTask}
        className={classes.button}
        color="default"
        startIcon={<CloudUploadIcon />}
      >
        Add
      </Button>
      {/* <button onClick={createNewTask}>Add</button> */}
    </div>
  );
};
