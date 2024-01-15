import React, { useEffect, useState } from 'react';
import Input from '../../ui/Input';
import Button from '../../ui/Button';
import Select from '../../ui/Select';
import classes from './FormAddTask.module.scss';

import { TaskStatus } from '../../types';
import { addTask, updateTask, deleteTask } from '../../../store/tasksSlice';
import { useAppSelector, useAppDispatch } from '../../../hooks';

interface FormProps {
    editTaskId: number | undefined;
    onClose: () => void;
}

const FormAddTask: React.FC<FormProps> = ({ editTaskId, onClose }) => {
    const [task, setTask] = useState({
        title: '',
        desc: '',
        status: TaskStatus.CREATED,
    });

    const tasks = useAppSelector(state => state.tasks.tasks);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (editTaskId) {
            const isTask = tasks.find(task => task.number === editTaskId);

            if (isTask) {
                setTask({
                    title: isTask.title,
                    desc: isTask.desc,
                    status: isTask.status,
                });
            }
        }
    }, [editTaskId, tasks]);

    const eventSubmit = (type: string, e: React.FormEvent) => {
        e.preventDefault();
        onClose();
        switch (type) {
            case 'create': {
                // создание задачи
                dispatch(addTask({ ...task }));
                break;
            }
            case 'update': {
                dispatch(updateTask({ number: editTaskId, task }));
                break;
            }
            case 'delete': {
                dispatch(deleteTask({ number: editTaskId, task }));
                break;
            }
        }
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        setTask({
            ...task,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <form className={classes.form}>
            <Input
                label="Название задачи"
                value={task.title}
                name="title"
                onChange={handleChange}
            />
            <Input
                label="Описание задачи"
                value={task.desc}
                name="desc"
                onChange={handleChange}
            />

            <Select
                label="Статус задачи"
                name="status"
                value={task.status}
                options={Object.values(TaskStatus)}
                onChange={handleChange}
            />

            {editTaskId && (
                <Button
                    color="error"
                    label={'Удалить'}
                    onClick={e => eventSubmit('delete', e)}
                />
            )}
            <Button
                color="primary"
                label={editTaskId ? 'Обновить' : 'Сохранить'}
                onClick={e =>
                    editTaskId
                        ? eventSubmit('update', e)
                        : eventSubmit('create', e)
                }
            />
        </form>
    );
};

export default FormAddTask;
