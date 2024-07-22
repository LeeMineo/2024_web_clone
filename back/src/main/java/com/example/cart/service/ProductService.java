package com.example.cart.service;

import com.example.cart.mapper.ProductMapper;
import com.example.cart.model.Product;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    private final ProductMapper productMapper;

    public ProductService(ProductMapper productMapper) {
        this.productMapper = productMapper;
    }

    public List<Product> getAllProducts() {
        return productMapper.getAllProducts();
    }

    public Product getProductById(Long id) {
        return productMapper.getProductById(id);
    }

    public void saveProduct(Product product) {
        productMapper.saveProduct(product);
    }

    public void updateProduct(Long id, Product product) {
        product.setId(id);
        productMapper.updateProduct(product);
    }

    public void deleteProduct(Long id) {
        productMapper.deleteProduct(id);
    }
}
