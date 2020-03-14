import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

export const TaskCreatorComponent = (props: any) => {
  const [newTaskName, setNewTaskName] = useState("");

  const updateNewTaskValue = (e: any) => setNewTaskName(e.target.value);

  const createNewTask = () => {
    props.callback(newTaskName);
    setNewTaskName("");
  };

  return (
    <div>
      <TextField
        id="standard-basic"
        label="Standard"
        type="text"
        value={newTaskName}
        onChange={updateNewTaskValue}
      />
      <Button
        variant="contained"
        onClick={createNewTask}
        color="default"
        startIcon={<CloudUploadIcon />}
      >
        Add
      </Button>
      {/* <button onClick={createNewTask}>Add</button> */}
    </div>
  );
};
