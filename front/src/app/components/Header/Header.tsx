import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css';
import Image from 'next/image'; // Next.js의 Image 컴포넌트를 추가합니다.

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logoSection}>
                <Link href="/">
                  <Image src="/images/logo.png" alt="한율 로고" width={200}
                height={50}/>
                </Link>
            </div>
            <div className={styles.rightImage}>
                <Image src="/images/rg.png" alt="Additional Logo" width={50} height={50} />
            </div>
            <hr className={styles.divider} />
            <nav className={styles.navigation}>
                <Link href="/bath" passHref><span>베스트</span></Link>
                <Link href="/products" passHref><span>제품</span></Link>
                <Link href="/line" passHref><span>라인</span></Link>
                <Link href="/brand" passHref><span>브랜드</span></Link>
            </nav>
        </header>
    );
};

export default Header;