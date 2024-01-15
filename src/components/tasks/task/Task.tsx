import React from 'react';
import classes from './Task.module.scss';
import { ITaskProps } from '../../types.ts';

const Task: React.FC<ITaskProps> = ({ task }) => {
    return (
        <div className={classes.task}>
            <div className={classes.task__header}>
                <p className={classes.task__number}>#{task.number}</p>
                <p className={classes.task__date}>{task.date}</p>
            </div>
            <p className={classes.task__title}>{task.title}</p>
            <p className={classes.task__desc}>{task.desc}</p>
        </div>
    );
};

export default Task;
