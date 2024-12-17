import React, { FunctionComponent, useCallback, JSX, useState} from "react";
import style from "./style.module.css";
import { TaskProps } from "../../types";

const TaskInput:FunctionComponent<{ pushTask: (task: TaskProps) => void }> = ({ pushTask }): JSX.Element => {
    const [inputValue, setValue] = useState<string>('');
    const [idCount, setId] = useState<number>(0);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setValue(e.target.value);
    };

    const handleClick = useCallback((): void => {
        if (inputValue.trim() !== '') {
            const currentTask: TaskProps = {
                name: inputValue,
                done: false,
                id: idCount
            };
            pushTask(currentTask);
            setId((prevId) => prevId + 1); // Используем функциональный обновление
            setValue('');
        }
    }, [inputValue, pushTask]);

    
    return(
        <div className={style.InputBlock}>
            <input value={inputValue} onChange={handleChange} className={style.Input}/>
            <button onClick={handleClick} className={style.Button}>Создать таску</button>
        </div>
    )
}

export default TaskInput