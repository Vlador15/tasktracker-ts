import { getRandID } from '../utils';
import { TaskStatus } from '../components/types';

export const defaultTasks = [
    {
        number: getRandID(),
        date: '13.01.2024, 10:45:50',
        title: 'Найти референсы дизайна',
        desc: 'Выбрать парочку симпатичных дизайн-макетов',
        status: TaskStatus.CREATED,
    },
    {
        number: getRandID(),
        date: '14.01.2024, 17:31:11',
        title: 'Инициализировать проект',
        desc: 'Создать пустой проект для трекера. Добавить архитектуру и стейтменеджер',
        status: TaskStatus.IN_PROGRESS,
    },
];
