import React, { FunctionComponent, JSX, useMemo, useState } from "react";
import style from "./style.module.css"
import { BtnMenuProps } from "../../types";


const BtnMenu:FunctionComponent<BtnMenuProps> = ({tasks}):JSX.Element => {
    const [activeTasksCount, setActiveTasksCount] = useState<number>(0);
    let count:number = 0

    useMemo(():void => {
        count = 0
        setActiveTasksCount(0)
        tasks.forEach(el => {
            if(el?.done === false){
                count += 1
            }
        });
        setActiveTasksCount((activeTasksCount) => activeTasksCount += count)
    }, [tasks])

    return (
        <div className={style.MenuBox}>
            <div className={style.MenuBtn}>{activeTasksCount} items left</div>
            <ul className={style.sortList}>
                <li className={style.MenuBtn}>All</li>
                <li className={style.MenuBtn}>Active</li>
                <li className={style.MenuBtn}>Completed</li>
            </ul>
            <button className={style.MenuBtn}>Clear completed</button>
        </div>
    )
}

export default BtnMenu