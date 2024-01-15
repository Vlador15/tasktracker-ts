import React from 'react';
import { Link, useMatch } from 'react-router-dom';
import classes from './Header.module.scss';

interface LinkProps {
    children: React.ReactNode;
    to: string;
}

const HeaderLink: React.FC<LinkProps> = ({ children, to, ...props }) => {
    const match = useMatch({
        path: to,
        end: to.length === 1,
    });

    return (
        <Link
            to={to}
            {...props}
            className={`${classes.link} ${match ? classes.linkActive : ''}`}
        >
            {children}
        </Link>
    );
};

export default HeaderLink;
