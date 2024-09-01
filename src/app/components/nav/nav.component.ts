import { Component, inject } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ProductoService } from '../../services/producto.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  serviceProduct=inject(ProductoService)
 
  search = new FormControl(' ', {nonNullable: true});

  private cartService = inject(CartService);
  cartItemCount = this.cartService.cartItemCount;
}
