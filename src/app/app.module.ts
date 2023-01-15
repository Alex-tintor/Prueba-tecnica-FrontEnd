import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './views/principal/principal.component';
import { GeneralCardComponent } from './core/general-card/general-card.component';
import { HttpClientModule } from '@angular/common/http';
import { GeneralHeaderComponent } from './core/general-header/general-header.component';
import { PostComponentComponent } from './views/post-component/post-component.component';
import { UpdateComponent } from './views/update/update.component';
import { DeleteComponent } from './views/delete/delete.component';
import { PatchComponent } from './views/patch/patch.component';
import { GetComponent } from './views/get/get.component';
import { MapComponent } from './views/map/map.component';
import { OlMapComponent } from './core/ol-map/ol-map.component';



@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    GeneralCardComponent,
    GeneralHeaderComponent,
    PostComponentComponent,
    UpdateComponent,
    DeleteComponent,
    PatchComponent,
    GetComponent,
    MapComponent,
    OlMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
