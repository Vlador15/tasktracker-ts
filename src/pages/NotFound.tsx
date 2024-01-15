import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
    return (
        <div>
            <h1>Такой страницы не существует</h1>
            <Link to="/tracker">Вернуться на главную страницу</Link>
        </div>
    );
};

export default NotFound;
