import React from "react";

export const TaskBannerComponent = (props: any) => (
  <h4>
    {props.userName}'s Tasks App (
    {props.taskItems.filter((t: any) => !t.done).length} tasks to do)
  </h4>
);
