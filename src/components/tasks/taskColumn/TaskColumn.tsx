import React from 'react';
import Task from '../task';
import classes from './TaskColumn.module.scss';
import { ITaskColumnProps } from '../../types';

const TaskColumn: React.FC<ITaskColumnProps> = ({ status, tasks, onClick }) => {
    return (
        <div className={classes.column}>
            <p className={classes.title}>
                {status} ({tasks.length})
            </p>

            <div className={classes.items}>
                {tasks.map(task => (
                    <div onClick={() => onClick(task.number)} key={task.number}>
                        <Task task={task} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TaskColumn;
