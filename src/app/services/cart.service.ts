// services/cart.service.ts
import { Injectable, signal, computed } from '@angular/core';
import { Producto } from '../interfaces/producto';

interface CartItem extends Producto {
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart = signal<CartItem[]>([]);

  // Número total de items en el carrito
  cartItemCount = computed(() => this.cart().reduce((total, item) => total + item.quantity, 0));

  // Suma total del carrito
  cartTotal = computed(() => this.cart().reduce((total, item) => total + item.price * item.quantity, 0));

  // Lista de items en el carrito
  cartItems = computed(() => this.cart());

  addToCart(product: Producto) {
    this.cart.update(currentCart => {
      const existingItem = currentCart.find(item => item.id === product.id);
      if (existingItem) {
        return currentCart.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...currentCart, { ...product, quantity: 1 }];
      }
    });
  }

  removeFromCart(productId: number) {
    this.cart.update(currentCart => 
      currentCart.filter(item => item.id !== productId)
    );
  }

  updateQuantity(productId: number, quantity: number) {
    if (quantity <= 0) {
      this.removeFromCart(productId);
    } else {
      this.cart.update(currentCart =>
        currentCart.map(item =>
          item.id === productId ? { ...item, quantity } : item
        )
      );
    }
  }

  clearCart() {
    this.cart.set([]);
  }

  isInCart(productId: number) {
    return computed(() => this.cart().some(item => item.id === productId));
  }

  getItemQuantity(productId: number) {
    return computed(() => {
      const item = this.cart().find(item => item.id === productId);
      return item ? item.quantity : 0;
    });
  }
}