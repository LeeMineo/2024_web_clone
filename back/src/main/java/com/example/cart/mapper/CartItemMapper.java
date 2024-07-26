package com.example.cart.mapper;

import com.example.cart.entity.CartItem;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface CartItemMapper {

    @Select("SELECT * FROM cart_items WHERE id = #{id}")
    CartItem selectCartItemById(Long id);

    @Select("SELECT * FROM cart_items")
    List<CartItem> selectAllCartItems();

    @Insert("INSERT INTO cart_items (name, quantity, gift_wrapped) VALUES (#{name}, #{quantity}, #{giftWrapped})")
    @Options(useGeneratedKeys = true, keyProperty = "id")
    void insertCartItem(CartItem cartItem);

    @Update("UPDATE cart_items SET name = #{name}, quantity = #{quantity}, gift_wrapped = #{giftWrapped} WHERE id = #{id}")
    void updateCartItem(CartItem cartItem);

    @Delete("DELETE FROM cart_items WHERE id = #{id}")
    void deleteCartItem(Long id);

    List<CartItem> findAll();
    void insert(CartItem cartItem);
    void update(CartItem cartItem);
    void delete(Long id);
}
