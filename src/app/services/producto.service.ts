import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Producto, Productos } from '../interfaces/producto';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
urlApi="https://fakestoreapi.com/products"
  constructor() { }

http=inject(HttpClient)
cartService=inject(CartService);

getProducto(){
return this.http.get<Producto[]>(this.urlApi)
}


}
