package com.cart.cart.dto;
import lombok.Data;

@Data
public class ProductDto {
    private Long id;
    private String name;
    private int quantity;
    private boolean giftWrap;
}
