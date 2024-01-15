import React from 'react';
import classes from './ModalAddTask.module.scss';
import FormAddTask from '../shared/FormAddTask';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    editTaskId: number | undefined;
}

const ModalAddTask: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    editTaskId,
}) => {
    if (!isOpen) return null;
    const title: string = editTaskId
        ? 'Редактирование задачи'
        : 'Создание задачи';

    return (
        <div className={classes.modalOverlay}>
            <div className={classes.modal}>
                <div className={classes.modalContent}>
                    <div className={classes.modalTop}>
                        <p>{title}</p>
                        <button
                            className={classes.modalClose}
                            onClick={onClose}
                        >
                            X
                        </button>
                    </div>
                    <FormAddTask editTaskId={editTaskId} onClose={onClose} />
                </div>
            </div>
        </div>
    );
};

export default ModalAddTask;
