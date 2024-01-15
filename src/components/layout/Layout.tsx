import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import classes from './Layout.module.scss';

const Layout: React.FC = () => {
    return (
        <div>
            <Header />

            <main className={classes.container}>
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
