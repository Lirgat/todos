import React, { FC, JSX,  useState } from "react";
import { TaskProps } from "../../types";
import style from "./style.module.css"

const Task:FC<TaskProps> = ({name, done = false}):JSX.Element => {
    const [isActive, setActive] = useState<boolean>(done)

    const handleClick = () => {
        setActive(!isActive)
    }

    return(
        <div className={style.TaskBlock} onClick={handleClick}>
            <button className={`${style.Button} ${isActive ? style.ButtonActive : undefined}`}/>
            <div className={`${style.Task} ${isActive ? style.ActiveTask : undefined}`}>{name}</div>
        </div>
    )
}

export default Task