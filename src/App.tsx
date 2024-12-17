import React, { FunctionComponent, JSX, useEffect, useState } from 'react';
import style from "./style.module.css"
import { TaskList, TaskProps } from './types.ts';
import Tittle from './components/Tittle/Tittle.tsx';
import TaskInput from './components/TaskInput/TaskInput.tsx';
import BtnMenu from './components/BtnMenu/BtnMenu.tsx';

const App:FunctionComponent = ():JSX.Element => {
  const [tasks, setTasks] = useState<TaskList>([]); // Инициализация состояния для задач

    const pushTask = (newTask:TaskProps) => {
        setTasks((prevTasks) => [...prevTasks, newTask]); // Обновление состояния, добавляя новую задачу
    };

    useEffect(() => {
      console.log(tasks)
    }, [tasks])

  return (
    <div className={style.Body}>
      <Tittle text={"Todos"}/>
      <TaskInput pushTask={pushTask}></TaskInput>
      <BtnMenu tasks={tasks}></BtnMenu>
    </div>
  );
}

export default App;
