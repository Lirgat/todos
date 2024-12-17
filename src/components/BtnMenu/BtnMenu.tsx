import React, { FunctionComponent, JSX } from "react";
import style from "./style.module.css"
import { BtnMenuProps, TaskList } from "../../types";


const BtnMenu:FunctionComponent<BtnMenuProps> = ({tasks}):JSX.Element => {
    console.log(tasks)    

    return (
        <div className={style.MenuBox}>
            <div className={style.MenuBtn}>{tasks.length} items left</div>
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