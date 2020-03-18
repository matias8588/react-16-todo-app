import React, { useState } from "react";
import {
  TableRow,
  TableCell,
  Checkbox,
  IconButton,
  TextField,
  Button,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    root: {
      flexGrow: 1,
      paddingTop: 20,
      paddingBottom: 40,
      display: "flex",
    },
    button: { marginLeft: 50 },
  }),
);

export const TaskRowComponent = (props: any) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [updateTaskName, setUpdateTaskName] = useState("");

  const updateTaskValue = (e: any) => setUpdateTaskName(e.target.value);

  const updateTask = () => {
    props.updateCallback(updateTaskName, props.task.name);
    setUpdateTaskName("");
    handleClose();
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <TableRow key={props.task.name}>
        <TableCell component="th" scope="row">
          {props.task.name}
        </TableCell>
        <TableCell align="right">
          <Checkbox
            defaultChecked
            color="primary"
            value="default"
            inputProps={{ "aria-label": "checkbox with default color" }}
            checked={props.task.done}
            onChange={() => props.toggleTask(props.task)}
          />
        </TableCell>
        <TableCell align="right">
          <IconButton aria-label="edit" color="secondary" onClick={handleOpen}>
            <EditIcon />
          </IconButton>
        </TableCell>
        <TableCell align="right">
          <IconButton
            aria-label="delete"
            color="secondary"
            onClick={() => props.deleteTask(props.task)}
          >
            <DeleteIcon />
          </IconButton>
        </TableCell>
      </TableRow>
      {/* // TODO: Move to a component */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div className={classes.root}>
              <TextField
                id="standard-basic"
                label={"Edit: " + props.task.name}
                type="text"
                value={updateTaskName}
                onChange={updateTaskValue}
              />
              <Button
                variant="contained"
                onClick={updateTask}
                className={classes.button}
                color="default"
                startIcon={<EditIcon />}
              >
                Edit
              </Button>
            </div>
          </div>
        </Fade>
      </Modal>
    </>
  );
};
