import { Component, Injector, OnInit, Signal, inject, input } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { Producto } from '../../interfaces/producto';

@Component({
  selector: 'app-detalles',
  standalone: true,
  imports: [],
  templateUrl: './detalles.component.html',
  styleUrl: './detalles.component.css'
})
export class DetallesComponent implements OnInit {
   //productoId=input<number>(0, { alias: 'id' });
  productoId = input.required<number>( { alias: 'id' }); 
  productoService=inject(ProductoService);
  injector=inject(Injector);
  producto! : Signal<Producto | undefined>;


  ngOnInit(): void {
   
    this.producto=toSignal(this.productoService.getProductoById(this.productoId()),{injector: this.injector});
  }

}
