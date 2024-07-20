// src/app/components/MainContent/Products.tsx
import React from 'react';
import styles from './MainContent.module.css';

const Products = () => {
  return (
    <div className={styles.products}>
      <div className={styles.productItem}>제품 1</div>
      <div className={styles.productItem}>제품 2</div>
      <div className={styles.productItem}>제품 3</div>
    </div>
  );
};

export default Products;
