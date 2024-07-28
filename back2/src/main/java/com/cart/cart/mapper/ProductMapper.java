package com.cart.cart.mapper;

import com.cart.cart.domain.Product;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface ProductMapper {
    void insertProduct(Product product);

    List<Product> findAll();

    Product findById(Long id);

    void updateProduct(Product product);

    void deleteProduct(Long id);

    void deleteAll();
}
