package com.example.cart.service;

import com.example.cart.entity.CartItem;
import com.example.cart.mapper.CartItemMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartItemService {
    @Autowired
    private CartItemMapper cartItemMapper;

    public List<CartItem> findAll() {
        return cartItemMapper.findAll();
    }

    public void save(CartItem cartItem) {
        cartItemMapper.insert(cartItem);
    }

    public void update(CartItem cartItem) {
        cartItemMapper.update(cartItem);
    }

    public void delete(Long id) {
        cartItemMapper.delete(id);
    }
}
