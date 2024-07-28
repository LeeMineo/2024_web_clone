package com.cart.cart.service;

import com.cart.cart.dto.ProductDto;

import java.util.List;

public interface ProductService {
    ProductDto addProduct(ProductDto productDto);
    List<ProductDto> getAllProducts();
    ProductDto getProductById(Long id);
    ProductDto updateProduct(Long id, ProductDto productDto);
    void deleteProduct(Long id);
    void clearCart();
}
