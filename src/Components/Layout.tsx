import React, { PropsWithChildren } from 'react';
import styles from './Layout.module.css';

const Layout = (props: PropsWithChildren<{}>): JSX.Element => {
    return (
        <div className={styles.app}>
            <header></header>
            <main>{props.children}</main>
            <footer></footer>
        </div>
    );
};

export default Layout;
