import React, { useEffect, useState } from 'react';
import TaskColumn from '../components/tasks/taskColumn';
import ModalAddTask from '../components/Modal';
import { TaskStatus } from '../components/types';
import { addTasks } from '../store/tasksSlice';
import { useAppSelector, useAppDispatch } from '../hooks';
import classes from './TaskTracker.module.scss';

const TaskTracker: React.FC = () => {
    const [isOpen, onClose] = useState<boolean>(false);
    const [editTaskId, setEditTaskId] = useState<number | undefined>(undefined);

    const tasks = useAppSelector(state => state.tasks.tasks);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('http://localhost:3005/tasks');
                if (res.ok) {
                    const data = await res.json();
                    dispatch(addTasks([...data]));
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const taskStatuses = Object.values(TaskStatus);
    const taskList = taskStatuses.map(status => ({
        status,
        tasks: tasks?.filter(task => task.status === status),
    }));

    const openModal = (id?: number | undefined) => {
        setEditTaskId(id);
        onClose(true);
    };

    return (
        <>
            <section className={classes.top}>
                <button
                    className={classes.createTask}
                    onClick={() => openModal()}
                >
                    Создать задачу
                </button>
            </section>

            <section className={classes.tasks}>
                {taskList.map(({ status, tasks }, i) => (
                    <TaskColumn
                        key={i}
                        status={status}
                        tasks={tasks}
                        onClick={(id: number | undefined) => openModal(id)}
                    />
                ))}
            </section>

            <ModalAddTask
                editTaskId={editTaskId}
                isOpen={isOpen}
                onClose={() => onClose(false)}
            />
        </>
    );
};

export default TaskTracker;
