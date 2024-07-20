// src/app/components/MainContent/Banner.tsx
import React from 'react';
import styles from './MainContent.module.css';
import Image from 'next/image'; // Next.js의 Image 컴포넌트를 추가합니다.

const Banner = () => {
  return (
    <div className={styles.banner}>
<Image
                src="/images/product/p3.jpg" // src가 누락된 이미지 경로 추가
                alt="제품 이미지"
                width={500}
                height={500}
                className="mb-4 rounded-lg"
              />
    </div>
  );
};

export default Banner;