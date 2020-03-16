import React from "react";
import { TableRow, TableCell, Checkbox, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

export const TaskRowComponent = (props: any) => (
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
        <IconButton aria-label="delete" color="primary">
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  </>
);
