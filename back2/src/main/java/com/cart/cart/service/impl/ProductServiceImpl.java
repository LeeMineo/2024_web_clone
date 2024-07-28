package com.cart.cart.service.impl;

import com.cart.cart.domain.Product;
import com.cart.cart.dto.ProductDto;
import com.cart.cart.mapper.ProductMapper;
import com.cart.cart.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductMapper productMapper;

    @Override
    public ProductDto addProduct(ProductDto productDto) {
        Product product = new Product();
        product.setName(productDto.getName());
        product.setQuantity(productDto.getQuantity());
        product.setGiftWrap(productDto.isGiftWrap());
        productMapper.insertProduct(product);
        return convertToDto(product);
    }

    @Override
    public List<ProductDto> getAllProducts() {
        return productMapper.findAll().stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());
    }

    @Override
    public ProductDto getProductById(Long id) {
        Product product = productMapper.findById(id);
        if (product == null) {
            throw new RuntimeException("Product not found");
        }
        return convertToDto(product);
    }

    @Override
    public ProductDto updateProduct(Long id, ProductDto productDto) {
        Product product = productMapper.findById(id);
        if (product == null) {
            throw new RuntimeException("Product not found");
        }
        product.setName(productDto.getName());
        product.setQuantity(productDto.getQuantity());
        product.setGiftWrap(productDto.isGiftWrap());
        productMapper.updateProduct(product);
        return convertToDto(product);
    }

    @Override
    public void deleteProduct(Long id) {
        productMapper.deleteProduct(id);
    }

    @Override
    public void clearCart() {
        productMapper.deleteAll();
    }

    private ProductDto convertToDto(Product product) {
        ProductDto productDto = new ProductDto();
        productDto.setId(product.getId());
        productDto.setName(product.getName());
        productDto.setQuantity(product.getQuantity());
        productDto.setGiftWrap(product.isGiftWrap());
        return productDto;
    }
}
