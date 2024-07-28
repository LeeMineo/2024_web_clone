package com.cart.cart.domain;
import lombok.Data;
@Data
public class Product {
    private Long id;
    private String name;
    private int quantity;
    private boolean giftWrap;

    // Getters and Setters
}
