import { Routes } from '@angular/router';
import { ListadoComponent } from './pages/listado/listado.component';
import { CartComponent } from './pages/cart/cart.component';
import { DetallesComponent } from './pages/detalles/detalles.component';

export const routes: Routes = [
    { path: '', component: ListadoComponent },
    { path: 'listado', component:ListadoComponent},
    { path:'cart', component:CartComponent},
    {path:'producto/:id', component:DetallesComponent}


];
