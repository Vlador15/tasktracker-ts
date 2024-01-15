import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITask } from '../components/types';
import { getRandID } from '../utils';

interface TaskState {
    tasks: ITask[];
}

const initialState: TaskState = {
    tasks: [],
};

const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTasks: (state, action: PayloadAction<ITask[]>) => {
            state.tasks = action.payload;
        },
        addTask: (state, action: PayloadAction<ITask>) => {
            state.tasks.push({
                number: getRandID(),
                date: new Date().toLocaleString(),
                title: action.payload.title,
                desc: action.payload.desc,
                status: action.payload.status,
            });
        },
        updateTask: (
            state,
            action: PayloadAction<{ number: number | undefined; task: ITask }>
        ) => {
            const task = state.tasks.find(
                task => task.number === action.payload.number
            );
            if (task) {
                task.title = action.payload.task.title;
                task.status = action.payload.task.status;
                task.desc = action.payload.task.desc;
            }
        },
        deleteTask: (
            state,
            action: PayloadAction<{ number: number | undefined; task: ITask }>
        ) => {
            state.tasks = state.tasks.filter(
                task => task.number !== action.payload.number
            );
        },
    },
});

export const { addTasks, addTask, updateTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
