import React, { PropsWithChildren } from 'react';
import styles from './layout.module.css';

const Layout = (props: PropsWithChildren<{}>) => {
    return (
        <div className={styles.app}>
            <header></header>
            <main>{props.children}</main>
            <footer></footer>
        </div>
    );
};

export default Layout;
