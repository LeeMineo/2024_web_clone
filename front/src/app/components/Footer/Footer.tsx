// src/app/components/Footer/index.tsx
import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>회사 정보</div>
      <div>연락처 정보</div>
      <div>소셜 미디어 링크</div>
    </footer>
  );
};

export default Footer;
