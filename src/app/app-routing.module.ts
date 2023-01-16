import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralCardComponent } from './core/general-card/general-card.component';
import { DeleteComponent } from './views/delete/delete.component';
import { PatchComponent } from './views/patch/patch.component';
import { PrincipalComponent } from './views/principal/principal.component';
import { PostComponentComponent } from './views/post-component/post-component.component';
import { UpdateComponent } from './views/update/update.component';
import { GetComponent } from './views/get/get.component';
import { MapComponent } from './views/map/map.component';

const routes: Routes = [
  {path:"",redirectTo:"crud",pathMatch:"full"},
  {path:"crud",component:PrincipalComponent,children:[
    {path:"get",component:GetComponent},
    {path:"put",component:UpdateComponent},
    {path:"post",component:PostComponentComponent},
    {path:"delete",component:DeleteComponent},
    {path:"patch",component:PatchComponent},
  ]},
  {path:"mapa",component: MapComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
