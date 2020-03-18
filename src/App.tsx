import React, { useState, useEffect } from "react";
import { TaskBannerComponent } from "./Components/TaskBannerComponent";
import { TaskCreatorComponent } from "./Components/TaskCreatorComponent";
import { VisibilityControlComponent } from "./Components/VisibilityControlComponent";
import { TaskRowComponent } from "./Components/TaskRowComponent";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Container,
  ThemeProvider,
  makeStyles,
  Theme,
  createStyles,
} from "@material-ui/core";
import theme from "./ui/theme/index";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingTop: 40,
      paddingBottom: 40,
    },
    boldText: {
      fontWeight: "bolder",
    },
  }),
);

function App() {
  const [taskItems, setTaskItems] = useState([
    {
      name: "Task one",
      edit: false,
      done: false,
    },
    {
      name: "Task two",
      edit: false,
      done: false,
    },
    {
      name: "Task three",
      edit: false,
      done: true,
    },
    {
      name: "Task false",
      edit: false,
      done: false,
    },
  ]);
  const [showCompleted, setShowCompleted] = useState(true);

  useEffect(() => {
    let data = localStorage.getItem("tasks");
    if (data != null) {
      setTaskItems(JSON.parse(data));
    } else {
      setTaskItems([
        { name: "Task One", edit: false, done: false },
        { name: "Task Two", edit: false, done: false },
        { name: "Task Three", edit: false, done: true },
        { name: "Task Four", edit: false, done: false },
      ]);
      setShowCompleted(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskItems));
  }, [taskItems]);

  const createNewTask = (taskName: any) => {
    if (!taskItems.find(t => t.name === taskName)) {
      setTaskItems([
        ...taskItems,
        { name: taskName, edit: false, done: false },
      ]);
    }
  };

  const updateTask = (taskName: any, actualTask: any) => {
    setTaskItems(
      taskItems.map(t =>
        t.name === actualTask ? { ...t, name: taskName } : t,
      ),
    );
  };

  const toggleTask = (task: any) => {
    setTaskItems(
      taskItems.map(t => (t.name === task.name ? { ...t, done: !t.done } : t)),
    );
  };

  const deleteTask = (task: any) => {
    let removeIndex = taskItems
      .map(function(task) {
        return task.name;
      })
      .indexOf(task.name);

    let filteredItems = taskItems
      .slice(0, removeIndex)
      .concat(taskItems.slice(removeIndex + 1, taskItems.length));

    setTaskItems(filteredItems);
  };

  const taskTableRows = (doneValue: any) =>
    taskItems
      .filter(task => task.done === doneValue)
      .map(task => (
        <TaskRowComponent
          key={task.name}
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
          updateCallback={updateTask}
        />
      ));

  const classes = useStyles();
  return (
    <>
      <ThemeProvider theme={theme}>
        <TaskBannerComponent taskItems={taskItems} />
        <Container>
          <TaskCreatorComponent callback={createNewTask} />
          <TableContainer className={classes.root}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell className={classes.boldText}>
                    Description
                  </TableCell>
                  <TableCell className={classes.boldText} align="right">
                    Done
                  </TableCell>
                  <TableCell className={classes.boldText} align="right">
                    Edit
                  </TableCell>
                  <TableCell className={classes.boldText} align="right">
                    Delete
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>{taskTableRows(false)}</TableBody>
            </Table>
          </TableContainer>
        </Container>
        <Container>
          <div>
            <VisibilityControlComponent
              description="Completed Tasks"
              isChecked={showCompleted}
              callback={(checked: any) => setShowCompleted(checked)}
            />
          </div>
        </Container>
        <Container>
          {showCompleted && (
            <TableContainer className={classes.root}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell className={classes.boldText}>
                      Description
                    </TableCell>
                    <TableCell className={classes.boldText} align="right">
                      Done
                    </TableCell>
                    <TableCell className={classes.boldText} align="right">
                      Edit
                    </TableCell>
                    <TableCell className={classes.boldText} align="right">
                      Delete
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>{taskTableRows(true)}</TableBody>
              </Table>
            </TableContainer>
          )}
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
