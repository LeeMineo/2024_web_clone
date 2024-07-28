'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import { products } from '../../data/products';
import Image from 'next/image';
import styles from './product.module.css';
import axios from '../../lib/axios';  // Axios 인스턴스를 import 합니다

const ProductDetailPage = () => {
    const params = useParams();
    const productId = parseInt(params.id as string, 10);
    const product = products.find((product) => product.id === productId);
    const [quantity, setQuantity] = useState(1);
    const [giftWrap, setGiftWrap] = useState(false);

    if (!product) {
        return <div>Product not found</div>;
    }

    const handleAddToCart = async () => {
        const cartItem = {
            productId: product.id,
            name: product.name,
            image: product.image,
            quantity: quantity,
            giftWrap: giftWrap,
        };
        
        try {
            const response = await axios.post('/cart/products', cartItem);
            console.log('Added to Cart:', response.data);
        } catch (error) {
            console.error('Failed to add to cart:', error);
        }
    };

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
                    <div className={styles.options}>
                        <label>
                            수량:
                            <input
                                type="number"
                                min="1"
                                value={quantity}
                                onChange={(e) => setQuantity(parseInt(e.target.value))}
                                className={styles.quantityInput}
                            />
                        </label>
                        <label>
                            선물 포장:
                            <input
                                type="checkbox"
                                checked={giftWrap}
                                onChange={(e) => setGiftWrap(e.target.checked)}
                                className={styles.checkbox}
                            />
                        </label>
                    </div>
                    <button className={styles.purchaseButton} onClick={handleAddToCart}>
                        장바구니에 추가
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailPage;
