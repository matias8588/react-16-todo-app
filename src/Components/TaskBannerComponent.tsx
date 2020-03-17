import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Theme,
  createStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      paddingBottom: 40,
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
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6">
            {props.userName}'s Tasks App (
            {props.taskItems.filter((t: any) => !t.done).length} tasks to do)
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};
