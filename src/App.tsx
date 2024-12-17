import React, { FunctionComponent, JSX } from 'react';
import style from "./style.module.css"
import Tittle from './components/Tittle/Tittle.tsx';
import Task from './components/Task/Task.tsx';

const App:FunctionComponent = ():JSX.Element => {
  return (
    <div className={style.Body}>
      <Tittle text={"Todos"}/>
      <Task name={"prekol"}></Task>
    </div>
  );
}

export default App;
