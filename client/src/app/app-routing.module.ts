import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { AuthComponent } from './components/auth/auth.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { CotizacionesListComponent } from './components/cotizaciones-list/cotizaciones-list.component';


const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
      path:'products',
      component:ProductListComponent
  },
  {
      path:'auth',
      component:AuthComponent
  },
  {
      path:'carrito',
      component:CarritoComponent
  },
  {
      path:'cotizaciones',
      component:CotizacionesListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
