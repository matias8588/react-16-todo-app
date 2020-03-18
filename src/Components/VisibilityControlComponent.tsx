import React from "react";
import { Checkbox } from "@material-ui/core";

export const VisibilityControlComponent = (props: any) => {
  return (
    <div>
      <Checkbox
        color="primary"
        checked={props.isChecked}
        onChange={e => props.callback(e.target.checked)}
      />
      <label htmlFor="form-check-label">Show {props.description}</label>
    </div>
  );
};
