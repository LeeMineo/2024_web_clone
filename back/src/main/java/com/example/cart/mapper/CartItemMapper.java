package com.example.cart.mapper;

import com.example.cart.entity.CartItem;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface CartItemMapper {
    @Select("SELECT * FROM cart_items")
    @Results({
            @Result(property = "id", column = "id"),
            @Result(property = "name", column = "name"),
            @Result(property = "quantity", column = "quantity"),
            @Result(property = "giftWrapped", column = "gift_wrapped")
    })
    List<CartItem> findAll();

    @Insert("INSERT INTO cart_items (name, quantity, gift_wrapped) VALUES (#{name}, #{quantity}, #{giftWrapped})")
    @Options(useGeneratedKeys = true, keyProperty = "id")
    void insert(CartItem cartItem);

    @Update("UPDATE cart_items SET name=#{name}, quantity=#{quantity}, gift_wrapped=#{giftWrapped} WHERE id=#{id}")
    void update(CartItem cartItem);

    @Delete("DELETE FROM cart_items WHERE id=#{id}")
    void delete(Long id);
}
