import React, { FunctionComponent, JSX, useState } from 'react';
import style from "./style.module.css"
import { InputProps, TaskList } from './types.ts';
import Tittle from './components/Tittle/Tittle.tsx';
import TaskInput from './components/TaskInput/TaskInput.tsx';
import TaskTable from './components/Tasktable/TaskTable.tsx';

const App:FunctionComponent = ():JSX.Element => {
  const [tasks, setTasks] = useState<TaskList>([]);

    const pushTask = (newTask:InputProps) => {
        setTasks((prevTasks) => [...prevTasks, newTask]); 
    };

    const toggleTask = (taskId: number) => {
      setTasks((prevTasks) => 
        prevTasks.map((task) => 
          task.id === taskId ? { ...task, done: !task.done } : task
        )
      );
    };

    const clearCompletedTasks = () => {
      setTasks((prevTasks) => prevTasks.filter(task => !task.done));
  };


  return (
    <div className={style.Body}>
      <Tittle text={"Todos"}/>
      <TaskInput pushTask={pushTask}></TaskInput>
      <TaskTable tasks={tasks} toggleTask={toggleTask} clearCompletedTasks={clearCompletedTasks}></TaskTable>
    </div>
  );
}

export default App;
