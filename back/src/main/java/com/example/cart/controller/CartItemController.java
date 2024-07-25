package com.example.cart.controller;

import com.example.cart.entity.CartItem;
import com.example.cart.service.CartItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cart-items")
public class CartItemController {
    @Autowired
    private CartItemService cartItemService;

    @GetMapping
    public List<CartItem> getAllCartItems() {
        return cartItemService.findAll();
    }

    @PostMapping
    public void addCartItem(@RequestBody CartItem cartItem) {
        cartItemService.save(cartItem);
    }

    @PutMapping("/{id}")
    public void updateCartItem(@PathVariable Long id, @RequestBody CartItem cartItem) {
        cartItem.setId(id);
        cartItemService.update(cartItem);
    }

    @DeleteMapping("/{id}")
    public void deleteCartItem(@PathVariable Long id) {
        cartItemService.delete(id);
    }

    @DeleteMapping
    public void clearCart() {
        cartItemService.findAll().forEach(item -> cartItemService.delete(item.getId()));
    }
}
