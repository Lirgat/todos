import React, { FunctionComponent, JSX, useState } from "react"
import BtnMenu from "../BtnMenu/BtnMenu.tsx"
import { TaskTableProps } from "../../types"
import Task from "../Task/Task.tsx"
import style from "./style.module.css"

const TaskTable:FunctionComponent<TaskTableProps> = ({tasks, toggleTask, clearCompletedTasks}):JSX.Element => {
    const [filter, setFilter] = useState<string>("All")

    const filteredTasks = tasks.filter(task => {
        if (filter === "Active") return !task.done; 
        if (filter === "Completed") return task.done; 
        return true; 
    });

    
    const changeFilter = (newFilter) => {
        setFilter(newFilter)
    }

    return (
        <div className={style.TaskWrapper}>
            <div className={style.TaskBox}>
                    { tasks.length <= 0 ? (<div className={style.NoTasks}>No Tasks now</div>) : filteredTasks.map((task) => (
                        <Task {...task} key={task.id} toggleTask={toggleTask}></Task>
                    )) }
            </div>
            <BtnMenu tasks={tasks} changeFilter={changeFilter} clearCompletedTasks={clearCompletedTasks}></BtnMenu>
        </div>
    )
}

export default TaskTable