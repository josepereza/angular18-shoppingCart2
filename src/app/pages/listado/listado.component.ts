import { Component, inject } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { JsonPipe } from '@angular/common';
import { CardComponent } from '../../components/card/card.component';
import { Producto } from '../../interfaces/producto';


@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [JsonPipe, CardComponent],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {
productoService=inject(ProductoService)

productos=toSignal<Producto[]>(this.productoService.getProducto())
}
