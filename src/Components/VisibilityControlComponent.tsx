import React from "react";

export const VisibilityControlComponent = (props: any) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={props.isChecked}
        onChange={e => props.callback(e.target.checked)}
      />
      <label htmlFor="form-check-label">Show {props.description}</label>
    </div>
  );
};
