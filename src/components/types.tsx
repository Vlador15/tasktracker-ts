export enum TaskStatus {
    CREATED = 'Создана',
    IN_PROGRESS = 'В работе',
    COMPLETED = 'Завершена',
}

export interface ITask {
    number?: number;
    title: string;
    desc: string;
    status: TaskStatus;
    date?: string;
}

export interface ITaskProps {
    task: ITask;
    [key: string]: any;
}

export interface ITaskColumnProps {
    status: TaskStatus;
    tasks: ITask[];
    onClick: (id: number | undefined) => void;
}
