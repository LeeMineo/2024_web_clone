package com.example.cart.service;

import com.example.cart.mapper.ProductMapper;
import com.example.cart.model.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductMapper productMapper;

    public Product saveProduct(Product product) {
        if (product.getId() == null) {
            productMapper.saveProduct(product);
        } else {
            productMapper.updateProduct(product);
        }
        return product;
    }

    public List<Product> getAllProducts() {
        return productMapper.getAllProducts();
    }

    public Product getProductById(Long id) {
        return productMapper.getProductById(id);
    }

    public void deleteProduct(Long id) {
        productMapper.deleteProduct(id);
    }

    public void deleteAllProducts() {
        productMapper.deleteAllProducts();
    }

    // updateProduct 메서드 추가
    public void updateProduct(Product product) {
        productMapper.updateProduct(product);
    }
}
