export interface TittleProps {
    text: string
}

export interface TaskProps {
    name?: string;
    done?: boolean;
    id: number;
    toggleTask: (taskId: number) => void ;
}

export interface InputProps {
    name?: string;
    done?: boolean;
    id?: number;
}

export type TaskList = TaskProps[] | InputProps[]

export interface TaskTableProps {
    tasks: TaskList;
    toggleTask: (taskId: number) => void;
    clearCompletedTasks: () => void
}

export interface BtnMenuProps {
    tasks: TaskList;
    changeFilter: (newFilter: string) => void;
    clearCompletedTasks: () => void; 
}