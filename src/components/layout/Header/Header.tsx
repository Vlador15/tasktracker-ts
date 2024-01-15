import React from 'react';
import HeaderLink from './HeaderLink';
import classes from './Header.module.scss';

interface LinkType {
    path: string;
    title: string;
}

const links: LinkType[] = [
    {
        path: 'tracker',
        title: 'Трекер',
    },
    {
        path: 'profile',
        title: 'Профиль',
    },
];

const Header: React.FC = () => {
    return (
        <header>
            <p className={classes.title}>Task tracker</p>
            <div className={classes.links}>
                {links.map(({ path, title }: LinkType, index) => (
                    <HeaderLink to={path} key={index}>
                        {title}
                    </HeaderLink>
                ))}
            </div>
        </header>
    );
};

export default Header;
