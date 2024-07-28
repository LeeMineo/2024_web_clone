'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './cart.module.css';
import axios from '../lib/axios';  // Axios 인스턴스를 import 합니다

interface CartItem {
    id: number;  // productId 대신 id로 수정
    name: string;
    image: string;
    quantity: number;
    giftWrap: boolean;
}

const CartPage: React.FC = () => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [editingItemId, setEditingItemId] = useState<number | null>(null);

    useEffect(() => {
        // 장바구니 아이템 불러오기
        const fetchCartItems = async () => {
            try {
                const res = await axios.get('/cart/products');
                setCartItems(res.data);
            } catch (error) {
                console.error('Failed to fetch cart items:', error);
            }
        };

        fetchCartItems();
    }, []);

    const handleQuantityChange = (id: number, newQuantity: number) => {
        setCartItems(cartItems.map(item => item.id === id ? { ...item, quantity: newQuantity } : item));
    };

    const handleGiftWrapChange = (id: number, newGiftWrap: boolean) => {
        setCartItems(cartItems.map(item => item.id === id ? { ...item, giftWrap: newGiftWrap } : item));
    };

    const handleSave = async (item: CartItem) => {
        try {
            const res = await axios.put(`/cart/products/${item.id}`, item);
            setEditingItemId(null);
        } catch (error) {
            console.error('Failed to save cart item:', error);
        }
    };

    const handleDelete = async (id: number) => {
        try {
            await axios.delete(`/cart/products/${id}`);
            setCartItems(cartItems.filter(item => item.id !== id));
        } catch (error) {
            console.error('Failed to delete cart item:', error);
        }
    };

    const handleEdit = (id: number) => {
        setEditingItemId(editingItemId === id ? null : id);
    };

    const handlePurchaseAll = async () => {
        console.log("구매 완료:", cartItems);
        // 모든 아이템 삭제 (구매 후)
        try {
            await axios.delete('/cart/products');
            setCartItems([]);
        } catch (error) {
            console.error('Failed to clear cart:', error);
        }
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>장바구니</h1>
            <div className={styles.cartItems}>
                {cartItems.map((item) => (
                    <div key={item.id} className={styles.cartItem}>
                        <Link href={`/product/${item.id}`}>
                            <img src={item.image} alt={item.name} className={styles.cartItemImage} />
                        </Link>
                        <div className={styles.cartItemDetails}>
                            <Link href={`/product/${item.id}`}>
                                <h2 className={styles.cartItemName}>{item.name}</h2>
                            </Link>
                            {editingItemId === item.id ? (
                                <div className={styles.cartItemOptions}>
                                    <label>
                                        수량:
                                        <input
                                            type="number"
                                            min="1"
                                            value={item.quantity}
                                            onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                                            className={styles.quantityInput}
                                        />
                                    </label>
                                    <label>
                                        선물 포장:
                                        <input
                                            type="checkbox"
                                            checked={item.giftWrap}
                                            onChange={(e) => handleGiftWrapChange(item.id, e.target.checked)}
                                            className={styles.checkbox}
                                        />
                                    </label>
                                    <button className={styles.saveButton} onClick={() => handleSave(item)}>
                                        저장하기
                                    </button>
                                </div>
                            ) : (
                                <div className={styles.cartItemOptions}>
                                    <p>수량: {item.quantity}</p>
                                    <p>선물 포장: {item.giftWrap ? '예' : '아니오'}</p>
                                </div>
                            )}
                            <div className={styles.cartItemActions}>
                                <button className={styles.editButton} onClick={() => handleEdit(item.id)}>
                                    {editingItemId === item.id ? '취소' : '수정하기'}
                                </button>
                                <button className={styles.deleteButton} onClick={() => handleDelete(item.id)}>
                                    삭제하기
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.purchaseAllContainer}>
                <button className={styles.purchaseAllButton} onClick={handlePurchaseAll}>
                    전체 구매하기
                </button>
            </div>
        </div>
    );
};

export default CartPage;
