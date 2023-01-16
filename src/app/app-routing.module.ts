import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralCardComponent } from './core/general-card/general-card.component';
import { PrincipalComponent } from './views/principal/principal.component';
import { MapComponent } from './views/map/map.component';
import { ProductosComponent } from './views/productos/productos.component';

const routes: Routes = [
  {path:"",redirectTo:"productos",pathMatch:"full"},
  {path:"mapa",component: MapComponent},
  {path:"productos",component:ProductosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
