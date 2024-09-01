import { Component, inject, input } from '@angular/core';
import { Producto } from '../../interfaces/producto';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
producto=input.required<Producto>();  
cartService=inject(CartService)

addToCart(product: Producto) {
  this.cartService.addToCart(product);
}
}
