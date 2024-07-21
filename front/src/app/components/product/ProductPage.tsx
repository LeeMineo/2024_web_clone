// scr/app/components/product/ProductPage.tsx

'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { products } from './data/products'; // 경로 수정
import Image from 'next/image';
import styles from './ProductPage.module.css';

const ProductPage = () => {
    const params = useParams();
    const productId = Array.isArray(params.id) ? parseInt(params.id[0]) : parseInt(params.id);
    const product = products.find((product) => product.id === productId);

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image src={product.image} alt={product.name} width={400} height={400} />
            </div>
            <div className={styles.details}>
                <h1>{product.name}</h1>
                <p>{product.description}</p>
                <p>{product.details}</p>
                <p>{product.ml}</p>
                <div className={styles.keywords}>
                    {product.keywords.map((keyword: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined, index: React.Key | null | undefined) => (
                        <span key={index} className={styles.keyword}>{keyword}</span>
                    ))}
                </div>
                <button className={styles.purchaseButton}>구매하러 가기</button>
            </div>
        </div>
    );
};

export default ProductPage;
