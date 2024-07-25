'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './cart.module.css';

interface CartItem {
    productId: number;
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
                const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cart`);
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await res.json();
                setCartItems(data);
            } catch (error) {
                console.error('Failed to fetch cart items:', error);
            }
        };

        fetchCartItems();
    }, []);

    const handleQuantityChange = (productId: number, newQuantity: number) => {
        setCartItems(cartItems.map(item => item.productId === productId ? { ...item, quantity: newQuantity } : item));
    };

    const handleGiftWrapChange = (productId: number, newGiftWrap: boolean) => {
        setCartItems(cartItems.map(item => item.productId === productId ? { ...item, giftWrap: newGiftWrap } : item));
    };

    const handleSave = async (item: CartItem) => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cart/${item.productId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(item),
            });
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            setEditingItemId(null);
        } catch (error) {
            console.error('Failed to save cart item:', error);
        }
    };

    const handleDelete = async (productId: number) => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cart/${productId}`, {
                method: 'DELETE',
            });
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            setCartItems(cartItems.filter(item => item.productId !== productId));
        } catch (error) {
            console.error('Failed to delete cart item:', error);
        }
    };

    const handleEdit = (productId: number) => {
        setEditingItemId(editingItemId === productId ? null : productId);
    };

    const handlePurchaseAll = async () => {
        console.log("구매 완료:", cartItems);
        // 모든 아이템 삭제 (구매 후)
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cart`, {
                method: 'DELETE',
            });
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
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
                    <div key={item.productId} className={styles.cartItem}>
                        <Link href={`/product/${item.productId}`}>
                            <img src={item.image} alt={item.name} className={styles.cartItemImage} />
                        </Link>
                        <div className={styles.cartItemDetails}>
                            <Link href={`/product/${item.productId}`}>
                                <h2 className={styles.cartItemName}>{item.name}</h2>
                            </Link>
                            {editingItemId === item.productId ? (
                                <div className={styles.cartItemOptions}>
                                    <label>
                                        수량:
                                        <input
                                            type="number"
                                            min="1"
                                            value={item.quantity}
                                            onChange={(e) => handleQuantityChange(item.productId, parseInt(e.target.value))}
                                            className={styles.quantityInput}
                                        />
                                    </label>
                                    <label>
                                        선물 포장:
                                        <input
                                            type="checkbox"
                                            checked={item.giftWrap}
                                            onChange={(e) => handleGiftWrapChange(item.productId, e.target.checked)}
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
                                <button className={styles.editButton} onClick={() => handleEdit(item.productId)}>
                                    {editingItemId === item.productId ? '취소' : '수정하기'}
                                </button>
                                <button className={styles.deleteButton} onClick={() => handleDelete(item.productId)}>
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
