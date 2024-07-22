package com.example.cart.mapper;

import com.example.cart.model.Product;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface ProductMapper {

    @Select("SELECT * FROM products")
    List<Product> getAllProducts();

    @Select("SELECT * FROM products WHERE id = #{id}")
    Product getProductById(Long id);

    @Insert("INSERT INTO products (name, description, image, quantity, price) VALUES (#{name}, #{description}, #{image}, #{quantity}, #{price})")
    @Options(useGeneratedKeys = true, keyProperty = "id")
    void saveProduct(Product product);

    @Update("UPDATE products SET name = #{name}, description = #{description}, image = #{image}, quantity = #{quantity}, price = #{price} WHERE id = #{id}")
    void updateProduct(Product product);

    @Delete("DELETE FROM products WHERE id = #{id}")
    void deleteProduct(Long id);

    @Delete("DELETE FROM products")
    void deleteAllProducts();
}
