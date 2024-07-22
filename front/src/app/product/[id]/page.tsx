'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { products } from '../../data/products';
import Image from 'next/image';
import styles from './product.module.css';

const ProductDetailPage = () => {
    const params = useParams();
    const productId = parseInt(params.id as string, 10);
    const product = products.find((product) => product.id === productId);

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.productName}>{product.name}</h1>
            <p className={styles.productDescription}>{product.description}</p>
            <div className={styles.productDetail}>
                <div className={styles.imageContainer}>
                    <Image src={product.image} alt={product.name} width={400} height={400} />
                </div>
                <div className={styles.details}>
                    <h2 className={styles.detailsTitle}>{product.details}</h2>
                    <p className={styles.ml}>{product.ml}</p>
                    <div className={styles.keywords}>
                        {product.keywords.map((keyword, index) => (
                            <span key={index} className={styles.keyword}>{keyword}</span>
                        ))}
                    </div>
                    <button className={styles.purchaseButton}>구매하러 가기</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailPage;
