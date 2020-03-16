import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  makeStyles,
  Theme,
  createStyles,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

export const TaskBannerComponent = (props: any) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" className="app-bar" color="primary">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            {props.userName}'s Tasks App (
            {props.taskItems.filter((t: any) => !t.done).length} tasks to do)
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
    // <h4>
    //   {props.userName}'s Tasks App (
    //   {props.taskItems.filter((t: any) => !t.done).length} tasks to do)
    // </h4>
  );
};
