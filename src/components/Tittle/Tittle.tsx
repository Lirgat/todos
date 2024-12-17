import React, { FC, JSX } from "react"
import { TittleProps } from "../../types"
import style from "./style.module.css"

const Tittle:FC<TittleProps> = ({text}):JSX.Element => {
    return (
        <h1 className={style.Tittle}>{text}</h1>
    )
}

export default Tittle