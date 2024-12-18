export interface TittleProps {
    text: string
}

export interface TaskProps {
    name?: string;
    done?: boolean;
    id?: number;
}

export type TaskList = [
    TaskProps?
]

export interface BtnMenuProps {
    tasks: TaskList;
}