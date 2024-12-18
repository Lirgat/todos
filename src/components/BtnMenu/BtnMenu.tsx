import React, { FunctionComponent, JSX, useCallback, useEffect, useState } from "react";
import style from "./style.module.css"
import { BtnMenuProps } from "../../types";


const BtnMenu:FunctionComponent<BtnMenuProps> = ({tasks, changeFilter, clearCompletedTasks}):JSX.Element => {
    const [activeTasksCount, setActiveTasksCount] = useState<number>(0);

    const filtering = (filtration: string) => {
        changeFilter(filtration);
    };

    const handleFilter = useCallback((e: React.MouseEvent<HTMLLIElement>) => {
        filtering(e.currentTarget.textContent || "All");
    }, []);

    useEffect(() => {
        const count = tasks.filter(task => !task.done).length;
        setActiveTasksCount(count);
    }, [tasks]);

    return (
        <div className={style.MenuBox}>
            <div className={style.MenuInfo}>{activeTasksCount} items left</div>
            <ul className={style.SortList}>
                <li onClick={handleFilter} className={style.MenuBtn}>All</li>
                <li onClick={handleFilter} className={style.MenuBtn}>Active</li>
                <li onClick={handleFilter} className={style.MenuBtn}>Completed</li>
            </ul>
            <button onClick={clearCompletedTasks} className={style.MenuBtn}>Clear completed</button>
        </div>
    )
}

export default BtnMenu