package com.cart.cart.controller;

import com.cart.cart.dto.ProductDto;
import com.cart.cart.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cart")
public class CartController {

    @Autowired
    private ProductService productService;

    @PostMapping("/products")
    public ResponseEntity<ProductDto> addProduct(@RequestBody ProductDto productDto) {
        return ResponseEntity.ok(productService.addProduct(productDto));
    }

    @GetMapping("/products")
    public ResponseEntity<List<ProductDto>> getAllProducts() {
        return ResponseEntity.ok(productService.getAllProducts());
    }

    @GetMapping("/products/{id}")
    public ResponseEntity<ProductDto> getProductById(@PathVariable Long id) {
        return ResponseEntity.ok(productService.getProductById(id));
    }

    @PutMapping("/products/{id}")
    public ResponseEntity<ProductDto> updateProduct(@PathVariable Long id, @RequestBody ProductDto productDto) {
        return ResponseEntity.ok(productService.updateProduct(id, productDto));
    }

    @DeleteMapping("/products/{id}")
    public ResponseEntity<Void> deleteProduct(@PathVariable Long id) {
        productService.deleteProduct(id);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/products")
    public ResponseEntity<Void> clearCart() {
        productService.clearCart();
        return ResponseEntity.noContent().build();
    }
}
