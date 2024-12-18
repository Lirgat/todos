import React, { FC, JSX,  useState } from "react";
import { TaskProps } from "../../types";
import style from "./style.module.css"

const Task:FC<TaskProps> = ({id, name, done = false, toggleTask }):JSX.Element => {
    const [isActive, setActive] = useState<boolean>(done)

    const handleClick = () => {
        setActive((prev) => !prev)
        toggleTask(id)
    }

    return(
        <div className={style.TaskBlock} onClick={handleClick}>
            <button className={`${style.Button} ${isActive ? style.ButtonActive : ''}`}/>
            <div className={`${style.Task} ${isActive ? style.ActiveTask : ''}`}>{name}</div>
        </div>
    )
}

export default Task