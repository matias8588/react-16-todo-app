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
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core";
import theme from "./ui/theme/index";

function App() {
  const [userName, setUserName] = useState("Mati");
  const [taskItems, setTaskItems] = useState([
    {
      name: "Task one",
      done: false,
    },
    {
      name: "Task two",
      done: false,
    },
    {
      name: "Task three",
      done: true,
    },
    {
      name: "Task false",
      done: false,
    },
  ]);
  const [showCompleted, setShowCompleted] = useState(true);

  useEffect(() => {
    let data = localStorage.getItem("tasks");
    if (data != null) {
      setTaskItems(JSON.parse(data));
    } else {
      setUserName("Mati");
      setTaskItems([
        { name: "Task One", done: false },
        { name: "Task Two", done: false },
        { name: "Task Three", done: true },
        { name: "Task Four", done: false },
      ]);
      setShowCompleted(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskItems));
  }, [taskItems]);

  const createNewTask = (taskName: any) => {
    if (!taskItems.find(t => t.name === taskName)) {
      setTaskItems([...taskItems, { name: taskName, done: false }]);
    }
  };

  const toggleTask = (task: any) => {
    setTaskItems(
      taskItems.map(t => (t.name === task.name ? { ...t, done: !t.done } : t)),
    );
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
        />
      ));

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

  return (
    <>
      <ThemeProvider theme={theme}>
        <TaskBannerComponent userName={userName} taskItems={taskItems} />
        <Container>
          <TaskCreatorComponent callback={createNewTask} />
          <TableContainer>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Description</TableCell>
                  <TableCell align="right">Done</TableCell>
                  <TableCell align="right">Delete</TableCell>
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
            <TableContainer>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Description</TableCell>
                    <TableCell align="right">Done</TableCell>
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
