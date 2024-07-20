import React from 'react';
import Banner from './Banner';
import Products from './Products';
import styles from './MainContent.module.css';

const MainContent = () => {
    return (
        <div className={styles.mainContent}>
            <Banner />
            <Products />
        </div>
    );
};

export default MainContent;
