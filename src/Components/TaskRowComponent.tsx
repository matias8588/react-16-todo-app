import React from "react";
import { TableRow, TableCell } from "@material-ui/core";

export const TaskRowComponent = (props: any) => (
  <>
    <TableRow key={props.task.name}>
      <TableCell component="th" scope="row">
        {props.task.name}
      </TableCell>
      <TableCell align="right">
        <input
          type="checkbox"
          checked={props.task.done}
          onChange={() => props.toggleTask(props.task)}
        />
      </TableCell>
    </TableRow>
  </>
);
