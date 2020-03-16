import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

export const TaskBannerComponent = (props: any) => (
  <AppBar position="static">
    <Toolbar>
      <IconButton edge="start" color="inherit" aria-label="menu">
        <MenuIcon />
      </IconButton>
      <Typography variant="h6">
        {props.userName}'s Tasks App (
        {props.taskItems.filter((t: any) => !t.done).length} tasks to do)
      </Typography>
      <Button color="inherit">Login</Button>
    </Toolbar>
  </AppBar>
  // <h4>
  //   {props.userName}'s Tasks App (
  //   {props.taskItems.filter((t: any) => !t.done).length} tasks to do)
  // </h4>
);
